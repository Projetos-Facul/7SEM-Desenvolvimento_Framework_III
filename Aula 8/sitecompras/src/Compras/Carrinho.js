import Conteudo from "../EstruturaSite/Conteudo/Conteudo";
import {Context} from "../Context/DadosGlobais"
import { useContext } from "react";
import { Link } from "react-router-dom";

function Carrinho(prop)
{
    const {CarrinhoAcoes} = useContext(Context)
    let carrinho = CarrinhoAcoes.getItensCarrinho();
    let total = 0

    function handleRemoverItem(idproduto)
    {
        CarrinhoAcoes.removeItemCarrinho(idproduto)
    }

    return(
        <>
        <Conteudo titulo="Meu carrinho">
        {carrinho.length === 0 && <h3>Nenhum item no seu carrinho</h3>}

        {carrinho.length > 0 &&
            <>
            <table>
                <thead>
                    <tr>
                        <th>Produto</th>
                        <th>Quantidade</th>
                        <th>Preço</th>
                        <th>Total</th>
                        {prop.remover && <th>Ação</th>}
                    </tr>
                </thead>
                <tbody>
                {carrinho.map((item)=>
                    {
                        total += item.qtd*item.preco
                        return (
                        <tr key={item.idproduto}>
                        <td>{item.nome}</td>
                        <td>{item.qtd}</td>
                        <td>{item.preco}</td>
                        <td>{item.qtd*item.preco}</td>
                        {prop.remover && <td><a href='#remover' onClick={()=>handleRemoverItem(item.idproduto)}>Remover</a></td>}
                        </tr>);
                    }
                )}
                <tr>
                    <th colSpan='3'>Total</th>
                    <td>{total}</td>
                </tr>
                </tbody>
            </table>

            {prop.finalizar && <Link to="/finalizarcompra">Finalizar Compra</Link>}
            </>
        }
        </Conteudo>
        </>
    )
}


export default Carrinho;