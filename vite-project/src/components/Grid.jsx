import './Grid.css';
import PropTypes from 'prop-types';
import React from 'react';

function Grid({ images = [], handleClick = () => {}, ...props }) {
  return (
    <div className="grid">
      {images.map((image, index) => (
        <div className="gridItem" {...props} key={index}>
          <img src={image} alt={`art${index}`} onClick={() => handleClick(image)} />
        </div>
      ))}
    </div>
  );
}

Grid.propTypes = {
  images: PropTypes.array,
  handleClick: PropTypes.func,
};

export default Grid;
