
import Player from '../../Components/Player/Player'
import SelectedPlayer from '../../Components/SelectedPlayer/SelectedPlayer';

const Players = ({handleState,state,handleSelectedPlayer,selectedPlayer,handleDeletedPlayerCard,players}) => {

    return (
        <div className="w-11/12 mx-auto mb-44">

            <div className="flex justify-end my-12">

            <div>
            <button onClick={()=>handleState(true)} className={state? "btn btn-lg rounded-none border-none rounded-tl-xl rounded-bl-xl bg-[#E7FE29]": "btn btn-lg rounded-none border-none rounded-tl-xl rounded-bl-xl text-gray-500"}>Available</button>


            <button onClick={()=>handleState(false)} className={state?"btn btn-lg rounded-none border-none rounded-tr-xl rounded-br-xl text-gray-500": "btn btn-lg rounded-none border-none rounded-tr-xl rounded-br-xl bg-[#E7FE29]"}>Selected ({selectedPlayer.length})</button>
            </div>

            </div>

            {
                state? <div>
                <h1 className="font-black text-2xl my-10">Available Players</h1>
                <div className="grid grid-cols-3 gap-10">

                {
                    players.map(player=><Player key={player.playerId} handleSelectedPlayer={handleSelectedPlayer} player={player}></Player>)
                }

                </div>
                </div> 
                
                : 

                <div>
                    <h1 className="font-black text-2xl my-10">Selected Player ({selectedPlayer.length}/{players.length})</h1>
                    <SelectedPlayer selectedPlayer={selectedPlayer} handleDeletedPlayerCard={handleDeletedPlayerCard}></SelectedPlayer>
                </div>
            }


        </div>
    );
};

export default Players;