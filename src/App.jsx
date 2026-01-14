import { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Link } from 'react-router'
import Navbar from './Navigation/Navbar'

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App
