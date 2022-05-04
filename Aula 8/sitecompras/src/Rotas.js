import Navbar from "./EstruturaSite/NavBar/NavBar";
import Carrinho from "./Compras/Carrinho";
import DetalhesDoProduto from "./Produtos/DetalhesDoProduto";
import ProdutosEmPromocao from "./Produtos/ProdutosEmPromocao";
import ProdutosPorCategoria from "./Produtos/ProdutosPorCategoria";
import FinalizarCompra from "./Compras/FinalizarCompra";
import Login from "./Clientes/Login";
import Cadastro from "./Clientes/Cadastro";

const { BrowserRouter, Routes, Route } = require("react-router-dom");



function Rotas()
{
    return(
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<ProdutosEmPromocao />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/carrinho" element={<Carrinho remover finalizar />} />
                <Route path="/promocoes" element={<ProdutosEmPromocao />} />
                <Route path="/finalizarcompra" element={<FinalizarCompra />} />
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