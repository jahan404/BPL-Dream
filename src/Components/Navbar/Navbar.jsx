import logo from '../../../public/images/logo.png'
import coinImage from '../../../public/images/coin.png'


const Navbar = ({coin}) => {
    return (
        <div className="sticky top-0 bg-white/30 backdrop-blur-md h-[100px] flex items-center justify-between z-10">

            <div className="w-11/12 mx-auto flex items-center justify-between">

            <img src={logo} alt="image not available" />
            
            <div className='flex justify-center items-center gap-10'>

            <div className='flex gap-12'>
                <span>Home</span>
                <span>Fixture</span>
                <span>Teams</span>
                <span>Schedules</span>
            </div>

            <button className='btn btn-lg bg-white flex justify-center items-center font-medium'>{coin} Coin <span><img src={coinImage} alt="" /></span></button>

            </div>
            </div>

        </div>
    );
};

export default Navbar;