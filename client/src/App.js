import React, { useState, useEffect } from 'react';
import { Button, Spinner } from 'reactstrap';
import './App.css';

function App() {
  const [isPicking, setIsPicking] = useState(false);
  const [factionArr, setFactionArr] = useState([
    'Republic of Polania',
    'Saxony Empire', 
    'Crimean Khanate',
    'Nordic Kingdoms',
    'Rusviet Union',
    'Clan Albion',
    'Togawa Shogunate'
  ])
  const [players, setPlayers] = useState([])
  const [newPlayer, setNewPlayer] = useState({
    name: '',
    faction: ''
  })

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
    console.log('player faction' , playerFaction)
    newPlayer.faction = playerFaction;
    setPlayers([...players, newPlayer])
    setIsPicking(false);
  }

  const pickFaction = () =>{
    let draw = Math.floor(Math.random() * factionArr.length);
    console.log('draw', draw)
    const chosen = factionArr[draw];
    console.log('chosen before filter', chosen)
    let updatedList = factionArr.filter(faction => {
      return faction !== chosen;
    })
    setFactionArr(updatedList);
    console.log('chosen', chosen)
    return chosen;
  }
  console.log('once', factionArr)
  return (
    <div className="App">
      <header>
        <h1>Scythe Faction Selector</h1>
      </header>
      <form onSubmit={addPlayer}>
        <label>Player Name</label>
        <input name='name' onChange={handleChanges}/>
        {isPicking ? <Spinner color='warning' />
        :<Button type='submit' color='success'>Add</Button>
        }
      </form>
      <div className='playersAll'>
        {players === [] ? <div>No players yet</div>:
          players.map(player =>{
            return(
              <div className='player' key={player.name}>
                <h2>{player.name}</h2>
                <p>{player.faction}</p>
              </div>
            ) 
          })
        }
      </div>
      <footer className='signature'>Developed by Landon Turner</footer>
    </div>
  );
}

export default App;
