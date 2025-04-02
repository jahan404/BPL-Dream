import bannerImage from '../../../public/images/banner-main.png'

const Banner = ({handleCoin}) => {
    return (
        <div className="w-11/12 mx-auto rounded-4xl bg-[url('/images/bg-shadow.png')] bg-no-repeat bg-cover bg-black text-center space-y-6 py-24 mb-24">
            <img className="mx-auto" src={bannerImage} alt="" />

            <h1 className="text-white font-bold text-3xl">Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p className="text-white opacity-70 tracking-widest">Beyond Boundaries Beyond Limits</p>


            <button onClick={()=>handleCoin(6000000)} className="border-[#E7FE29] hover:border-[#cffa80] border p-1.5 rounded-xl">
                <button className="text-black bg-[#E7FE29] px-5 py-2 rounded-lg btn border-none shadow-none hover:bg-[#cffa80]">Claim Free Credit</button>
            </button>

        </div>
    );
};

export default Banner;