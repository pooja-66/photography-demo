import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WeddingGallery from './components/WeddingGallery'
import Packages from './components/Packages'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './styles/global.css'
import './styles/components.css'
import './styles/responsive.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <WeddingGallery />
        <Packages />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
