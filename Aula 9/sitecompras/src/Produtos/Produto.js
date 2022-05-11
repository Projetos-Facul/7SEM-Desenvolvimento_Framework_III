import './Produto.css'

import {Context} from '../Context/DadosGlobais'
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Produto(prop)
{
    const {CarrinhoAcoes} = useContext(Context)
    const navigate = useNavigate()

    function handleAdicionar(evt)
    {
        const item = {
            idproduto: prop.item.codigo,
            qtd: 1,
            nome: prop.item.nome,
            preco: prop.item.preco,
        }

        CarrinhoAcoes.addItemCarrinho(item)

        navigate('/carrinho');
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

            {
                prop.linkdetalhes &&
                <p><Link to={"/produto/"+prop.item.codigo}>Detalhes</Link></p>
            }
            
            {
                prop.linkadicionar &&
                <p><a href="#adicionar" onClick={handleAdicionar}>Adicionar</a></p>
            }

        </div>
    );
}
export default Produto;