import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Blog from './Component/Blog';
import Nopage from './Component/Nopage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul className="App-header">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/Blog">Blog</Link>
            </li>
            <li>
              <Link to="/Nopage">Nopage</Link>
            </li>
            
          </ul>

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
             <Route exact path="/Blog" element={<Blog />} />
              <Route exact path="/Nopage" element={<Nopage />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
