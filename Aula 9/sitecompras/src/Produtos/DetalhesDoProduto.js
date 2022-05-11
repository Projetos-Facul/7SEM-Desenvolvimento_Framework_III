import { useParams } from "react-router-dom";
import { getProduto } from "../Dados/Produtos";
import Produto from "./Produto";


function DetalhesDoProduto()
{

    let params = useParams();
    let produto = getProduto(+params.idproduto);
    return(
        <Produto item={produto} descricao linkadicionar />
    );
}

export default DetalhesDoProduto;