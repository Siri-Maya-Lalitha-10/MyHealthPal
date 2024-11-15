import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import Sidebar from './components/Sidebar';
import Diabetes from './pages/Diabetes';
import HeartDisease from './pages/HeartDisease';
import Parkinsons from './pages/Parkinsons';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/diabetes" element={<Diabetes />} />
            <Route path="/heartdisease" element={<HeartDisease />} />
            <Route path="/parkinsons" element={<Parkinsons />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
