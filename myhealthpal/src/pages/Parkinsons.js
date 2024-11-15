import React from 'react';
import './App.css';

const ParkinsonsPrediction = () => {
  return (
    <div className="form-container">
      <div className="form-box">
        <h2 className="form-title">Parkinson's Prediction</h2>
        
        <label className="form-label">MDVP:Fo(Hz):</label>
        <input type="text" className="form-input" />

        <label className="form-label">MDVP:Fhi(Hz):</label>
        <input type="text" className="form-input" />

        <label className="form-label">MDVP:Flo(Hz):</label>
        <input type="text" className="form-input" />

        <label className="form-label">MDVP:Jitter(%):</label>
        <input type="text" className="form-input" />

        <label className="form-label">MDVP:Jitter(Abs):</label>
        <input type="text" className="form-input" />

        <label className="form-label">MDVP:RAP:</label>
        <input type="text" className="form-input" />

        <label className="form-label">MDVP:PPQ:</label>
        <input type="text" className="form-input" />

        <label className="form-label">Jitter:DDP:</label>
        <input type="text" className="form-input" />

        <label className="form-label">MDVP:Shimmer:</label>
        <input type="text" className="form-input" />

        <label className="form-label">MDVP:Shimmer(dB):</label>
        <input type="text" className="form-input" />

        <label className="form-label">Shimmer:APQ3:</label>
        <input type="text" className="form-input" />

        <label className="form-label">Shimmer:APQ5:</label>
        <input type="text" className="form-input" />

        <label className="form-label">MDVP:APQ:</label>
        <input type="text" className="form-input" />

        <label className="form-label">Shimmer:DDA:</label>
        <input type="text" className="form-input" />

        <label className="form-label">NHR:</label>
        <input type="text" className="form-input" />

        <label className="form-label">HNR:</label>
        <input type="text" className="form-input" />

        <label className="form-label">Status:</label>
        <input type="text" className="form-input" />

        <label className="form-label">RPDE:</label>
        <input type="text" className="form-input" />

        <label className="form-label">DFA:</label>
        <input type="text" className="form-input" />

        <label className="form-label">Spread1:</label>
        <input type="text" className="form-input" />

        <label className="form-label">Spread2:</label>
        <input type="text" className="form-input" />

        <label className="form-label">D2:</label>
        <input type="text" className="form-input" />

        <label className="form-label">PPE:</label>
        <input type="text" className="form-input" />

        <button className="form-button">Predict</button>
      </div>
    </div>
  );
};

export default ParkinsonsPrediction;
