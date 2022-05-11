import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCategoria } from "../Dados/Categorias";
import { api } from "../Services/API";
import Produto from "./Produto";
function ProdutosPorCategoria(prop)
{
    const [produtos, setProdutos] = useState([])

    let params = useParams();
    const idcategoria = params.idcategoria

    useEffect(()=>{
        api.get('/products/categories/'+idcategoria).then(function ({data}) {
            setProdutos(data)
        })
    },[idcategoria])

    
    let categoria = getCategoria(+idcategoria)

    
    return(
        <>
        <h2>{categoria.nome}</h2>
        {produtos.map((produto)=>
            <Produto key={produto.codigo} item={produto} linkdetalhes linkadicionar />
        )}
        </>
    );
}

export default ProdutosPorCategoria;