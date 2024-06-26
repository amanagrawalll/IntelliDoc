import React, { useContext, useState } from "react";
import axios from "axios";
import { MLBASE_URL } from "../../../Base_url";
import { useNavigate } from "react-router-dom";
import { Context } from "../../..";
import toast from "react-hot-toast";
const Ct_scan_form = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [responseMessage, setResponseMessage] = useState("");
const [loading,setLoading] = useState(false);
const {isAuthorized,setIsAuthorized}=useContext(Context);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };
const navigateTo = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!selectedFile) {
      toast.error("Please select an image.");
      return ;
    }
    if(!isAuthorized){
      toast.error("The page has not been integrated with the machine learning model yet.");
      return ;
      // navigateTo("/login");
    }
    setLoading(true);
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await axios.post(
        `${MLBASE_URL}/predict_cataract`,
        formData,
        { withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setLoading(false);
      setResponseMessage(response.data.prediction);
      navigateTo(`/ct-scan-results/${response.data.prediction}`);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center overflow-hidden">
    <div className="max-w-md mx-auto bg-white p-8 rounded shadow-md w-full">
      <h1 className="text-2xl font-bold mb-4">CT Scan Disease Prediction</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Upload Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 px-3 py-2"
          />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200" type="submit">
          {loading ? <span>Loading...</span> : <span>Predict</span>}
        </button>
      </form>
      {selectedFile && (
        <div className="mt-4">
          <p className="font-semibold">Selected Image:</p>
          <img src={URL.createObjectURL(selectedFile)} alt="Selected" className="mt-2 w-full" />
        </div>
      )}
      {responseMessage && (
        <div className="mt-4">
          <p className="font-semibold">Prediction Result:</p>
          <p>{responseMessage}</p>
        </div>
      )}
    </div>
  </div>
  );
};

export default Ct_scan_form;
