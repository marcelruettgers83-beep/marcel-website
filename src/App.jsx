import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar, Footer, T } from './components/Shared'
import Home from './pages/Home'
import Affiliates from './pages/Affiliates'
import Training from './pages/Training'
import About from './pages/About'
import './index.css'

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ background: T.paper, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/affiliates" element={<Affiliates />} />
            <Route path="/training" element={<Training />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
