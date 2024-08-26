import styled from "styled-components"
import FormUpdate from "../form-update/formUpdate"
import { BsFillPencilFill } from "react-icons/bs";
import { useState } from "react";

interface Props {
    nome: string,
    descricao: string,
    valor: string,
    id: any,
    url: string
}

export default function Card({ nome, descricao, valor, id, url }: Props) {

    const [display, setDisplay] = useState('none')

    if (display == 'none') {
        return (
            <div>
                <CardStyled>
                    <img src={url} alt="" />
                    <h1>{nome}</h1>
                    <p>{descricao}</p>
                    <p>R${valor}</p>

                    <PencilButton onClick={() => {
                        if (display == "none") {
                            setDisplay('block')
                        }else{
                            setDisplay('none');
                        }
                    }}>
                        <BsFillPencilFill />
                    </PencilButton>
                </CardStyled>
            </div>
        )
    } else {
        return (
            <div>
                <CardStyled>
                    <img src={url} alt="" />
                    <h1>{nome}</h1>
                    <p>{descricao}</p>
                    <p>R${valor}</p>

                    <PencilButton onClick={() => {
                        if (display == "none") {
                            setDisplay('block')
                        }else{
                            setDisplay('none');
                        }
                    }}>
                        <BsFillPencilFill />
                    </PencilButton>
                    <FormUpdate id={id} />
                </CardStyled>
            </div>
        )
    }
}

const CardStyled = styled.div`
    width: 400px;
    height: auto;
    padding-bottom: 10px;
    border-radius: 5px;
    box-shadow: 1px 2px 3px 4px rgba(12,12,12,0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    gap: 10px;

    &:hover{
        box-shadow: 2px 3px 4px 5px rgba(64, 34, 134, 0.842);
        cursor: pointer;
    }

    & img{
        width: 100%;
        height: 300px;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
    }

    & :nth-child(3){
        color: hsl(229, 8%, 60%);
        font-size: 14px;
    }
 
`

const PencilButton = styled.button`
        position: absolute;
        right: 5px;
        top: 5px;
        border-radius: 50%;
        padding: 4px;
        border: none;
        cursor: pointer;

        &:hover{
            background-color: gray;
            transform: scale(1.3);
        }
`