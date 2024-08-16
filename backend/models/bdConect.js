// index.js ou app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Produto = require('./Posts'); // Verifique o caminho
const corsOptions = {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
};

const app = express();
app.use(cors(corsOptions));
app.use(bodyParser.json());

app.post('/api/products', async (req, res) => {
    try {
      const { nome, descricao, preco } = req.body;
  
      // Validação do preço
      if (isNaN(preco)) {
        return res.status(400).json({ error: 'Preco deve ser um número' });
      }
  
      // Criação do produto
      const novoProduto = await Produto.create({
        nome,
        descricao,
        preco
      });
  
      res.status(201).json({ message: 'Produto adicionado com sucesso!', produto: novoProduto });
    } catch (error) {
      console.error('Erro ao adicionar produto:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  });

app.listen(8082, () => {
    console.log('Servidor rodando na url http://localhost:8082');
});