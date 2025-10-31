import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Banner from "./components/Banner"
import Home from './components/Home'
import Education from './components/Education'
import Services from './components/Services'
import Contact from './components/Contact'
import About from './components/About'
import Projects from './components/Projects'

const MainRouter = () => {
    return (
        <>
           <Banner /> 
           <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/education" element={<Education />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </>
    )
}

export default MainRouter;