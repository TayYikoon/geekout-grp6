import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewMaterials = () => {
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    const fetchMaterials = async () => {
      try {
        const response = await axios.get('/api/materials');
        setMaterials(response.data);
      } catch (error) {
        console.error('Error fetching materials:', error);
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

  return (
    <div>
      <h2>View Materials</h2>
      <ul>
        {materials.map(material => (
          <li key={material.id}>
            {material.title} - {material.tags}
            <button onClick={() => handleDelete(material.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewMaterials;
