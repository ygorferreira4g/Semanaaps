import React, { useState, useEffect } from 'react';
import api from './services/api';
import DevItem from './components/Devitem';
import DevForm from './components/DevForm';
// Componente: Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação
// Propiedade: Informaçoes que um componente PAI passa para o componeete FILHO
// Estado: Informaçoes Mantidas pelo componente (Lembrar: imutabilidade)
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  const [devs, setDevs] = useState([]);

  

  useEffect(() => {
    async function loadDevs(){
      const response = await api.get('/devs');
      
      setDevs(response.data);
   
    }

    loadDevs();

  }, []);

async function handleAddDev (data){
 
  const response = await api.post('/devs', data);
  setDevs([...devs, response.data]);

}


  return(
    <div id="app">
      <aside>
        <strong>Cadastar</strong>
        <DevForm onSubmit={handleAddDev} />

      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev}/>
          ))}     
        </ul>
      </main>
    </div>
    
  );
}

export default App;
