import React from 'react';

function RandomCat({ cat, fetchCat, addToBanList }) {
  return (
    <div className="RandomCat">
      {cat && (
        <>
          <div className="cat-details">
            <h2>{cat.breeds[0]?.name}</h2>
            <p>{cat.breeds[0]?.weight.metric} kg</p>
            <p>
              <button onClick={() => addToBanList(cat.breeds[0]?.name)}>Ban {cat.breeds[0]?.name}</button>
            </p>
            <p>{cat.breeds[0]?.life_span} years</p>
          </div>
          <img src={cat.url} alt={cat.breeds[0]?.name} className="cat-image" />
        </>
      )}
      <button onClick={fetchCat} className="discover-btn">Discover!</button>
    </div>
  );
}

export default RandomCat;
