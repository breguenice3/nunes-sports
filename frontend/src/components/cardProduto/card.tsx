import styled from "styled-components"
import FormUpdate from "../form-update/formUpdate"

interface Props {
    nome: string,
    descricao: string,
    valor: string,
    id: any,
    url: string
}

export default function Card({ nome, descricao, valor, id, url }: Props) {

    return (
        <div>
            <CardStyled>
                <img src={url} alt="" />
                <h1>{nome}</h1>
                <p>{descricao}</p>
                <p>R${valor}</p>

                <FormUpdate id={id} />
            </CardStyled>
        </div>
    )
}

const CardStyled = styled.div`
    width: 400px;
    height: 600px;
    padding-bottom: 10px;
    border-radius: 5px;
    box-shadow: 1px 2px 3px 4px rgba(12,12,12,0.2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:hover{
        box-shadow: 2px 3px 4px 5px rgba(64, 34, 134, 0.842);
        cursor: pointer;
    }

    & img{
        width: 250px;
        height: auto;
    }
`