import React, {useState, useEffect} from 'react'

function DevForm({onSubmit}){

    const [github_username,setGithubUsername]= useState('');
    const [techs,setTechs]= useState('');
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

    async function handleSubmit(e){
        e.preventDefault()
        
        await  onSubmit({
            github_username,
            techs,
            latitude,
            longitude
        })

        setGithubUsername('')
        setTechs('')
    
    }

    return(
        <form onSubmit={handleSubmit}>
        <div className="input_block">
          <label htmlFor="github_user_name">Github User</label>
          <input 
              name="github_username" 
              id="github_user_name" 
              required
              value={github_username}
              onChange={e=>setGithubUsername(e.target.value)}
          />
        </div>
        
        <div className="input_block">
          <label htmlFor="techs">Techs</label>
          <input 
              name="techs" 
              id="techs" 
              required
              value={techs}
              onChange={e=>setTechs(e.target.value)}
          />
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
    )
}

export default DevForm