import Marquee from "react-fast-marquee";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import logo6 from "../assets/logo6.png";

const Company = () => {
    return (
        <div className="w-full bg-white flex items-center justify-center flex-col pt-10 pb-20">
            <p className="font-semibold text-xs text-black uppercase">Trusted by Leading Companies</p>

            <div className="w-10/12 lg:w-2/5 flex flex-row mt-10">
                <Marquee pauseOnHover direction="right">
                    <img src={logo2} className="object-contain w-28 mx-5" />
                    <img src={logo3} className="object-contain w-28 mx-5" />
                    <img src={logo4} className="object-contain w-28 mx-5" />
                    <img src={logo5} className="object-contain w-28 mx-5" />
                    <img src={logo6} className="object-contain w-28 mx-5" />
                </Marquee>
            </div>
        </div>
    )
}

export default Company
