import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import Charts from './components/Charts'
import Navbar from './components/Navbar'
import { useAxios } from './hooks/useAxios'

const App = () => {
  const [coinData] = useAxios()

  return (
    <div className='App'>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        {/* <Route path='/chart' component={} /> */}
        <Route
          path='/allcharts'
          render={props => <Charts {...props} coinData={coinData} />}
        />
      </Switch>
    </div>
  )
}

export default App
