import React from 'react';
import './App.css';

const HeartDiseasePrediction = () => {
  return (
    <div className="form-container">
      <div className="form-box">
        <h2 className="form-title">Heart Disease Prediction</h2>
        
        <label className="form-label">Age:</label>
        <input type="text" className="form-input" />

        <label className="form-label">Gender:</label>
        <input type="text" className="form-input" />

        <label className="form-label">Cholesterol:</label>
        <input type="text" className="form-input" />

        <label className="form-label">Blood Pressure:</label>
        <input type="text" className="form-input" />

        <label className="form-label">Heart Rate:</label>
        <input type="text" className="form-input" />

        <label className="form-label">Smoking:</label>
        <input type="text" className="form-input" />

        <label className="form-label">Alcohol Intake:</label>
        <input type="text" className="form-input" />

        <label className="form-label">Exercise Hours:</label>
        <input type="text" className="form-input" />

        <label className="form-label">Family History:</label>
        <input type="text" className="form-input" />

        <label className="form-label">Diabetes:</label>
        <input type="text" className="form-input" />

        <label className="form-label">Obesity:</label>
        <input type="text" className="form-input" />

        <label className="form-label">Stress Level:</label>
        <input type="text" className="form-input" />

        <label className="form-label">Blood Sugar:</label>
        <input type="text" className="form-input" />

        <label className="form-label">Exercise Induced Angina:</label>
        <input type="text" className="form-input" />

        <label className="form-label">Chest Pain Type:</label>
        <input type="text" className="form-input" />

        <button className="form-button">Predict</button>
      </div>
    </div>
  );
};

export default HeartDiseasePrediction;
