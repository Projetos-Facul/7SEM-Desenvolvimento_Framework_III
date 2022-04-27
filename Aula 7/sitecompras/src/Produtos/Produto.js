import { useContext } from 'react';
import { Context } from '../Context/DadosGlobais';
import './Produto.css'
function Produto(prop)
{
    const {CarrinhoAcoes} = useContext(Context)
    function handleAdicionar ()
    {
        const item = {
            idproduto: prop.item.codigo,
            qtd: 1,
            nome: prop.item.nome,
            preco: prop.item.preco
        }

        CarrinhoAcoes.addItemCarrinho(item);
    }
    return(
        <div className="produto">
            <h3>{prop.item.nome}</h3>
            <p>R$ {prop.item.preco}</p>
            <img src={prop.item.imagem}
                alt={prop.item.descricao} />
            {
                prop.descricao &&
                <p>{prop.item.descricao}</p>
            }

            <p><a href={"/produto/"+prop.item.codigo}>Detalhes</a></p>
            <p><a href="#add" onClick={handleAdicionar}>Adicionar</a></p>
        </div>
    );
}
export default Produto;