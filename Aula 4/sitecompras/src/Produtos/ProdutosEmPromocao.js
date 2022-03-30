import { getProdutosEmPromocao } from "../Dados/Produtos";
import Produto from "./Produto";

function ProdutosEmPromocao () {
    let produtos = getProdutosEmPromocao();

    return (
        <>
            {produtos.map((produto)=>
                <Produto item={produto} />
            )}
        </>
    );
}

export default ProdutosEmPromocao;