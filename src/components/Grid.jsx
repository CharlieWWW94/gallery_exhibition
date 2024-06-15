import './Grid.css';
import PropTypes from 'prop-types';
import React from 'react';

function Grid({ currentImages = [], handleClick = () => {} }) {
  return (
    <div className="grid">
      {currentImages.map((image) => {
        const fullUrl = `${image.iiif_url}/${image.image_id}/full/300,/0/default.jpg`;

        return (
          <div key={image.key} className="gridItem" style={{ width: '18rem' }}>
            <img src={fullUrl} alt={`art-${image.id}`} onClick={() => handleClick(image)} />
            <div className="card-body">
              <p>{`${image.localId} - ${image.title}`}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

Grid.propTypes = {
  currentImages: PropTypes.array,
  handleClick: PropTypes.func,
};

export default Grid;
