import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import React from 'react'

const Welcome = () => <h1>Xin chào, tôi đang học React Component!</h1>

class OldSchoolGreeting extends React.Component {
  render() {
    return <h2>Đây là cách viết bằng Class!</h2>
  }
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Welcome />
      <OldSchoolGreeting />
    </>
  )
}

export default App
