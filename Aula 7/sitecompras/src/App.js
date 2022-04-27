import './App.css';
import { DadosGlobais } from './Context/DadosGlobais';
import Cabecalho from './EstruturaSite/Cabecalho/Cabecalho';
import Rodape from './EstruturaSite/Rodape/Rodape';
import Rotas from './Rotas';

function App() {
  return (
    <DadosGlobais>
      <Cabecalho titulo="Minha loja" />
      
      <Rotas />
      <Rodape texto={"Copyright \u00A9 " +
        (new Date().getFullYear()) + " Minha Loja"} />
    </DadosGlobais>
  );
}

export default App;
