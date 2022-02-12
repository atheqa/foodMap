import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { FoodSelect } from './WeekDays';

function App() {
  return (
    <Router>
      <Route path="/food" component={FoodSelect} />
      <Route exact path="/" component={FoodSelect} />
    </Router>
  );
}

export default App;