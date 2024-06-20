import React from 'react';

const WorksheetGen = ({ setCurrentPage }) => {
  return (
    <div className="worksheetGenContainer">
      <button onClick={() => setCurrentPage('classList')}>Click to create new worksheet</button>
      <div className="templates">
        <div className="template">Template 1</div>
        <div className="template">Template 2</div>
      </div>
      <div className="recentFiles">
        <h3>Recent Files</h3>
        <ul>
          <li>File 1</li>
          <li>File 2</li>
        </ul>
      </div>
      <button onClick={() => setCurrentPage('home')}>Back</button>
    </div>
  );
};

export default WorksheetGen;
