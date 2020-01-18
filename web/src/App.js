import React from 'react';
// Componente: Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação
// Propiedade: Informaçoes que um componente PAI passa para o componeete FILHO
// Estado: Informaçoes Mantidas pelo componente (Lembrar: imutabilidade)
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';



function App() {
  return(
    <div id="app">
      <aside>
        <strong>Cadastar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
           <input name="techs" id="techs" required />
          </div>

            <div className="input-group">
              <div className="input-block">
                <label htmlFor="latitude">Latitude</label>
                <input name="latitude" id="latitude" required />
              </div>
         
              <div className="input-block">
                <label htmlFor="longitude">Longitude</label>
                <input name="longitude" id="longitude" required />
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
