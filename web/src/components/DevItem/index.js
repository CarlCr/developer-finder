import React from 'react'
import './style.css'
function DevItem({dev}){
    return(
        <li className="dev-item">
        <header className="xtx">
          <img  src={dev.avatar_url} alt={dev.name}/>
          <div className="user-info">
            <strong>{dev.name}</strong>
            <span>{dev.techs.join(', ')}</span>
          </div>
        </header>
        <p>{dev.bio}</p>
        <a href={`https://github.com/${dev.github_username}`}>Go to github</a>
      </li>
    )
}

export default DevItem