// import React from 'react'

// export default function HomePage() {
//   const buttonStyle = {
//     width: '25rem',
//     height: '3rem',
//   };
//   const containerStyle = {
//     marginTop: '-50px', 
//   };
//   return (
//    <>
//     <div className="d-flex flex-column justify-content-center align-items-center vh-100" style={containerStyle}>
//       <button className="btn btn-primary mx-2 my-3" style={buttonStyle} type="button">Create a New Matrix </button>
//       <button className="btn btn-primary mx-2 my-3" style={buttonStyle} type="button">Use a Existing Matrix</button>
//       <button className="btn btn-primary mx-2 my-3" style={buttonStyle} type="button">About</button>
//     </div></>
//   )
// }
// HomePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Navbar from '../Components/Navbar';


const HomePage = () => {
  const navigate = useNavigate();
  const containerStyle = {
        marginTop: '-50px', 
      };

  const handleButtonClick1 = () => {
    navigate('/dimension');
  };
  const handleButtonClick2 = () => {
    navigate('/searchdb');
  };
  const buttonStyle = {
         width: '25rem',
         height: '3rem',
       };

  return (
    <>
    <Navbar />
    <div className="d-flex flex-column justify-content-center align-items-center vh-100" style={containerStyle}>
       <button className="btn btn-primary mx-2 my-3" style={buttonStyle} onClick={handleButtonClick1} type="button">Create a New Matrix </button>
       <button className="btn btn-primary mx-2 my-3" style={buttonStyle} onClick={handleButtonClick2} type="button">Use a Existing Matrix</button>
       <button className="btn btn-primary mx-2 my-3" style={buttonStyle} type="button">About</button>
    </div>
    </>
  );
};
export default HomePage;
