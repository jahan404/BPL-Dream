import Navbar from '../src/Components/Navbar/Navbar'
import './App.css'
import Banner from '../src/Components/Banner/Banner'
import Players from '../src/Components/Players/Players'
import { useState } from 'react'
import { useEffect } from "react";
import Footer from '../src/Components/Footer/Footer'
// react-toastify handling
import { ToastContainer, toast ,Zoom } from 'react-toastify';



 
function App() {
// useState of claim free coin
const [coin,setCoin] = useState(0)
// useState of button activation
const [state, setState] = useState(true)
// useState of selected player
const [selectedPlayer, setSelectedPlayer] = useState([])
// useState of players
const [players, setPlayers] = useState([])



// handle claim free credit coin
const handleCoin = (newCoin) =>{
  setCoin(coin+newCoin)
}
// handle state of button activation
const handleState =(newState) =>{
  setState(newState)
}

// handle selected player
const handleSelectedPlayer = newSelectedPlayer =>{
  
  if(coin < newSelectedPlayer.biddingPrice){
    notifyNotEnoughCoin()
  }


  
  else{

    const isExist = selectedPlayer.find(p=>p.playerId===newSelectedPlayer.playerId)

    if(isExist){
      notifyALreadySelectedPlayer(newSelectedPlayer.name)
    }
    else if(selectedPlayer.length>5){
      notifySixPlayersCompleted()
    }
    else{
    setSelectedPlayer([...selectedPlayer,newSelectedPlayer])
    setCoin(coin-newSelectedPlayer.biddingPrice)
    notifySuccessfulPlayerSelection(newSelectedPlayer.name)
    }
  }
}

// fetch data
useEffect(()=>{
  fetch('fakeData.json')
  .then(response=>response.json())
  .then(data=>setPlayers(data))
  },[])

//handle delete selected player
const handleDeletedPlayerCard = deleteCard =>{
  console.log(deleteCard)
  const newSelectedPlayerAfterDeletion = selectedPlayer.filter(c=>c.playerId!==deleteCard.playerId)
  setSelectedPlayer(newSelectedPlayerAfterDeletion)
}
// react-toastify handling
const notifyNotEnoughCoin = () => {
  toast.error('Insufficient Balance. Claim some coin and try again!', {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Zoom,
    });
}

const notifySuccessfulPlayerSelection = (playerName)=> {
  toast.success(`Congratulations! ${playerName} is now in your squad!!`, {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Zoom,
    });
  }

  const notifyALreadySelectedPlayer =(playerName) => {
    toast.warn(
      <>
      WARNING! <br /> {playerName} is already in your squad!!
    </>, 
    {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Zoom,
      });
  }

  const notifySixPlayersCompleted=()=>{
    toast.info("You've Already selected 6 players. Your desired Squad is Complete.", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Zoom,
      });
  }




  return (
    <>
    
     <Navbar coin={coin}></Navbar> 
     <Banner handleCoin={handleCoin}></Banner>

     <Players state={state} handleState={handleState} handleSelectedPlayer={handleSelectedPlayer} selectedPlayer={selectedPlayer} handleDeletedPlayerCard={handleDeletedPlayerCard} players={players}></Players>



     <Footer></Footer>


    </>
  )
}

export default App
