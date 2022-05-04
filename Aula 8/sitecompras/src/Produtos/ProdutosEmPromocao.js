import { useEffect, useState } from "react";
import { api } from "../Services/API";
import Conteudo from "../EstruturaSite/Conteudo/Conteudo";
import Produto from "./Produto";
function ProdutosEmPromocao()
{
    const [produtos, setProdutos] = useState([])

    useEffect(()=>{
        api.get('/products').then(function ({data}) {
            setProdutos(data)
        })
    },[])

    return(
        <>
        <Conteudo titulo="Produtos em promoção">
        {produtos.map((produto)=>
            <Produto key={produto.codigo} item={produto} linkdetalhes linkadicionar />
        )}
        </Conteudo>
        </>
    );
}

export default ProdutosEmPromocao;