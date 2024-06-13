import React from 'react';



function List(props) {
  const { artList } = props;
  return (
    <div className="List">
      <h2>Art List</h2>
      <ul>
        {artList.map(art => (
          <li key={art.id}>{art.title}</li>
        ))}
      </ul>
    </div>
  );
}


export default List;
