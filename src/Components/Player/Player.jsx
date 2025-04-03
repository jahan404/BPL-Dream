import { CgProfile } from "react-icons/cg";
import { CiFlag1 } from "react-icons/ci";
 
const Player = ({player,handleSelectedPlayer}) => {
    return (
        <div>

          
            <div className="border border-gray-300 rounded-xl">

  <figure className="px-3 pt-4 h-[380px] w-[370px] mx-auto">
    <img
      src={player.image}
      alt="Shoes"
      className="rounded-xl h-full w-full object-cover" />
  </figure>


  <div className="px-4 space-y-2 my-3">

    <div className="flex items-center gap-2">
    <CgProfile className="text-2xl"/>
    <h2 className="card-title">{player.name}</h2>
    </div>

    <div className="flex justify-between items-center border-b border-gray-300 pb-4 mb-3 text-gray-700">
    <div className="flex items-center gap-2">
    <CiFlag1 className="text-2xl"/>
    <span>{player.country}</span>
    </div>
    <span className="border border-gray-300 px-4 py-1 rounded-2xl">{player.role}</span>
    </div>
    
    <p className="font-bold">Rating : {player.rating}</p>

    <div className="font-medium flex justify-between text-sm">
    <p>{player.battingType}</p>
    <p className="pr-1">{player.bowlingType}</p>
    </div>

    <div className="flex justify-between items-center">
    <p className="font-bold text-sm">Price : {player.biddingPrice}</p>
    <button onClick={()=>handleSelectedPlayer(player)} className="btn bg-transparent hover:bg-[#E7FE29]">Choose Player</button>
    </div>
  </div>


</div>
</div>
    );
};

export default Player;