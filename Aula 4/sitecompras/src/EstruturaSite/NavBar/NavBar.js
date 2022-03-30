import { getCategorias } from '../../Dados/Categorias';
import './NavBar.css'

function NavBar (prop) {
    let categorias = getCategorias();

    return (
        <div id="nav">
            <ul className='menu'>
                <li><a href="#cadastro">Cadastro</a>
                    <ul>
                        <li><a href="/login">Efetuar Login</a></li>
                        <li><a href="/cadastro">Efetuar Cadastro</a></li>
                    </ul>
                </li>
                <li><a href="/carrinho">Meu Carrinho</a></li>
                <li><a href="#categorias">Categorias</a>
                    <ul>
                        <li><a href="/promocoes">Promoções</a></li>
                        {categorias.map((categoria)=>
                            <li key={categoria.idcategoria}><a href={"/categoria/" + categoria.idcategoria}>{categoria.nome}</a></li>
                        )}
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default NavBar;