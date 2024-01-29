// import logo from './logo.svg';
// import './App.css';
// import Dimension from './Components/Dimension';
// import HomePage from './Components/HomePage'; 
// import Navbar from './Components/Navbar';
// import Indices from './Components/Indices'
// import MatrixPage from './Components/MatrixInput';


// function App() {
//   return (
//    <>
//     {/* <Navbar/> */}
//    {/*<HomePage/>
//    <Dimension /> 
//    <Indices/>*/}
//    <MatrixPage/>
//    </>
//   );
// }
// export default App;
// App.js
//////////////////////////////////////////////////////////
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import HomePage from './Components/HomePage';
// import Dimension from './Components/Dimension';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/dimension" element={<Dimension />} />
//         {/* Add more routes for other components if needed */}
//       </Routes>
//     </Router>
//   );
// }
//////////////////////////////////////////////////////////////////////////////
// export default App;
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import HomePage from './Components/HomePage';
// import Dimension from './Components/Dimension';
// import Indices from './Components/Indices'; // Make sure to import the Indices component

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/dimension" element={<Dimension />} />
//         <Route path="/indices" element={<Indices />} /> 
//         {/* Add more routes for other components if needed */}
//       </Routes>
//     </Router>
//   );
// }
// export default App;
//////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import Dimension from './Components/Dimension';
import Indices from './Components/Indices';
import MatrixInput from './Components/MatrixInput'; // Make sure to import the MatrixInput component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dimension" element={<Dimension />} />
        <Route path="/indices" element={<Indices />} />
        <Route path="/matrix-input" element={<MatrixInput />} /> {/* Add this line for the MatrixInput component */}
        {/* Add more routes for other components if needed */}
      </Routes>
    </Router>
  );
}

export default App;
