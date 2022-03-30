import './App.css';
import Cabecalho from './EstruturaSite/Cabecalho/Cabecalho';
import Conteudo from './EstruturaSite/Conteudo/Conteudo';
import NavBar from './EstruturaSite/NavBar/NavBar';
import Rodape from './EstruturaSite/Rodape/Rodape';
import ProdutosEmPromocao from './Produtos/ProdutosEmPromocao';
import ProdutosPorCategoria from './Produtos/ProdutosPorCategoria';
import Rotas from './Rotas';

function App() {
  return (
    <>
      <Cabecalho titulo="Minha Loja" />
      <NavBar />
      <Conteudo titulo="Home">
        <ProdutosEmPromocao />
        <ProdutosPorCategoria idcategoria="1" />
      </Conteudo>
      <Rodape texto={"Copyright \u00A9 " + (new Date().getFullYear()) + " Minha Loja"} />
    </>
  );
}

export default App;
