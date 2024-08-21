import { useState, useEffect } from "react";
import Card from "../cardProduto/card";
import styled from "styled-components";
import FormAdd from "../form-add/formAdd";

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
        <HomeContainer>
            <HeaderStyled>
                <FormAdd />
            </HeaderStyled>
            <ContainerCards>
                {produtos.map((produto) => (
                    <div>
                        <Card nome={produto.nome} descricao={produto.descricao} valor={produto.preco} id={produto.id} key={produto.id} url={produto.url} />
                    </div>
                ))}
            </ContainerCards>
        </HomeContainer>
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
`

const HeaderStyled = styled.header`
    width: 100%;
    display: flex;
`

const HomeContainer = styled.div`
    padding-top: 20px;
    width: 100%;
    box-sizing: border-box;
`