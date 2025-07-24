// frontend/src/routes/AppRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../page/Home';
import About from '../page/About';
import Contact from '../page/Contact';
import Login from '../page/Login';
import Register from '../page/Register';
import Dashboard from '../page/Dashboard';
// import Profile from '../page/Profile';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      {/* <Route path="/profile" element={<Profile />} /> */}
      {/* Add a 404 Not Found route if needed */}
    </Routes>
  );
};

export default AppRoutes;
