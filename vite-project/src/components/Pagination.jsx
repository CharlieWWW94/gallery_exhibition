import React from 'react';
import PropTypes from 'prop-types';
import './Pagination.css';

const Pagination = ({ totalImages, imagesPerPage, setCurrentPage, currentPage }) => {
  console.log('imagesPerPage:', imagesPerPage); // Add this line to check if imagesPerPage is being passed down

  let pages = [];

  for (let i = 1; i <= Math.ceil(totalImages / imagesPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      {pages.map((page, index) => (
        <button
          key={index}
          onClick={() => setCurrentPage(page)}
          className={page === currentPage ? 'active' : ''}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

Pagination.propTypes = {
  totalImages: PropTypes.number.isRequired,
  imagesPerPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Pagination;
