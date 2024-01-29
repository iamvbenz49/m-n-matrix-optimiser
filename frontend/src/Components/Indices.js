//Indices.js

// import React, { useState } from 'react';

// const Dimension = () => {
//   const [rows, setRows] = useState(1);
//   const [columns, setColumns] = useState(1);

//   const handleRowsChange = (e) => {
//     setRows(parseInt(e.target.value, 10));
//   };

//   const handleColumnsChange = (e) => {
//     setColumns(parseInt(e.target.value, 10));
//   };

//   const handleNextButtonClick = () => {
//     // Handle what you want to do when the "Next" button is clicked
//     console.log(`Rows: ${rows}, Columns: ${columns}`);
//     // Add your logic here
//   };

//   const containerStyle = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#e6f7ff',
//     padding: '20px',
//     borderRadius: '10px',
//     boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
//     width: '400px',
//   };

//   const headingStyle = {
//     fontSize: '1.5em',
//     fontWeight: 'bold',
//     marginBottom: '20px',
//   };

//   const labelStyle = {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'flex-start',
//     marginBottom: '10px',
//   };

//   const inputStyle = {
//     padding: '8px',
//     fontSize: '1em',
//     border: '1px solid #ccc',
//     borderRadius: '4px',
//   };
//   const buttonStyle = {
//     backgroundColor: '#4caf50',
//     color: 'white',
//     fontSize: '1.2em',
//     padding: '8px 10px',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//   };
//   const buttonContainerStyle = {
//     display: 'flex',
//     justifyContent: 'space-around', // Adjusted this line
//     width: '100%', // Adjusted this line
//     marginTop: '10px', // Adjusted this line for some space between buttons
//   };
  
//   return (
//     <div style={containerStyle}>
//       <div style={headingStyle}>Enter the Indices</div>
//       <label style={labelStyle}>
//         <span style={{ fontSize: '1.2em', marginBottom: '5px' }}>Rows:</span>
//         <input type="number" value={rows} onChange={handleRowsChange} style={inputStyle} />
//       </label>
//       <label style={labelStyle}>
//         <span style={{ fontSize: '1.2em', marginBottom: '5px' }}>Columns:</span>
//         <input type="number" value={columns} onChange={handleColumnsChange} style={inputStyle} />
//       </label>
//       <div style={buttonContainerStyle}>
//             <button style={buttonStyle} onClick={handleNextButtonClick} type="button">
//             New_Index
//            </button>
//           <button style={buttonStyle} onClick={handleNextButtonClick} type="button">
//            Create
//           </button>
//       </div>
//     </div>
//   );
// };

// export default Dimension;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Indices = () => {
  const [rows, setRows] = useState(1);
  const [columns, setColumns] = useState(1);
  const navigate = useNavigate();

  const handleRowsChange = (e) => {
    setRows(parseInt(e.target.value, 10));
  };

  const handleColumnsChange = (e) => {
    setColumns(parseInt(e.target.value, 10));
  };

  const handleCreateButtonClick = () => {
    // Handle what you want to do when the "Create" button is clicked
    console.log(`Rows: ${rows}, Columns: ${columns}`);
    // Add your logic here

    // Navigate to the "MatrixInput" page
    navigate('/matrix-input');
  };

  const containerStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e6f7ff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    width: '400px',
  };

  const headingStyle = {
    fontSize: '1.5em',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const labelStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: '10px',
  };

  const inputStyle = {
    padding: '8px',
    fontSize: '1em',
    border: '1px solid #ccc',
    borderRadius: '4px',
  };

  const buttonStyle = {
    backgroundColor: '#4caf50',
    color: 'white',
    fontSize: '1.2em',
    padding: '8px 10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: '10px',
  };
  return (
    <div style={containerStyle}>
      <div style={headingStyle}>Enter the Indices</div>
      <label style={labelStyle}>
        <span style={{ fontSize: '1.2em', marginBottom: '5px' }}>Rows:</span>
        <input type="number" value={rows} onChange={handleRowsChange} style={inputStyle} />
      </label>
      <label style={labelStyle}>
        <span style={{ fontSize: '1.2em', marginBottom: '5px' }}>Columns:</span>
        <input type="number" value={columns} onChange={handleColumnsChange} style={inputStyle} />
      </label>
      <div style={buttonContainerStyle}>
        <button style={buttonStyle} onClick={handleCreateButtonClick} type="button">
          New_Index
        </button>
        <button style={buttonStyle} onClick={handleCreateButtonClick} type="button">
          Create
        </button>
      </div>
    </div>
  );
};
export default Indices;
