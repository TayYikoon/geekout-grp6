import React from 'react';

const PersonalisedWorksheets = ({ setCurrentPage }) => {
  const students = [
    { id: 1, name: 'Jaysoorya Rajendran' },
    { id: 2, name: 'Yong Bong Hong Bin' },
    { id: 3, name: 'Brian Tan' },
    // Add more mock students here
  ];

  return (
    <div className="personalisedWorksheetsContainer">
      <h2>Class 3A</h2>
      <ul>
        {students.map(student => (
          <li key={student.id}>
            <span>{student.name}</span>
            <button>Download file</button>
            <button>Send via email</button>
            <button>File preview</button>
          </li>
        ))}
      </ul>
      <button onClick={() => setCurrentPage('classList')}>Back</button>
      <button onClick={() => setCurrentPage('home')}>Done</button>
    </div>
  );
};

export default PersonalisedWorksheets;
