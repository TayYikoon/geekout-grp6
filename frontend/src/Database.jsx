import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';
import data from "./TemplateData.json";

const Database = ({ setCurrentPage }) => {
  const [materials, setMaterials] = useState([]); // Initialize as an empty array
  const [error, setError] = useState(null); // State to handle errors
  const [file, setFile] = useState(null); // State to handle file uploads
  const [searchTerm, setSearchTerm] = useState("");
  
  useEffect(() => {
    const fetchMaterials = async () => {
      try {
        const response = await axios.get('/api/materials');
        if (Array.isArray(response.data)) {
          setMaterials(response.data);
        } else {
          setMaterials([]); // If the response is not an array, set it to an empty array
        }
      } catch (error) {
        console.error('Error fetching materials:', error);
        setError(error); // Set error state
      }
    };

    fetchMaterials();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/materials/${id}`);
      setMaterials(materials.filter(material => material.id !== id));
      alert('Material deleted successfully');
    } catch (error) {
      console.error('Error deleting material:', error);
      alert('Failed to delete material');
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFileUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      await axios.post('/api/materials/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setFile(null);
      const response = await axios.get('/api/materials');
      if (Array.isArray(response.data)) {
        setMaterials(response.data);
      } else {
        setMaterials([]); // If the response is not an array, set it to an empty array
      }
      alert('File uploaded successfully');
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Failed to upload file');
    }
  };

  if (error) {
    return <div>Error: {error.message}</div>; // Display error message if there's an error
  }

  return (
    <div className="databaseContainer">
      <h2>Select files</h2>
      <div className="searchInput_Container">
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleFileUpload}>Upload PDF</button>
      </div>
      <div className="template_Container">
        {materials.length > 0 ? (
          materials.map(material => (
            <div className="template" key={material.id}>
              <div className="fileInfo">
                <p>{material.title}</p>
                <p>{material.tags}</p>
              </div>
              <button onClick={() => handleDelete(material.id)}>Delete</button>
            </div>
          ))
        ) : (
          <p>No materials found</p>
        )}
      </div>
      <button className="backButton" onClick={() => setCurrentPage('home')}>Back</button>
      <div className="templateContainer">
        <div className="searchInput_Container">
          <input id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
        </div>
        <div className="template_Container">
          {
            data 
              .filter((val) => {
                if(searchTerm == ""){
                  return val;
                }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val;
                }
              })
              .map((val) => {
                return(
                  <div className="template" key={val.id}>
                      <img src={val.image} alt="" />
                      <h3>{val.title}</h3>
                      <p className="price">{val.who}</p>
                  </div> 
                )
              })
          }
        </div>
      </div>
    </div>
  );
};

export default Database;
