import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../Services/API';
import './NavBar.css'
function Navbar(prop)
{
    const [categorias, setCategorias] = useState([])

    useEffect(()=>{
        api.get('/categories')
        .then(function ({data}) {
          setCategorias(data)
        })
    },[])

    return(
        <div id="nav">
        <ul className='menu'>
            <li>
                <Link to='#cadastro'>Cadastro</Link>
                <ul>
                    <li><Link to="/login">Efetuar login</Link></li>
                    <li><Link to='/cadastro'>Efetuar cadastro</Link></li>
                </ul>
            </li>
            <li><Link to='/carrinho'>Meu carrinho</Link></li>
            <li>
                <Link to='#categorias'>Categorias</Link>
                <ul>
                    <li><Link to='/promocoes'>Promoções</Link></li>
                    {categorias.map((categoria)=>
                        <li key={categoria.idcategoria}>
                            <Link to={'/categoria/'+categoria.idcategoria}>
                            {categoria.nome}
                            </Link>
                        </li>
                    )}
                </ul>
            </li>
        </ul>
        </div>
    );
}
export default Navbar;