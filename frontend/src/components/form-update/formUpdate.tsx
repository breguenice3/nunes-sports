import { useState } from "react";
import axios from 'axios';

export default function FormUpdate() {

    const [nomeAtualizado, setNomeAtualizado] = useState('');
    const [descricaoAtualizado, setDescricaoAtualizado] = useState('')
    const [precoAtualizado, setPrecoAtualizado] = useState('')
    const [id, setId] = useState('')

    const [display, setDisplay] = useState('none')

    const handleUpdate = async(e: any) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:8082/api/update', {
                nomeAtualizado,
                descricaoAtualizado,
                precoAtualizado,
                id
            });
            console.log('Produto adicionado: ', response.data);
        } catch (err) {
            console.log('Erro ao adicionar produto:', err);

        }
    }


    return (
        <div>
            <button onClick={()=>{
                if(display == 'block'){
                    setDisplay('none')
                }else{
                    setDisplay('block')
                }
            }}>Atualizar</button>
            <form onSubmit={handleUpdate} style={{display: `${display}`}}>
                <label htmlFor="nomeAtt">Nome atualizado:</label>
                <input
                    type="text"
                    id="nomeAtt"
                    placeholder="Digite o novo nome do produto..."
                    onChange={(e) => {
                        setNomeAtualizado(e.target.value)
                    }}
                />
                <label htmlFor="descAtt">Nova descrição do produto:</label>
                <input
                    type="text"
                    id="descAtt"
                    placeholder="Digite a nova descricao do produto..."
                    onChange={(e) => {
                        setDescricaoAtualizado(e.target.value)
                    }}
                />
                <label htmlFor="precoAtt">Novo preço de produto:</label>
                <input
                    type="number"
                    step={'0.0010'}
                    id="precoAtt"
                    placeholder="Digite o novo valor do produto..."
                    onChange={(e) => {
                        setPrecoAtualizado(e.target.value)
                    }}
                />
                <input type="number" placeholder="id"
                    onChange={(e)=>{
                        setId(e.target.value)
                    }}
                />
                <button type="submit">Atualizar produto</button>
                <p>{nomeAtualizado + "   " + descricaoAtualizado + "   " + precoAtualizado + "   " + id}</p>
            </form>
        </div>
    )
}