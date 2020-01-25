import React from 'react';
import './Global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

function App() {
  return (
    <div id="App">
        <aside>
          <strong>Register</strong>
          <form>
            <div className="input_block">
              <label htmlFor="github_user_name">Github User</label>
              <input name="github_username" id="github_user_name" required/>
            </div>
            
            <div className="input_block">
              <label htmlFor="techs">Techs</label>
              <input name="techs" id="techs" required/>
            </div>

            <div className="input_group">
              <div className="input_block">
                <label htmlFor="latitude">Latitude</label>
                <input name="latitude" id="latitude" required/>
              </div>
              <div className="input_block">
                <label htmlFor="longitude">Longitude</label>
                <input name="longitude" id="longitude" required/>
              </div>
            </div>
          <button type="submit">Save</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header className="xtx">
              <img src="https://avatars3.githubusercontent.com/u/40358039?s=460&v=4"/>
              <div className="user-info">
                <strong>Carlos Garcia</strong>
                <span>React Js, React Native, Node.Js</span>
              </div>
            </header>
            <p>I don´t want to tell my dreams. I want to show them. </p>
            <a href="https://github.com/carlcr">Go to github</a>
          </li>
          <li className="dev-item">
            <header className="xtx">
              <img src="https://avatars3.githubusercontent.com/u/40358039?s=460&v=4"/>
              <div className="user-info">
                <strong>Carlos Garcia</strong>
                <span>React Js, React Native, Node.Js</span>
              </div>
            </header>
            <p>I don´t want to tell my dreams. I want to show them. </p>
            <a href="https://github.com/carlcr">Go to github</a>
          </li>
          <li className="dev-item">
            <header >
              <img src="https://avatars3.githubusercontent.com/u/40358039?s=460&v=4"/>
              <div className="user-info">
                <strong>Carlos Garcia</strong>
                <span>React Js, React Native, Node.Js</span>
              </div>
            </header>
            <p>I don´t want to tell my dreams. I want to show them. </p>
            <a href="https://github.com/carlcr">Go to github</a>
          </li>
          <li className="dev-item">
            <header >
              <img src="https://avatars3.githubusercontent.com/u/40358039?s=460&v=4"/>
              <div className="user-info">
                <strong>Carlos Garcia</strong>
                <span>React Js, React Native, Node.Js</span>
              </div>
            </header>
            <p>I don´t want to tell my dreams. I want to show them. </p>
            <a href="https://github.com/carlcr">Go to github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
