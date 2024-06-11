import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Grid from './components/Grid'

function App() {
  return (
    <>
      <div className="App">
        <div className="App-header">
          <Navbar/>
        </div>
          <Grid/>
      </div>
      </>
  )
}

export default App
