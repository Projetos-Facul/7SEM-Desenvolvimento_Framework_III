import { getCategoria } from "../Dados/Categorias";
import { getProdutosPorCategoria } from "../Dados/Produtos";
import Produto from "./Produto";

function ProdutosPorCategoria (prop) {
    let produtos = getProdutosPorCategoria(+prop.idcategoria);
    let categoria = getCategoria(+prop.idcategoria);

    return (
        <>
            <h2>{categoria.nome}</h2>
            {produtos.map((produto)=>
                <Produto item={produto} />
            )}
        </>
    );
}

export default ProdutosPorCategoria;