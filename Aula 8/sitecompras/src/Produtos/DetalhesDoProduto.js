import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../Services/API";
import Produto from "./Produto";


function DetalhesDoProduto()
{
    const [produto, setProdutos] = useState([])

    let params = useParams();
    const idproduto = params.idproduto;
    useEffect(()=>{
        api.get('/products/'+idproduto).then(function ({data}) {
            setProdutos(data)
        })
    },[idproduto])

    return(
        <Produto item={produto} descricao linkadicionar />
    );
}

export default DetalhesDoProduto;