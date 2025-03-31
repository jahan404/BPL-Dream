import logo from '../../../public/images/logo.png'

const Navbar = ({coin}) => {
    return (
        <div className="w-11/12 mx-auto flex items-center justify-between py-6">

            <img className="" src={logo} alt="image not available" />
            
            <div className='flex justify-center items-center gap-10'>

            <div className='flex gap-12'>
                <span>Home</span>
                <span>Fixture</span>
                <span>Teams</span>
                <span>Schedules</span>
            </div>

            <button className='btn btn-lg bg-transparent flex justify-center items-center'>{coin} Coin <span><img src="/public/images/coin.png" alt="" /></span></button>

            </div>

        </div>
    );
};

export default Navbar;