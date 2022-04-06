import { getProdutosEmPromocao } from "../Dados/Produtos";
import Produto from "./Produto";
import Conteudo from "../EstruturaSite/Conteudo/Conteudo";
function ProdutosEmPromocao()
{
    let produtos = getProdutosEmPromocao();
    return(
        <>
        <Conteudo titulo="PRODUTOS EM PROMOÇÃO" />
        {produtos.map((produto)=>
            <Produto key={produto.codigo} item={produto} />
        )}
        </>
    );
}

export default ProdutosEmPromocao;