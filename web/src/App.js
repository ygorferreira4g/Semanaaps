import React, {useState} from 'react';

// Componente: Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação
// Propiedade: Informaçoes que um componente PAI passa para o componeete FILHO
// Estado: Informaçoes Mantidas pelo componente (Lembrar: imutabilidade)

function App() {
  const [counter, setCounter] = useState(0);

  function incrementCounter(){
    setCounter(counter + 1);
  }

  return (
    <>
    <h1>Contador: {counter}</h1>
    <button onClick={incrementCounter}>Incrementar</button>
    </>
  );
}

export default App;
