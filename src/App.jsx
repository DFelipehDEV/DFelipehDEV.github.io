import { HashRouter, Routes, Route } from 'react-router'
import Home from './pages/Home.jsx'
import Post from "./pages/Post.jsx";
import Posts from './pages/PostList.jsx'
import Navbar from './components/Navbar.jsx'

function App() {
    return (
        <>
            <Navbar />
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/posts" element={<Posts />} />
                    <Route path="/post/:slug" element={<Post />} />
                </Routes>
            </HashRouter>
        </>
    )
}

export default App
