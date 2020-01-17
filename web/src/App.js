import React from 'react';

// Componente: Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação
// Propiedade: Informaçoes que um componente PAI passa para o componeete FILHO
// Estado: 

import Header from './Header';

function App() {
  return (
    <>
    <Header title="Titulo 1" />
    <Header title="Titulo 2" />
    <Header title="Titulo 4" />
    </>
  );
}

export default App;
