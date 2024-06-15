import './App.css';
import Navbar from './components/Navbar';
import Grid from './components/Grid';
import List from './components/List';
import Pagination from './components/Pagination';
import { useState, useEffect } from 'react';

function App() {
  const [imageData, setImageData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage, setImagesPerPage] = useState(16);
  const [loading, setLoading] = useState(false);
  const [artList, setArtList] = useState([]);

  function handleClick(image) {
    const newArtList = [...artList, image];
    console.log(image);
    setArtList(newArtList);
  }

  useEffect(() => {
    const fetchArt = async () => {
      const url = "https://api.artic.edu/api/v1/artworks?page=2&limit=100&fields=id,title,image_id";

      try {
        setLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        console.log('Fetched data:', data);

        const iiifUrl = data.config.iiif_url;
        const extractedData = data.data.map((art) => ({
          id: art.id,
          title: art.title,
          image_id: art.image_id,
          iiif_url: iiifUrl,
        }));

        console.log('Extracted data:', extractedData);
        setImageData(extractedData);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchArt();
  }, []);

  const lastImageIndex = currentPage * imagesPerPage;
  const firstImageIndex = lastImageIndex - imagesPerPage;
  const currentImages = imageData.slice(firstImageIndex, lastImageIndex);

  return (
    <>
      <div className="App">
        <div className="App-header">
          <Navbar />
        </div>
        <div className="list">
          <List artList={artList} />
        </div>
        <Pagination
   totalImages={imageData.length}
   imagesPerPage={imagesPerPage}
   setCurrentPage={setCurrentPage}
   currentPage={currentPage}/>
        <h1>Art Gallery</h1>
      </div>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Grid currentImages={currentImages} handleClick={handleClick} />
        )}






      </div>
    </>
  );
}

export default App;
