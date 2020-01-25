import React,{useState,useEffect} from 'react';
import api from './services/api'
import DevItem from './components/DevItem'
import DevForm from './components/DevForm'
import './Global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

function App() {

  const [devs, setDevs]= useState([]);

  useEffect(()=>{
    async function loadDevs(){
        const response = await api.get('/devs')
        setDevs(response.data)
    }
    loadDevs()
  },[])

  async function handleAddDev(data){
    const response= await api.post('/devs', data)
  
    setDevs([...devs, response.data])
  }  

  return (
    <div id="App">
      <aside>
          <strong>Register</strong>
          <DevForm onSubmit={handleAddDev} />
      </aside>
      <main>
        <ul>
          {devs.map(dev=>(
            <DevItem key={dev._id}  dev={dev} />
          ))}
          </ul>
      </main>
    </div>
  );
}

export default App;
