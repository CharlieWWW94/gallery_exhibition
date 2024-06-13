import './App.css'
import art1 from './assets/images/1.jpg';
import art2 from './assets/images/2.jpg';
import art3 from './assets/images/3.jpg';
import art4 from './assets/images/4.jpg';
import Navbar from './components/Navbar'
import Grid from './components/Grid'
import List from './components/List'
import { useState } from 'react'

function App() {
  const [selected, setSelected] = useState(null)
  const [artList, setArtList] = useState([])
  const images = [art1, art2, art3, art4].flatMap(image => Array(4).fill(image));

  function handleClick(e) {
    setSelected(e.target.alt)
    setArtList(artList => [...artList, {id: crypto.randomUUID(), title: selected}] )
    console.log(selected)
    console.log(artList)
    return (
      {artList}
    )
  }

  function ArtGrid() {
    images.map((image, index) => (
      <Grid key={index}>
        <img src={image} alt={`art${index}`} onClick={handleClick}/>
      </Grid>
    ))
  }

  return (
    <>
      <div className="App">
        <div className="App-header">
          <Navbar/>
        </div>
        <div className="list">
          <h1>Art List</h1>
          <List artList={artList} />
        </div>
          <h1>Art Gallery</h1>
        </div>
      <div>
          <ArtGrid/>
      </div>
      </>
  )
}

export default App
