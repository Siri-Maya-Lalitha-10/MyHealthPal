import React from 'react';
import './App.css';

const DiabetesPrediction = () => {
  return (
    <div className="form-container">
      <div className="form-box">
        <h2 className="form-title">Diabetes Prediction</h2>
        
        <label className="form-label">Pregnancies:</label>
        <input type="text" className="form-input" />

        <label className="form-label">Glucose:</label>
        <input type="text" className="form-input" />

        <label className="form-label">Blood Pressure:</label>
        <input type="text" className="form-input" />

        <label className="form-label">Skin Thickness:</label>
        <input type="text" className="form-input" />

        <label className="form-label">Insulin:</label>
        <input type="text" className="form-input" />

        <label className="form-label">BMI:</label>
        <input type="text" className="form-input" />

        <label className="form-label">Diabetes Pedigree Function:</label>
        <input type="text" className="form-input" />

        <label className="form-label">Age:</label>
        <input type="text" className="form-input" />

        <button className="form-button">Predict</button>
      </div>
    </div>
  );
};

export default DiabetesPrediction;
