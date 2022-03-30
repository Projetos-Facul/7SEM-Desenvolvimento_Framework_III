import './Produto.css'

function Produto (prop) {
    return (
        <div id="produto">
            <h3>{prop.item.nome}</h3>
            <p>R$ {prop.item.preco}</p>
            <img src={prop.item.imagem} alt={prop.item.descricao}/>
        </div>
    );
}

export default Produto;