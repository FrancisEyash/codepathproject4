import React from 'react';

function BanList({ banList }) {
  return (
    <div className="BanList">
      <h3>Ban List</h3>
      {banList.map((name, index) => (
        <p key={index}>{name}</p>
      ))}
    </div>
  );
}

export default BanList;
