import './App.css';
import React, { useState } from 'react';

function App() {

  const [N1, setN1] = useState(0);
  const [N2, setN2] = useState(0);
  const [Res, setRes] = useState(0);
  const [Op, setOp] = useState('+');

  function handleChange(event)
  {    
    setN1(+event.target.value);
  }

  function handleClick(event)
  {    
    if (event.target.value === "+") {
      setRes(N1+N2);
      setOp('+');
    }
    else if (event.target.value === "-") {
      setRes(N1-N2);
      setOp('-');
    }
    else if (event.target.value === "*") {
      setRes(N1*N2);
      setOp('*');
    }
    else if (event.target.value === "/") {
      setRes(N1/N2);
      setOp('/');
    }
    
  }

  return (
    <div>
      <h1>Calculadora</h1>
      <form>
        <p>
          <label htmlFor="n1">Numero 1:</label>
          <input onChange={handleChange} id="n1" value={N1} type="number"/>
        </p>
        <p>
          <label htmlFor="n2">Numero 2:</label>
          <input onChange={e => setN2(+e.target.value)} id="n2" value={N2} type="number"/>
        </p>
        <p>
          Operacao: {N1} {Op} {N2} = {Res}.
        </p>
        <input type="button" value="+" onClick={handleClick}/>
        <input type="button" value="-" onClick={handleClick}/>
        <input type="button" value="*" onClick={handleClick}/>
        <input type="button" value="/" onClick={handleClick}/>
      </form>
    </div>
  );
}

export default App;
