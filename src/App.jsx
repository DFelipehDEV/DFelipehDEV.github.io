import { HashRouter, Routes, Route } from 'react-router'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Navbar from './components/Navbar.jsx'

function App() {
    return (
        <>
            <Navbar />
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>
            </HashRouter>
        </>
    )
}

export default App
