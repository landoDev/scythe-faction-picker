import React, { useState, useEffect } from 'react';
import { Button, Spinner } from 'reactstrap';
import './App.css';

function App() {
  const [isPicking, setIsPicking] = useState(false);
  const [players, setPlayers] = useState([])
  const [newPlayer, setNewPlayer] = useState({
    name: '',
    faction: ''
  })
  let factions = [
    'Republic of Polania',
    'Saxony Empire', 
    'Crimean Khanate',
    'Nordic Kingdoms',
    'Rusviet Union',
    'Clan Albion',
    'Togawa Shogunate'
  ];
  const handleChanges = e => {
    e.preventDefault();
    setNewPlayer({
      ...newPlayer,
      [e.target.name]: e.target.value
    })
  }

  const addPlayer = e =>{
    // add a check if there is more than seven players already
    e.preventDefault();
    setIsPicking(true);
    let playerFaction = pickFaction();
    setNewPlayer({
      ...newPlayer,
      faction: playerFaction
    })
    setPlayers({...players, newPlayer})
    setNewPlayer({
      name: '',
      faction: ''
    })
    setIsPicking(false);
  }

  const pickFaction = () =>{
    let draw = Math.floor(Math.random() * factions.length) + 1;
    let chosen = factions.slice(draw)
    return chosen;
  }


  return (
    <div className="App">
      <form onSubmit={addPlayer}>
        <input name='name' onChange={handleChanges}/>
        {isPicking ? <Spinner color='warning' />
        :<Button type='submit' color='success' />
        }
      </form>
      <div className='playersAll'>
        {players === [] ? <div>No players yet</div>:
          players.map(player =>{
            return(
              <div className='player'>
                <h2>{player.name}</h2>
                <p>{player.faction}</p>
              </div>
            ) 
          })
        }
      </div>
    </div>
  );
}

export default App;
