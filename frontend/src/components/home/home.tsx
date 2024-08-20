import { useState, useEffect } from "react";
import Card from "../cardProduto/card";
import styled from "styled-components";
import FormUpdate from "../form-update/formUpdate";

export default function Home() {

    const [produtos, setProdutos] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:8082/");
            const data = await response.json();
            setProdutos(data);
        }
        fetchData();
    }, []);

    console.log(produtos);
    

    return (
        <ContainerCards>
            {produtos.map((produto)=>(
                <div>
                <Card nome={produto.nome} descricao={produto.descricao} valor={produto.preco} id={produto.id} key={produto.id}/>
                </div>               
            ))}
        </ContainerCards>
    )
}

const ContainerCards = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    justify-content: space-evenly;
    padding: 50px 50px;
    box-sizing: border-box;
`