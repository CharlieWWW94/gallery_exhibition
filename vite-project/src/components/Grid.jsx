import { Component } from 'react';
import './Grid.css';
import art1 from '../assets/images/1.jpg';
import art2 from '../assets/images/2.jpg';
import art3 from '../assets/images/3.jpg';
import art4 from '../assets/images/4.jpg';

class Grid extends Component{
  render(){
    const images = [art1, art2, art3, art4];
    const times = 4;
    const repeatedImages = Array.from({ length: times }).flatMap(() => images);
    return (
      <div className="Grid">
        {repeatedImages.map((image, index) => (
          <div className="GridItem" key={index}>
            <img src={image} alt={`art${index}`} />
          </div>
        ))}
      </div>
    );
  }

}

export default Grid
