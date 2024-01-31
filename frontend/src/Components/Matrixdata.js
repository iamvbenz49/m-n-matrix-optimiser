// MatrixGrid.jsx

// import React, { useState } from 'react';

// const MatrixGrid = () => {
//   const [rows, setRows] = useState(3);
//   const [columns, setColumns] = useState(3);
//   const [result, setResult] = useState(null);

//   const handleRowChange = (e) => {
//     setRows(e.target.value);
//   };

//   const handleColumnChange = (e) => {
//     setColumns(e.target.value);
//   };

//   const handleNextButtonClick = () => {
//     // Generate a random result
//     const randomResult = Math.random() < 0.5 ? 'Yes' : 'No';
//     setResult(randomResult);
//   };

//   const getMainBoxStyle = () => {
//     return {
//       backgroundColor: '#f0f0f0', // A balanced color for the main box
//       padding: '30px 100px',
//       borderRadius: '10px',
//       boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
//     };
//   };

//   const getResultBoxStyle = () => {
//     return {
//       marginTop: '20px',
//       backgroundColor: result === 'Yes' ? '#27ae60' : '#e74c3c',
//       color: '#fff',
//       padding: '20px',
//       borderRadius: '10px',
//       boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//       textAlign: 'center',
//       fontSize: '24px',
//       fontWeight: 'bold',
//       textTransform: 'uppercase',
//       letterSpacing: '1px',
//     };
//   };

//   return (
//     <div
//       style={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         height: '100vh',
//       }}
//     >
//       <div style={getMainBoxStyle()}>
//         <h2 style={{ marginBottom: '20px', textAlign: 'center', color: 'black' }}>Matrix</h2>
//         <div style={{ marginBottom: '15px', textAlign: 'center' }}>
//           <label style={{ marginRight: '10px', color: 'black' }}>Rows: </label>
//           <input type="number" value={rows} onChange={handleRowChange} style={{ width: '80px' }} />
//         </div>
//         <div style={{ marginBottom: '15px', textAlign: 'center' }}>
//           <label style={{ marginRight: '10px', color: 'black' }}>Columns: </label>
//           <input type="number" value={columns} onChange={handleColumnChange} style={{ width: '80px' }} />
//         </div>
//         <div style={{ textAlign: 'right' }}>
//           <button
//             onClick={handleNextButtonClick}
//             style={{
//               backgroundColor: '#4CAF50', // Use the same color as the main box
//               color: '#fff',
//               padding: '10px 20px',
//               border: 'none',
//               borderRadius: '5px',
//               cursor: 'pointer',
//               fontSize: '16px',
//               marginLeft: '5px',
//             }}
//           >
//             Next
//           </button>
//         </div>
//       </div>
//       {result && <div style={getResultBoxStyle()}>{result}</div>}
//     </div>
//   );
// };

// export default MatrixGrid;
import React, { useState } from 'react';

const Matrixdata = () => {
  const [rows, setRows] = useState(3);
  const [columns, setColumns] = useState(3);
  const [result, setResult] = useState(null);

  const handleRowChange = (e) => {
    setRows(e.target.value);
  };

  const handleColumnChange = (e) => {
    setColumns(e.target.value);
  };

  const handleNextButtonClick = () => {
    // Generate a random result
    const randomResult = Math.random() < 0.5 ? 'Yes' : 'No';
    setResult(randomResult);

    // Hide the result after 3 seconds
    setTimeout(() => {
      setResult(null);
    }, 3000);
  };

  const getMainBoxStyle = () => {
    return {
      backgroundColor: '#f0f0f0',
      padding: '30px 100px',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
    };
  };

  const getResultBoxStyle = () => {
    return {
      marginTop: '20px',
      backgroundColor: result === 'Yes' ? '#27ae60' : '#e74c3c',
      color: '#fff',
      padding: '10px 20px',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      fontSize: '24px',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    };
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <div style={getMainBoxStyle()}>
        <h2 style={{ marginBottom: '20px', textAlign: 'center', color: 'black' }}>Matrix</h2>
        <div style={{ marginBottom: '15px', textAlign: 'center' }}>
          <label style={{ marginRight: '10px', color: 'black' }}>Rows: </label>
          <input type="number" value={rows} onChange={handleRowChange} style={{ width: '80px' }} />
        </div>
        <div style={{ marginBottom: '15px', textAlign: 'center' }}>
          <label style={{ marginRight: '10px', color: 'black' }}>Columns: </label>
          <input type="number" value={columns} onChange={handleColumnChange} style={{ width: '80px' }} />
        </div>
        <div style={{ textAlign: 'right' }}>
          <button
            onClick={handleNextButtonClick}
            style={{
              backgroundColor: '#4CAF50',
              color: '#fff',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px',
              marginLeft: '5px',
            }}
          >
            Next
          </button>
        </div>
      </div>
      {result && <div style={getResultBoxStyle()}>{result}</div>}
    </div>
  );
};

export default Matrixdata;
