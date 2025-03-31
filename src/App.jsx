import Navbar from './components/Navbar/Navbar'
import './App.css'
import Banner from './Components/Banner/Banner'
import Players from './components/Players/Players'
import { useState } from 'react'
import { useEffect } from "react";


function App() {
// useState of claim free coin
const [coin,setCoin] = useState(0)
// useState of button activation
const [state, setState] = useState(true)
// useState of selected player
const [selectedPlayer, setSelectedPlayer] = useState([])
// useState of players
const [players, setPlayers] = useState([])



// handle coin
const handleCoin = (newCoin) =>{
  setCoin(coin+newCoin)
}
// handle state
const handleState =(newState) =>{
  setState(newState)
}
// handle selected player
const handleSelectedPlayer = newSelectedPlayer =>{
  setSelectedPlayer([...selectedPlayer,newSelectedPlayer])
}

// fetch data
useEffect(()=>{
  fetch('fakedata.json')
  .then(response=>response.json())
  .then(data=>setPlayers(data))
  },[])

//handle delete selected player
const handleDeletedPlayerCard = deleteCard =>{
  console.log(deleteCard)
  const newSelectedPlayerAfterDeletion = selectedPlayer.filter(c=>c.playerId!==deleteCard.playerId)
  setSelectedPlayer(newSelectedPlayerAfterDeletion)
}





  return (
    <>
    
     <Navbar coin={coin}></Navbar> 
     <Banner handleCoin={handleCoin}></Banner>

     <Players state={state} handleState={handleState} handleSelectedPlayer={handleSelectedPlayer} selectedPlayer={selectedPlayer} handleDeletedPlayerCard={handleDeletedPlayerCard} players={players}></Players>
    </>
  )
}

export default App
