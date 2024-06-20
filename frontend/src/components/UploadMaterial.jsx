import React, { useState } from 'react';
import axios from 'axios';

const UploadMaterial = () => {
  const [title, setTitle] = useState('');
  const [pdf, setPdf] = useState(null);
  const [tags, setTags] = useState('');
  const [teacherId, setTeacherId] = useState('1'); // Mock teacher ID

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('pdf', pdf);
    formData.append('tags', tags);
    formData.append('teacherId', teacherId);

    try {
      const response = await axios.post('/api/materials', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert('Material uploaded successfully');
    } catch (error) {
      console.error(error);
      alert('Failed to upload material');
    }
  };

  return (
    <div>
      <h2>Upload Material</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input type="file" accept="application/pdf" onChange={(e) => setPdf(e.target.files[0])} required />
        <input type="text" placeholder="Tags (comma-separated)" value={tags} onChange={(e) => setTags(e.target.value)} required />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default UploadMaterial;
