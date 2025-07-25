import React from 'react';
import AppRoutes from './routes/AppRoutes'; 
import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Assuming you have a Footer component

const App = () => {
  return (
    <div>
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  );
};

export default App;
