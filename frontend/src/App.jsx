import React from 'react';
import AppRoutes from './routes/AppRoutes'; 
// Assuming you have a global CSS file
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
