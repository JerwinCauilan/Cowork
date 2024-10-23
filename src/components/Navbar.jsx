import { Link } from "react-scroll"
import Logo from "./Logo"
import { useState } from "react"
import { LuMenu, LuX } from "react-icons/lu";


const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const handleLinkClick = () => {
        setOpenMenu(false);
    }
    return (
        <nav className="fixed top-0 left-0 right-0 bg-white px-2 md:px-10 py-3 z-50">
            <div className="flex items-center justify-between">
                <Logo/>

                <div className="hidden lg:flex items-center text-black gap-10 font-normal text-sm cursor-pointer">
                    <Link to="about" spy={true} smooth={true} offset={-100} duration={500} className="underline-animation">About</Link>
                    <Link to="pricing" spy={true} smooth={true} offset={-100} duration={500} className="underline-animation">Pricing</Link>
                    <Link to="blog" spy={true} smooth={true} offset={-100} duration={500} className="underline-animation">Blog</Link>
                    <Link to="events" spy={true} smooth={true} offset={-100} duration={500} className="underline-animation">Events</Link>

                    <div className="space-x-5">
                        <button className="bg-transparent border border-black text-sm font-semibold rounded-full py-2 px-5 transition duration-300 hover:bg-black hover:text-white hover:opacity-70">Login</button>
                        <button className="bg-black text-sm text-white font-semibold rounded-full py-2 px-5 transition duration-300 hover:opacity-70">Sign Up</button>
                    </div>
                </div>

                <button className="lg:hidden" onClick={() => setOpenMenu(!openMenu)}>
                    {openMenu ? <LuX className="text-black" size={20}/> : <LuMenu className="text-black" size={20}/>}
                </button>
            </div>

            {openMenu && (
                <div className="w-full h-screen mt-5 p-10 flex items-center flex-col text-black gap-10 font-normal text-sm cursor-pointer">
                    <Link to="about" spy={true} smooth={true} offset={-100} duration={500} className="underline-animation" onClick={handleLinkClick}>About</Link>
                    <Link to="pricing" spy={true} smooth={true} offset={-100} duration={500} className="underline-animation" onClick={handleLinkClick}>Pricing</Link>
                    <Link to="blog" spy={true} smooth={true} offset={-100} duration={500} className="underline-animation" onClick={handleLinkClick}>Blog</Link>
                    <Link to="events" spy={true} smooth={true} offset={-100} duration={500} className="underline-animation" onClick={handleLinkClick}>Events</Link>

                    <div className="flex flex-col gap-5">
                        <button className="bg-transparent border border-black text-sm font-semibold rounded-full py-2 px-5 transition duration-300 hover:bg-black hover:text-white hover:opacity-70">Login</button>
                        <button className="bg-black text-sm text-white font-semibold rounded-full py-2 px-5 transition duration-300 hover:opacity-70">Sign Up</button>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar
