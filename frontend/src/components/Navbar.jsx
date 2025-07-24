import React, { useState } from 'react';
import { Menu, X, User, Home, Info, Mail, BarChart3 } from 'lucide-react';
// import About from '../page/About';
// import Contact from '../page/Contact';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', to: '/', icon: Home },
    { name: 'About', to: '/about', icon: Info },
    { name: 'Contact', to: '/contact', icon: Mail },
    { name: 'Dashboard', to: '/dashboard', icon: BarChart3 },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#0b1d51' }}>
                <span className="text-white font-bold text-sm">U</span>
              </div>
              <span className="text-xl font-semibold" style={{ color: '#0b1d51' }}>
                Uplynk
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className="text-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ease-in-out hover:shadow-md"
                  style={{
                    '--hover-bg': '#0b1d51'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#0b1d51';
                    e.target.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = '#374151';
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Login Button */}
          <div className="hidden md:block">
            <button 
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white shadow-sm hover:shadow-md transition-all duration-200 ease-in-out hover:opacity-90"
              style={{ backgroundColor: '#0b1d51' }}
            >
              <User className="w-4 h-4 mr-2" />
              Login
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Sidebar */}
          <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
            {/* Sidebar Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#0b1d51' }}>
                  <span className="text-white font-bold text-sm">U</span>
                </div>
                <span className="text-xl font-semibold" style={{ color: '#0b1d51' }}>
                  UpLynk
                </span>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-md text-gray-700 hover:text-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-200"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Sidebar Navigation */}
            <div className="py-6 px-4">
              <nav className="space-y-2">
                {navItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <Link
                      key={item.name}
                      to={item.to}
                      className="flex items-center px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-white hover:shadow-md transition-all duration-200 ease-in-out"
                      style={{
                        '--hover-bg': '#0b1d51'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#0b1d51';
                        e.target.style.color = 'white';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'transparent';
                        e.target.style.color = '#374151';
                      }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <IconComponent className="w-5 h-5 mr-3" />
                      {item.name}
                    </Link>
                  );
                })}
              </nav>
              
              {/* Login Button in Sidebar */}
              <div className="pt-6 mt-6 border-t border-gray-200">
                <button 
                  className="w-full flex items-center justify-center px-4 py-3 text-base font-medium text-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 ease-in-out hover:opacity-90"
                  style={{ backgroundColor: '#0b1d51' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User className="w-5 h-5 mr-2" />
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;