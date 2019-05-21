import React from 'react';
import './App.css';
import {MyLayout} from './MyLayout';

import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
      <MyLayout />
    </Router>
  );
}

export default App;
