import ProdutosEmPromocao from "./Produtos/ProdutosEmPromocao";
import Navbar from './EstruturaSite/NavBar/NavBar';
import ProdutosPorCategoria from "./Produtos/ProdutosPorCategoria";
import ProdutoDetalhe from "./Produtos/ProdutoDetalhe";

const { BrowserRouter, Routes, Route } = require("react-router-dom");


function Rotas()
{
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<ProdutosEmPromocao />} />
                <Route path="/promocoes" element={<ProdutosEmPromocao />} />
                <Route path="/login" element={<h1>Efutuar Login</h1>} />
                <Route path="/cadastro" element={<h1>Efetuar Cadastro</h1>} />
                <Route path="/carrinho" element={<h1>Carrinho</h1>} />
                <Route path="/categoria" element={<ProdutosPorCategoria />} >
                    <Route path=":idcategoria" element={<ProdutosPorCategoria />} />
                </Route>
                <Route path="/produto" element={<ProdutoDetalhe />} >
                    <Route path=":idproduto" element={<ProdutoDetalhe />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;