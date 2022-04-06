import { useParams } from 'react-router-dom';
import { getProduto } from '../Dados/Produtos';
import Produto from './Produto';
import './Produto.css'
function ProdutoDetalhe(prop)
{
    let params = useParams();
    let produto = getProduto(+params.idproduto);

    return(
        <Produto item={produto} detalhe/>
    );
}
export default ProdutoDetalhe;