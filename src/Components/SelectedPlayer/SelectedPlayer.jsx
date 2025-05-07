import { ImBin } from "react-icons/im";


const SelectedPlayer = ({selectedPlayer,handleDeletedPlayerCard}) => {

    // const navigate = useNavigate();

    return (
        <div className="">

            <div className="flex gap-5 flex-col">
                {
                    selectedPlayer.map(p=> 
                    <div key={p.playerId} className="flex justify-between items-center border-gray-300  p-2 shadow-sm bg-[#fcfdfd] rounded-xl"> 
                        <div className="flex items-center gap-5">
                            <img className="w-[80px] h-[80px] object-cover rounded-full" src={p.image} alt="not available" />
                            <div>
                                <h1 className="font-bold">{p.name}</h1>
                                <p className="text-sm font-thin text-gray-600">{p.role}</p>
                            </div>
                        </div>

                        
                        <ImBin onClick={()=>handleDeletedPlayerCard(p)} 
                        
                        
                        className="text-red-400 mr-5 text-xl" />
                        
                    </div>)
                }
            </div>

            <a href="/"><button className="btn btn-lg bg-[#E7FE29] mt-8">Add More Player</button></a>

        
        </div>
    );
};

export default SelectedPlayer;