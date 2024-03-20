import { useState } from 'react'
import '../src/styles/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className='logo'>
          <h2>THE</h2>
          <h1>TRUE</h1>
          <h2>OR</h2>
          <h1>FALSE</h1>
          <h2>LESBIAN GAME</h2>
        </div>
        <div className="card"> 
          <p>A question game that involves the sapphic-lesbian world</p>
          <p>designed to test your level of homosexuality</p>
        </div>
        <div className="read-the-docs">
          <button className="button" onClick={() => setCount((count) => count + 1)}>
            START {count}
          </button>
          <p > 
            Click to Start
          </p>
        </div>
          
        <div className='footer'>          
          <p>Inspired in The Highe Lower Game</p>
          <p>&copy; 2024 Developed by Sandy Pirôpo. All rights reserved.</p>
        </div>
    </>
  )
}

export default App