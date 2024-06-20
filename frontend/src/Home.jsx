import React from 'react';

const Home = ({ setCurrentPage }) => {
  return (
    <div className="homeContainer">
      <h1>Hello, ${'{Name}'}! What would you want to do today?</h1>
      <div className="buttonContainer">
        <button onClick={() => setCurrentPage('database')}>Access Database</button>
        <button onClick={() => setCurrentPage('worksheetGen')}>AI Generate Customised Worksheets</button>
      </div>
    </div>
  );
};

export default Home;
