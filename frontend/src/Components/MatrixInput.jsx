// MatrixInput.jsx

import React, { useState, useEffect } from 'react';

const MatrixInput = () => {
  const [rows, setRows] = useState(3); // Initial number of rows
  const [columns, setColumns] = useState(3); // Initial number of columns
  const [matrix, setMatrix] = useState([]);

  // Function to initialize the matrix
  const initializeMatrix = () => {
    const newMatrix = Array.from({ length: rows }, () => Array(columns).fill(0));
    setMatrix(newMatrix);
  };

  useEffect(() => {
    initializeMatrix();
  }, [rows, columns]);

  // Function to handle changes in the number of rows input
  // const handleRowsChange = (e) => {
  //   const newRows = parseInt(e.target.value, 10) || 0;
  //   setRows(newRows);
  // };

  // // Function to handle changes in the number of columns input
  // const handleColumnsChange = (e) => {
  //   const newColumns = parseInt(e.target.value, 10) || 0;
  //   setColumns(newColumns);
  // };
  const handleRowsChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setRows(value > 0 ? value : 0);
  };
  const handleColumnsChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setColumns(value > 0 ? value : 0);
  };

  // Function to handle clicking the result button
  const handleResultClick = () => {
    // Perform any matrix calculation or logic here
    // For simplicity, let's just log the current matrix
    console.log(matrix);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ width: '80%', display: 'flex', gap: '30px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', overflow: 'hidden', background: '#f7f7f7' }}>
        {/* Left Section: Display Matrix */}
        <div style={{ flex: '1', backgroundColor: '#3498db', padding: '20px', borderRadius: '8px 0 0 8px', color: '#fff' }}>
          <div>
            <h3>Matrix</h3>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {matrix.map((row, rowIndex) => (
                <div key={rowIndex} style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                  {row.map((cell, colIndex) => (
                    <div key={colIndex} style={{ width: '40px', height: '40px', borderRadius: '4px', backgroundColor: '#fff', color: '#3498db', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '2px solid #3498db', fontWeight: 'bold' }}>{cell}</div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section: Input for Rows and Columns */}
        <div style={{ flex: '1', backgroundColor: '#fff', padding: '20px', borderRadius: '0 8px 8px 0', color: '#333' }}>
          <div>
            <h3>Pincode and Merchant</h3>
            <label>
              Pincode:
              <input type="number" value={rows} onChange={handleRowsChange} style={{ width: '100%', padding: '8px', margin: '8px 0', boxSizing: 'border-box' }} />
            </label>
            <br />
            <label>
              Merchant:
              <input type="number" value={columns} onChange={handleColumnsChange} style={{ width: '100%', padding: '8px', margin: '8px 0', boxSizing: 'border-box' }} />
            </label>
          </div>

          {/* Result Button */}
          <button onClick={handleResultClick} style={{ width: '100%', padding: '10px', backgroundColor: '#2ecc71', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Get Result</button>
        </div>
      </div>
    </div>
  );
};

export default MatrixInput;
