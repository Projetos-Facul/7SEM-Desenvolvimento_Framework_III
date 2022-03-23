import { useState } from 'react';
import './App.css';
import FormularioProdutos from './FormularioProdutos';
import Produto from './Produto';

function App() {

  const[produtos, setProdutos] = useState([
    {
      codigo: 1,
      nome: "Notebook",
      imagem: "imagens/produtos/1.jpg",
      descricao: "Melhor computador"
    },
    {
      codigo: 2,
      nome: "Celular",
      imagem: "imagens/produtos/2.jpg",
      descricao: "Celular atual"
    },
    {
      codigo: 3,
      nome: "Toalha",
      imagem: "imagens/produtos/3.jpg",
      descricao: "Toalha matadora de vorgon"
    }
  ]);

  return (
    <>
      <h1>Listagem de produtos</h1>
      
      <FormularioProdutos produtos={produtos} setProdutos={setProdutos}/>

      {produtos.map(produto => 
        <Produto key={produto.codigo} produto={produto}/>        
      )}
    </>
  );
}

export default App;
