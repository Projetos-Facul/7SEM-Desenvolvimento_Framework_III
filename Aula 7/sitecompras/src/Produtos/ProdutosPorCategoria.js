import { useParams } from "react-router-dom";
import { getCategoria } from "../Dados/Categorias";
import { getProdutosPorCategoria } from "../Dados/Produtos";
import Produto from "./Produto";
function ProdutosPorCategoria(prop)
{
    let params = useParams();
    let produtos = getProdutosPorCategoria(+params.idcategoria)
    let categoria = getCategoria(+params.idcategoria);
    return(
        <>
        <h2>{categoria.nome}</h2>
        {produtos.map((produto)=>
            <Produto key={produto.codigo} item={produto} />
        )}
        </>
    );
}

export default ProdutosPorCategoria;