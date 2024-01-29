import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import News from './components/News';

class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <Router>
          <Navbar title="Today News"/>
          <Routes>
            <Route path="/" element={<News key="General" pageSize={6} country="in" category="General" />} />   
            <Route path="/Business" element={<News key="Business" pageSize={6} country="in" category="Business" />} />
            <Route path="/Entertainment" element={<News key="Entertainment" pageSize={6} country="in" category="Entertainment" />} />
            <Route path="/General" element={<News key="General" pageSize={6} country="in" category="General" />} />
            <Route path="/Health" element={<News key="Health" pageSize={6} country="in" category="Health" />} />
            <Route path="/Science" element={<News key="Science" pageSize={6} country="in" category="Science" />} />
            <Route path="/Sports" element={<News key="Sports" pageSize={6} country="in" category="Sports" />} />
            <Route path="/Technology" element={<News key="Technology" pageSize={6} country="in" category="Technology" />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
