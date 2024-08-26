import styled from "styled-components";
import axios from "axios";

export default function DeleteButton(id:any){

    id = id.id;

    const handleDelete = async (e:any)=>{
        window.location.reload()
        try{
            const response = await axios.post('http://localhost:8082/api/delete',{
                id
            });
        }catch(err){
            console.log('Erro ao deleter produto: ', err);
            
        }
    }
    
    return(

        <StyledDeleteButton onClick={handleDelete}><a rel="stylesheet" href="/" />Delete</StyledDeleteButton>
        
    )
}

const StyledDeleteButton = styled.button`
    background-color: hsl(0, 94%, 66%);
    border-radius: 10px;
    color: aliceblue;
    padding: 3px;
    border: none;
    cursor: pointer;
    font-size: 14px;
    text-transform: uppercase;
    margin-bottom: 20px;
    border: 2px solid transparent;

   &:hover{
        border: 2px solid hsl(0, 94%, 66%);
        color: hsl(0, 94%, 66%);
        background-color: transparent;
    }
`