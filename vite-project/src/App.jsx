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
  const images = [art1, art2, art3, art4].flatMap(image => Array(4).fill(image));
  const [artList, setArtList] = useState([])

  function handleClick(image) {
    const newArtList = [...artList, image]
    console.log(image)
    setArtList(newArtList)
  }

  useEffect (() => {
    const fetchPosts = async () => {
        setLoading (true);
        try {
            const response = await fetch("https://api.artic.edu/api/v1/artworks");
            const data = await response.json();
            setPosts (data);
            setLoading (false);
        } catch (error) {
            console.log(error);
        }
    };
    fetchPosts();
}, []);





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
      <Grid images={images} handleClick={handleClick} />
      </div>
      </>
  )


}

export default App
