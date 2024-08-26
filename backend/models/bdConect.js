// index.js ou app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Produto = require('./Posts'); // Verifique o caminho
const { sequelize } = require('./db');
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
      const { nome, descricao, preco, url } = req.body;
  
      // Criação do produto
      const novoProduto = await Produto.create({
        nome,
        descricao,
        preco,
        url
      });
    } catch (error) {
      console.error('Erro ao adicionar produto:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  });

  app.post('/api/update', async(req, res)=>{
    try{
      const {nomeAtualizado, descricaoAtualizado, precoAtualizado, id, urlAtualizada} = req.body

      const produtoAtualizado = await Produto.update(
        {
          nome: nomeAtualizado,
          descricao: descricaoAtualizado,
          preco: precoAtualizado,
          url: urlAtualizada
        },{
          where: {
            id: id
          }
        }
      )
    }catch (error) {
      console.error('Erro ao adicionar produto:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  })

  app.post('/api/delete', async(req, res)=>{
    try{
      const {id} = req.body

      const deleteProduto = await Produto.destroy(
        {
          where: {
            id: id
          },
          force: true,
        }
      )
    }catch (error) {
      console.error('Erro ao adicionar produto:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  })

  app.use("/", async(_, res) =>{
    const select = await sequelize.query("SELECT * FROM produtos", {
      model: Produto,
      mapToModel: true,
    })

    res.status(200).json(select);
})

app.listen(8082, () => {
    console.log('Servidor rodando na url http://localhost:8082');
});