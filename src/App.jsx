import { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Link } from 'react-router'
import Navbar from './Navigation/Navbar'

function App() {
  const [userCart, setUserCart] = useState([]);

// In App.jsx

    
  return (
    <div>
      <Navbar />
      <main>
        <Outlet context={{userCart}}/>
      </main>
    </div>
  )
}

export default App
