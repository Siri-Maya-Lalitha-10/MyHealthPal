import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/diabetes" className="sidebar-link">Diabetes Prediction</Link>
      <Link to="/heartdisease" className="sidebar-link">Heart Disease Prediction</Link>
      <Link to="/parkinsons" className="sidebar-link">Parkinson's Prediction</Link>
    </div>
  );
};

export default Sidebar;
