import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AI from './assets/ai.png'
import './App.css'
import Page1 from './Page1.jsx'
import Page2 from './Page2.jsx'
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div style={{ textAlign: "center", marginBottom: 10, }}>
        <div>
          <Link className='links' to="/Home">Home</Link>
        </div>
        <div>
          <Link className='links'  to="/Page2">Page 2</Link>
        </div>
      </div>

      <div style={{ textAlign: "center" }}>
        <Routes>
          <Route path="/Home" element={<Page2 />} />
          <Route path="/Page2" element={<Page1 />} />
        </Routes>
      </div>
     
    </>
  )
}

export default App
