import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Navbar } from 'react-bootstrap'
import ListStudent from './components/ListStudent'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <ListStudent />
      <Footer />
    </>
  )
}

export default App
