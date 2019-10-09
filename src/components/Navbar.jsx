import React from 'react'
import { Link } from 'react-router-dom'

import { useDarkMode } from '../hooks/useDarkMode'

const Navbar = () => {
  const [darkMode, setDarkMode, handleDarkMode] = useDarkMode()

  return (
    <nav className='navbar'>
      <h1>
        <Link to='/'>Crypto Tracker</Link>
      </h1>
      <div className='dark-mode__toggle'>
        <div
          onClick={handleDarkMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  )
}

export default Navbar
