import heroBanner from '../assets/Image.png';
import vectorLine from '../assets/Image2.png';

const Hero = () => {
    return (
        <div className="w-full bg-white flex items-center justify-between flex-col xl:flex-row px-3 md:px-12 py-32">
            <div className="relative mt-0 lg:mt-20">
                <h1 className="font-bold text-5xl lg:text-8xl text-black z-10 relative select-none text-center md:text-start">Elevate Your <br /> Workspace <br /> with Cowork</h1>    
                <img src={vectorLine} alt="Line" className="w-[180px] lg:w-[350px] object-cover absolute top-24 right-14 md:top-24 md:left-32 lg:top-44 lg:left-64 xl:top-44 xl:right-44 pointer-events-none" />
                
                <p className="text-black font-normal text-sm w-full md:w-3/5 text-center md:text-justify mt-10 select-none">Welcome to Cowork – where innovation meets collaboration in the heart  of productivity! Unleash 🚀 your potential in our thoughtfully designed coworking spaces, tailored to inspire creativity and foster connections.</p>

                <div className="flex justify-center md:justify-start mt-0 md:mt-10">
                    <button className="bg-black text-sm text-white font-semibold rounded-full py-2 px-5 transition duration-300 hover:opacity-70 mt-10">Claim Your Spot</button>
                </div>
            </div>

            <img src={heroBanner} alt="Hero banner" className="w-[350px] h-[350px] md:w-[640px] md:h-[640px] object-cover pointer-events-none mt-10 xl:mt-0" />
        </div>
    )
}

export default Hero
