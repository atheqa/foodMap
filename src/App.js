import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Foodplan from './FoodPlan';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/food" element={<Foodplan />} />
        <Route exact path="/" element={<Foodplan />} />
      </Routes>
    </Router>
  );
}

export default App;