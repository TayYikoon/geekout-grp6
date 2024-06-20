import React from 'react';

const ClassList = ({ setCurrentPage }) => {
  const students = [
    { id: 1, name: 'Jaysoorya Rajendran', proficiency: 'Easy' },
    { id: 2, name: 'Yong Bong Hong Bin', proficiency: 'Medium' },
    { id: 3, name: 'Brian Tan', proficiency: 'Hard' },
    // Add more mock students here
  ];

  return (
    <div className="classListContainer">
      <h2>Subject: Data Engineering ST1507</h2>
      <ul>
        {students.map(student => (
          <li key={student.id}>
            <span>{student.name}</span>
            <label>
              <input type="radio" name={`proficiency-${student.id}`} value="Easy" defaultChecked={student.proficiency === 'Easy'} /> Easy
            </label>
            <label>
              <input type="radio" name={`proficiency-${student.id}`} value="Medium" defaultChecked={student.proficiency === 'Medium'} /> Medium
            </label>
            <label>
              <input type="radio" name={`proficiency-${student.id}`} value="Hard" defaultChecked={student.proficiency === 'Hard'} /> Hard
            </label>
          </li>
        ))}
      </ul>
      <button onClick={() => setCurrentPage('personalisedWorksheets')}>Generate Worksheets</button>
      <button onClick={() => setCurrentPage('worksheetGen')}>Back</button>
    </div>
  );
};

export default ClassList;
