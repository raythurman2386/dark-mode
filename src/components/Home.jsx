import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
      <h1>Welcome to Crypto Tracker!!</h1>
      <h2>Your best source for tracking all your crypto prices!</h2>
      <Link to='/allcharts'>Click Here to check out the Charts!</Link>
    </div>
  )
}

export default Home
