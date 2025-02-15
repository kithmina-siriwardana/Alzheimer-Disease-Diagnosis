import axios from 'axios';
import FormData from 'form-data';
import fs from 'fs';

export const getPrediction = async (file) => {
  try {
    const formData = new FormData();
    
    // Directly append the buffer as file data
    formData.append('image', file.buffer, {
      filename: file.originalname,
      contentType: file.mimetype
    });

    const response = await axios.post(
      'http://localhost:5000/predict',
      formData,
      {
        headers: {
          ...formData.getHeaders()
        }
      }
    );

    return response.data;
  } catch (error) {
    console.error('Model Service Error:', error.response?.data || error.message);
    throw new Error(error.response?.data?.error || 'Error getting prediction');
  }
};