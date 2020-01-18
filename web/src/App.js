import React, { useState, useEffect } from 'react';
import api from './services/api';
// Componente: Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação
// Propiedade: Informaçoes que um componente PAI passa para o componeete FILHO
// Estado: Informaçoes Mantidas pelo componente (Lembrar: imutabilidade)
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  const [github_username, setGuithubUsername] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const {latitude, longitude} = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
        //console.log(position);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    )
  }, []);

async function handleAddDev (e){
  e.preventDefault();

  const response = await api.post('/devs',{
    github_username,
    techs,
    latitude,
    longitude,
  })

  setGuithubUsername('');
  setTechs('');
  //console.log(response.data);
}


  return(
    <div id="app">
      <aside>
        <strong>Cadastar</strong>
        <form onSubmit={handleAddDev} >
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required 
            value={github_username} onChange={e => setGuithubUsername(e.target.value)} />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
           <input name="techs" id="techs" required 
           value={techs} onChange={e => setTechs(e.target.value)} 
           />
          </div>

            <div className="input-group">
              <div className="input-block">
                <label htmlFor="latitude">Latitude</label>
                <input name="latitude" id="latitude" required value={latitude}
                onChange={ e => setLatitude(e.target.value)}/>
              </div>
         
              <div className="input-block">
                <label htmlFor="longitude">Longitude</label>
                <input name="longitude" id="longitude" required value={longitude} 
                onChange={ e => setLongitude(e.target.value)}/>
              </div>
            </div>
          
          <button type="submit">Salvar</button>
          
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/59286021?s=460&v=4" alt="Alvaro Ribeiro Pereira"></img>
              <div className="user-info">
                <strong>Alvaro Ribeiro Pereira</strong>
                <span>Java, C# , C++</span>
              </div>
            </header>
              <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.</p>
              <a href="https://github.com/alvaroico">Acessar Perfil Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/59286021?s=460&v=4" alt="Alvaro Ribeiro Pereira"></img>
              <div className="user-info">
                <strong>Alvaro Ribeiro Pereira</strong>
                <span>Java, C# , C++</span>
              </div>
            </header>
              <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.</p>
              <a href="https://github.com/alvaroico">Acessar Perfil Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/59286021?s=460&v=4" alt="Alvaro Ribeiro Pereira"></img>
              <div className="user-info">
                <strong>Alvaro Ribeiro Pereira</strong>
                <span>Java, C# , C++</span>
              </div>
            </header>
              <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.</p>
              <a href="https://github.com/alvaroico">Acessar Perfil Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/59286021?s=460&v=4" alt="Alvaro Ribeiro Pereira"></img>
              <div className="user-info">
                <strong>Alvaro Ribeiro Pereira</strong>
                <span>Java, C# , C++</span>
              </div>
            </header>
              <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.</p>
              <a href="https://github.com/alvaroico">Acessar Perfil Github</a>
          </li>
        </ul>
      </main>
    </div>
    
  );
}

export default App;
