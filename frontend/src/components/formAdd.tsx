import { useState } from "react"
import axios from 'axios';

export default function FormAdd() {

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('')
    const [preco, setPreco] = useState('')

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8082/api/products', {
                nome,
                descricao,
                preco
            });
            console.log('Produto adicionado: ', response.data);
        } catch (err) {
            console.log('Erro ao adicionar produto:', err);

        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nome">Nome do produto:</label>
                <input
                    type="text"
                    name="nome"
                    id="nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Digite o nome do produto..."
                />
                <label htmlFor="descricao">Descrição do produto:</label>
                <input
                    type="text"
                    name="descricao"
                    id="descricao"
                    value={descricao}
                    onChange={(e)=> setDescricao(e.target.value)}
                    placeholder="Descreva o produto..."
                />
                <label htmlFor="preco">Preço do produto:</label>
                <input 
                    type="number" 
                    name="preco" 
                    step="0.0010" 
                    id="preco" 
                    value={preco}
                    onChange={(e)=> setPreco(e.target.value)}
                    placeholder="Digite o valor do produto..." 
                />
                <label htmlFor="codigo">Código do produto:</label>
                <button type="submit">Cadastrar novo produto</button>
            </form>
        </div>
    )
}