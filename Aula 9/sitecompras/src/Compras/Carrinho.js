import Conteudo from "../EstruturaSite/Conteudo/Conteudo";
import {Context} from "../Context/DadosGlobais"
import { useContext } from "react";
import { api } from "../Services/API";
import { useNavigate } from "react-router-dom";

function Carrinho(prop)
{
    const {CarrinhoAcoes} = useContext(Context)
    const {ClienteAcoes} = useContext(Context)

    const navigate = useNavigate()

    let carrinho = CarrinhoAcoes.getItensCarrinho();
    let total = 0

    function handleRemoverItem(idproduto)
    {
        CarrinhoAcoes.removeItemCarrinho(idproduto)
    }

    function handleFinalizarCompra()
    {
        if (ClienteAcoes.getCliente()==null)
        {
            navigate('/login');
        }
        else
        {

            const compra = {itens: CarrinhoAcoes.getItensCarrinho()}
            
            const config = {
                headers: { Authorization: 'Bearer '+ClienteAcoes.getCliente().token }
            };
            
            api.post('/purchases', compra, config)
            .then(function (response) {
                if (response.data.sucesso)
                {
                    navigate('/finalizarcompra');
                }
                else
                {
                    alert('Houve um problema com a finalização!');
                }
            })
            .catch(function (error) {
                alert('Houve um problema com a finalização!\n'+error);
            });
        
        }
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

            {prop.finalizar && <><div><input onClick={handleFinalizarCompra} type="button" name="finalizar" id="confirmar" value="Finalizar Compra" /></div></>}
            </>
        }
        </Conteudo>
        </>
    )
}


export default Carrinho;