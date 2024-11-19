import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Packages from './components/Packages.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
    <Navbar/>
    <Hero/>
    <Packages/>
     
     
     
     
     
     
     
     
    </>
  )
}

export default App
