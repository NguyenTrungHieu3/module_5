import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
          <h1>Sign in form</h1>
          <form>
              <div className="mb-3">
                  <label htmlFor="inputUserName" className="form-label" style={{float:"left", marginLeft: "10px"}}>Username</label>
                  <input type="text" className="form-control" id="inputUserName"/>
              </div>
              <div className="mb-3">
                  <label htmlFor="inputPassword" className="form-label" style={{float:"left", marginLeft: "10px"}}>Password</label>
                  <input type="password" className="form-control" id="inputPassword"/>
              </div>
              <div className="mb-3 form-check"  >
                  <input type="checkbox" className="form-check-input" id="check"/>
                  <label className="form-check-label" htmlFor="check" style={{float:"left", marginLeft: "10px"}}>Remember me</label>
              </div>
              <button type="submit" className="btn btn-primary">Sign in</button>
          </form>
      </>
  )
}

export default App
