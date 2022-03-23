import Descricao from "./Descricao";
import Imagem from "./Imagem";
import Titulo from "./Titulo";

function Produto(prop) {
    return (
        <div className='produto'>
            <Titulo texto={prop.produto.nome}/>
            <Imagem imagem={prop.produto.imagem} texto={prop.produto.descricao}/>
            <Descricao texto={prop.produto.descricao}/>
        </div>
    )
}

  export default Produto;