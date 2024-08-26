import { useState } from "react";
import axios from 'axios';
import styled from "styled-components";
import DeleteButton from "../deleteButton/buttonDelete";

export default function FormUpdate(idC: any) {

    const [nomeAtualizado, setNomeAtualizado] = useState('');
    const [descricaoAtualizado, setDescricaoAtualizado] = useState('')
    const [precoAtualizado, setPrecoAtualizado] = useState('')
    const [urlAtualizada, setUrlAtualizada] = useState('')

    const id = idC.id

    const handleUpdate = async (e: any) => {
        try {
            const response = await axios.post('http://localhost:8082/api/update', {
                nomeAtualizado,
                descricaoAtualizado,
                precoAtualizado,
                id,
                urlAtualizada
            });
            console.log('Produto adicionado: ', response.data);
        } catch (err) {
            console.log('Erro ao adicionar produto:', err);

        }
    }

    return (
        <div>
            <FormStyled onSubmit={handleUpdate}>
                <div>
                    <label htmlFor="nomeAtt">Nome atualizado:</label>
                    <input
                        type="text"
                        id="nomeAtt"
                        placeholder="Digite o novo nome do produto..."
                        onChange={(e) => {
                            setNomeAtualizado(e.target.value)
                        }}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="descAtt">Descrição atualizada:</label>
                    <input
                        type="text"
                        id="descAtt"
                        placeholder="Digite a nova descricao do produto..."
                        onChange={(e) => {
                            setDescricaoAtualizado(e.target.value)
                        }}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="precoAtt">Preço atualizado:</label>
                    <input
                        type="number"
                        step={'0.0010'}
                        id="precoAtt"
                        placeholder="Digite o novo valor do produto..."
                        onChange={(e) => {
                            setPrecoAtualizado(e.target.value)
                        }}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="imgAtt">Nova imagem:</label>
                    <input
                        type="text"
                        id="imgAtt"
                        placeholder="Digite a nova url da imagem..."
                        onChange={(e) => {
                            setUrlAtualizada(e.target.value)
                        }}
                        required
                    />
                </div>
                <div>
                    <StyledSubmitButton type="submit">Atualizar</StyledSubmitButton>
                </div>
            </FormStyled>
            <StyledButtonDiv>
                <DeleteButton id={id}/>
            </StyledButtonDiv>
        </div>
    )
}

const FormStyled = styled.form`
    padding-top: 20px;

    & div{
        display: flex;
        gap: 5px;
        flex-direction: column;
        justify-content: center;
        padding-bottom: 15px;
    }

    & input{
        width: 300px;
        padding: 10px;
        border-radius: 10px;
        outline: none;
    }
`

const StyledSubmitButton = styled.button`
    background-color: rgba(64, 34, 134, 0.842);
    border-radius: 10px;
    color: aliceblue;
    padding: 3px;
    border: none;
    cursor: pointer;
    font-size: 14px;
    text-transform: uppercase;
    margin-bottom: 5px;
    border: 2px solid transparent;
    margin-top: 20px;

    &:hover{
        border: 2px solid rgba(64, 34, 134, 0.842);
        color: rgba(64, 34, 134, 0.842);
        background-color: transparent;
    }
`

const StyledButtonDiv = styled.div`
        display: flex;
        gap: 5px;
        flex-direction: column;
        justify-content: center;
`