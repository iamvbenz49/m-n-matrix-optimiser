import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Matrixdata from '../Components/Matrixdata';


const SearchDB = () => {
    const [row, setRows] = useState(0);
    const [column, setColumns] = useState(0);
    const [result,setResult] = useState(null);
    const handleRowsChange = (e) => {
        setRows(parseInt(e.target.value, 10));
    };
    
    const handleColumnsChange = (e) => {
        setColumns(parseInt(e.target.value, 10));
    };
    
    useEffect(() => {
      const fetchMatrix = async () => {
        const response = await fetch("http://localhost:5000/searchdb");
        const json = await response;  
        console.log(json);
      }
      fetchMatrix()
    }, [])
    const navigate = useNavigate();
    const handleSearchButtonClick = async (e) => {
        e.preventDefault();
      
        const dimension = {row,column};
        const response = await fetch("http://localhost:5000/check", {
            method:"POST",
            body: JSON.stringify(dimension),
            headers: {
                "Content-Type": "application/json"
              }
            })
            
            const json = await response.json();
            console.log(json);
            console.log(response.ok)
            if(!response.ok){
                console.log("Not Done search")
            }
            if(response.ok){
              console.log("Done search");
            }
            if(json.message)
              setResult("YES");
            else
              setResult("NO");
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
        margin:"0.5rem"
      };
    
      const buttonContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: '10px',
      };
      return (
        <div>
          <form >
          <div style={containerStyle}>
          <div style={headingStyle}>{"Enter the Index to Search"}</div>
          <label style={labelStyle}><span style={{ fontSize: '1.2em', marginBottom: '5px' }}>Enter the Row:</span></label>
          <input
              type="number" 
              value={row} 
              onChange={handleRowsChange} 
              style={inputStyle} />
          <label style={labelStyle}><span style={{ fontSize: '1.2em', marginBottom: '5px' }}>Enter the Column:</span> </label>
          <input 
              type="number" 
              value={column} 
              onChange={handleColumnsChange} 
              style={inputStyle} />
          
          <div style={buttonContainerStyle}>
          <button style={buttonStyle} onClick={handleSearchButtonClick} type="button">
            Search
          </button>
          </div>
        </div>
        </form>
        {result!=null &&  <Matrixdata result = {result}/>}
        </div>
      );
}

export default SearchDB;