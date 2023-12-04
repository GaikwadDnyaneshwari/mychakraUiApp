
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './component/Footer';
import Header from './component/Header';
import Home from './component/Home';
import Videos from './component/Videos';
import Upload from './component/Upload';
import Signup from './component/Signup';
import Login from './component/Login';


function App() {
  return (
    <Router>
      <Header/>
      
      
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/videos" element={<Videos />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
