import React, { useState, useEffect } from 'react';
import { Button, Spinner } from 'reactstrap';
// import './App.css';

const QuickFactionForm = () => {
  // uncommenting this adds the alert box on render
  // useEffect(()=>{
  //   alert("Picker includes the expansion. Refreshing this page will reset the picker.")
  // }, []);

  // Handled state (hopefully self-explanatory. If not my bad lol)
  const [playersEmpty, setPlayersEmpty] = useState(true)
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
  const [playerMat, setPlayerMat] = useState([
    'Engineering (2)',
    'Patriotic (3)',
    'Industrial (1)',
    'Agricultural (5)',
    'Innovative (3A)',
    'Militant (2A)',
    'Mechanical (4)'
  ])
  const [players, setPlayers] = useState([])
  const [newPlayer, setNewPlayer] = useState({
    name: '',
    faction: '',
    player_mat: ''
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
    let chosenMat = pickMat();
    newPlayer.faction = playerFaction;
    newPlayer.player_mat = chosenMat;
    setPlayers([...players, newPlayer])
    setPlayersEmpty(false)
    setIsPicking(false);
  }
// Picker functions that set the state for the player added
  const pickFaction = () =>{
    let draw = Math.floor(Math.random() * factionArr.length);
    const chosen = factionArr[draw];
    let updatedList = factionArr.filter(faction => {
      return faction !== chosen;
    })
    setFactionArr(updatedList);
    return chosen;
  }

  const pickMat = () =>{
    let draw = Math.floor(Math.random() * playerMat.length);
    const chosen = playerMat[draw];
    let updatedList = playerMat.filter(faction => {
      return faction !== chosen;
    })
    setPlayerMat(updatedList);
    return chosen;
  }

  return (
    <div className="qk-faction-form">
      <form className='player-container' onSubmit={addPlayer}>
        <div className='inputs'>
          <label className='name-label'>Player Name</label>
          <input name='name' onChange={handleChanges}/>
        {isPicking ? <Spinner className='add-btn' color='warning' />
        :<Button className='add-btn' type='submit' color='success'>Add</Button>
        }
        </div>
      </form>
      <div className='player-container all'>
        {playersEmpty ? <div>No players yet</div>:
          players.map(player =>{
            return(
              <div className='player' key={player.name}>
                <h2>{player.name}</h2>
                <p>{player.faction}</p>
                <p>{player.player_mat}</p>
              </div>
            ) 
          })
        }
      </div>
      <footer className='signature'>Developed by Landon Turner</footer>
    </div>
  );
};

export default QuickFactionForm;