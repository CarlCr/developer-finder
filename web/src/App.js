import React from 'react';
import './Global.css'
import './App.css'

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
          <div className="input-group">
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
        <main></main>
    </div>
  );
}

export default App;
