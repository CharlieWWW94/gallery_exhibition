import React from 'react';
import PropTypes from 'prop-types';
import './Pagination.css';

const Pagination = ({ totalImages, imagesPerPage, setCurrentPage, currentPage, toggleModal }) => {
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
      <div className="modalButton">
        <button onClick={toggleModal}>
        <i className="fa-solid fa-eye"></i>
        </button>
      </div>
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
