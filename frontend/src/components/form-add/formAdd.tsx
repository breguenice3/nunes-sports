import { useState, useEffect } from "react"
import axios from 'axios';
import styled from "styled-components";

export default function FormAdd() {

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('')
    const [preco, setPreco] = useState('')
    const [url, setUrl] = useState('')

    const [displayCadastrar, setDisplayCadastrar] = useState('none')

    const handleSubmit = async (e: any) => {
        try {
            const response = await axios.post('http://localhost:8082/api/products', {
                nome,
                descricao,
                preco,
                url
            });
            console.log('Produto adicionado: ', response.data);
        } catch (err) {
            console.log('Erro ao adicionar produto:', err);

        }
    }

    return (
        <AddContainer>
            <StyledAddButton onClick={() => {
                if (displayCadastrar == 'block') {
                    setDisplayCadastrar('none')
                } else {
                    setDisplayCadastrar('block')
                }
            }}>Cadastrar</StyledAddButton>
            <FormStyled onSubmit={handleSubmit} style={{ display: `${displayCadastrar}` }}>
                <div>
                    <label htmlFor="nome">Nome do produto:</label>
                    <input
                        type="text"
                        name="nome"
                        id="nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        placeholder="Digite o nome do produto..."
                    />
                </div>
                <div>
                    <label htmlFor="descricao">Descrição do produto:</label>
                    <input
                        type="text"
                        name="descricao"
                        id="descricao"
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                        placeholder="Descreva o produto..."
                    />
                </div>
                <div>
                    <label htmlFor="preco">Preço do produto:</label>
                    <input
                        type="number"
                        name="preco"
                        step="0.0010"
                        id="preco"
                        value={preco}
                        onChange={(e) => setPreco(e.target.value)}
                        placeholder="Digite o valor do produto..."
                    />
                </div>
                <div>
                    <label htmlFor="url">Imagem do produto:</label>
                    <input
                        type="text"
                        name="url"
                        id="url"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="Digite a url da imagem..."
                    />
                </div>
                <StyledSubmitButton type="submit">Criar</StyledSubmitButton>
            </FormStyled>
        </AddContainer>
    )
}

const FormStyled = styled.form`
    width: auto;
    height: 500px;
    background-color: hsl(231, 69%, 60%);
    padding: 50px 50px;
    border-radius: 15px;

    & div{
        width: 300px;
        display: flex;
        gap: 5px;
        flex-direction: column;
        justify-content: center;
        padding-bottom: 20px;
    }

    & input{
        padding: 10px;
        border-radius: 15px;
        outline: none;
        border: none;
    }
`

const AddContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const StyledAddButton = styled.button`
    background-color: hsl(231, 69%, 60%);
    color: white;
    padding: 20px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    font-size: 18px;
    text-transform: uppercase;
    margin-bottom: 20px;
    border: 2px solid transparent;

    &:hover{
        border: 2px solid hsl(231, 69%, 60%);
        background-color: transparent;
        color: hsl(231, 69%, 60%);
    }
`

const StyledSubmitButton = styled.button`
    background-color: #07a30768;
    border-radius: 10px;
    color: aliceblue;
    padding: 10px;
    border: none;
    cursor: pointer;
    font-size: 18px;
    text-transform: uppercase;
    margin-bottom: 20px;
    border: 2px solid transparent;

    &:hover{
        border: 2px solid #057a05ba;
        /* background-color: transparent; */
        color: white;
    }
`