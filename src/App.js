import Header from "./componenents/header"
import Banner from "./componenents/banner"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import Navigation from "./componenents/navigation"
import Profile from "./componenents/profile"
import Portfolio from "./componenents/portfolio"
import Footer from "./componenents/footer"
import Skill from "./componenents/skill"

function App() {
    useEffect(() => {
        Aos.init()
    },{})
    return <div>
        <Header/>
        <Navigation/>
        <Banner/>
        <Profile/>
        <Skill/>
        <Portfolio/>
        <Footer/>
    </div>
}

export default App
