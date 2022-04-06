import './Produto.css'
function Produto(prop)
{
    return(
        <div className="produto">
            <h3>{prop.item.nome}</h3>
            {
                prop.item.promocao ? <p>R$ {prop.item.preco}** </p> : <p>R$ {prop.item.preco} </p>
            }
            
            <a href={'/produto/'+prop.item.codigo}>
                <img src={prop.item.imagem}
                    alt={prop.item.descricao} />
            </a>
            {
                prop.detalhe && <p>{prop.item.descricao}</p>
            }
        </div>
    );
}
export default Produto;