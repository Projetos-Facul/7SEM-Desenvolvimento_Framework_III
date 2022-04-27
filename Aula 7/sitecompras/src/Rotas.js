import Carrinho from "./Compras/Carrinho";
import Navbar from "./EstruturaSite/NavBar/NavBar";
import DetalhesDoProduto from "./Produtos/DetalhesDoProduto";
import ProdutosEmPromocao from "./Produtos/ProdutosEmPromocao";
import ProdutosPorCategoria from "./Produtos/ProdutosPorCategoria";

const { BrowserRouter, Routes, Route } = require("react-router-dom");


function Rotas()
{
    return(
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<ProdutosEmPromocao />} />
                <Route path="/login" element={<h1>Efetuar login</h1>} />
                <Route path="/cadastro" element={<h1>Efetuar cadastro</h1>} />
                <Route path="/carrinho" element={<Carrinho />} />
                <Route path="/promocoes" element={<ProdutosEmPromocao />} />
                <Route path="/categoria" element={<ProdutosPorCategoria />}>
                    <Route path=":idcategoria" element={<ProdutosPorCategoria />} />
                </Route>
                <Route path="/produto" element={<DetalhesDoProduto />}>
                    <Route path=":idproduto" element={<DetalhesDoProduto />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;