import About from "./components/About"
import Company from "./components/Company"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import './styles/App.css'

const App = () => {
    return (
        <>
            <Navbar/>
            <Hero/>
            <Company/>
            <About/>
        </>
    )
}

export default App
