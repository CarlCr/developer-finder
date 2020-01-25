import React,{useState,useEffect} from 'react';
import './Global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

function App() {
  const [latitude,setLatitude]= useState('');
  const [longitude,setLongitude]= useState('');
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(
      (position)=>{
         const { latitude, longitude}= position.coords
         setLatitude(latitude)
         setLongitude(longitude)
      },
      (err)=>{
        console.log(err)
      },
      {
        timeout:3000
      }
    )
  },[])

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
                <input 
                    type="number" 
                    name="latitude" 
                    id="latitude" 
                    required value={latitude} 
                    onChange={e=>setLatitude(e.target.value)}
                />
              </div>
              <div className="input_block">
                <label htmlFor="longitude">Longitude</label>
                <input 
                    type="number" 
                    name="longitude"
                    id="longitude" 
                    required value={longitude}
                    onChange={e=>setLongitude(e.target.value)}
                />
              </div>
            </div>
          <button type="submit">Save</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header className="xtx">
              <img  src="https://avatars3.githubusercontent.com/u/40358039?s=460&v=4" alt="user avatar"/>
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
              <img  src="https://avatars3.githubusercontent.com/u/40358039?s=460&v=4" alt="user avatar"/>
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
              <img  src="https://avatars3.githubusercontent.com/u/40358039?s=460&v=4" alt="user avatar"/>
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
              <img  src="https://avatars3.githubusercontent.com/u/40358039?s=460&v=4" alt="user avatar"/>
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
