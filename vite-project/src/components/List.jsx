// import React from 'react';
import PropTypes from 'prop-types';

function List({ artList = [] }) {
  return (
    <div className="List">
      <ul>
        {artList.map((art, index) => (
          <li key={art.id + index}>{art.title}</li>
        ))}
      </ul>
    </div>
  );
}

List.propTypes = {
  artList: PropTypes.array,
};

export default List;
