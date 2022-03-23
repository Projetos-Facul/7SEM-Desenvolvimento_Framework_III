import { useState } from "react"

function FormularioProdutos(props)
{
    const[produto, setProduto] = useState(
        {
            codigo: 4,
            nome: "Toalha de mesa",
            imagem: "imagens/produtos/4.jpg",
            descricao: "Toalha de mesa xadrez"
        }
    );

    function incluir(){
        props.setProdutos([...props.produtos, produto]);
    }
    
    return(
        <>
            <h1>Cadastro de Produtos:</h1>
            <form>
                <label htmlFor='codigo'>Codigo:</label>
                <input type='text' name='codigo' id='codigo'/>

                <label htmlFor='nome'>Nome:</label>
                <input type='text' name='nome' id='nome'/>

                <label htmlFor='imagem'>Imagem:</label>
                <input type='text' name='imagem' id='imagem'/>

                <label htmlFor='descricao'>Descricao:</label>
                <textarea name='descricao' id='descricao'/>

                <input type='button' name='add' id='add' value='Adicionar' onClick={incluir}/>
            </form>
        </>
    )
}

export default FormularioProdutos