import { getProdutosEmPromocao } from "../Dados/Produtos";
import Conteudo from "../EstruturaSite/Conteudo/Conteudo";
import Produto from "./Produto";
function ProdutosEmPromocao()
{
    let produtos = getProdutosEmPromocao();
    return(
        <>
        <Conteudo titulo="Produtos em promoção">
        {produtos.map((produto)=>
            <Produto key={produto.codigo} item={produto} />
        )}
        </Conteudo>
        </>
    );
}

export default ProdutosEmPromocao;