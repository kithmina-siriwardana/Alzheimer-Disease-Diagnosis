import axios from "axios";
import FormData from "form-data";

export const getPrediction = async (file) => {
  try {
    const formData = new FormData();

    // Directly append the buffer as file data
    formData.append("image", file.buffer, {
      filename: file.originalname,
      contentType: file.mimetype,
    });

    const response = await axios.post(
      `${process.env.MODEL_SERVER_URL}/api/predict/mri`,
      formData,
      {
        headers: {
          ...formData.getHeaders(),
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(
      "Model Service Error:",
      error.response?.data || error.message
    );
    throw new Error(error.response?.data?.error || "Error getting prediction");
  }
};

export const getRiskAnalysis = async (data) => {
  try {
    const response = await axios.post(
      `${process.env.MODEL_SERVER_URL}/api/predict/risk/XGBoost`,
      data
    );

    return response.data;
  } catch (error) {
    console.error(
      "Model Service Error:",
      error.response?.data || error.message
    );
    throw new Error(error.response?.data?.error || "Error getting prediction");
  }
};
