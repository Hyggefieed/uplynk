import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#team' },
      { name: 'Careers', href: '#careers' },
      { name: 'Contact', href: '#contact' }
    ],
    services: [
      { name: 'Dashboard', href: '#dashboard' },
      { name: 'Analytics', href: '#analytics' },
      { name: 'Reports', href: '#reports' },
      { name: 'Support', href: '#support' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Cookie Policy', href: '#cookies' },
      { name: 'Disclaimer', href: '#disclaimer' }
    ]
  };

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#facebook' },
    { name: 'Twitter', icon: Twitter, href: '#twitter' },
    { name: 'LinkedIn', icon: Linkedin, href: '#linkedin' },
    { name: 'Instagram', icon: Instagram, href: '#instagram' }
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Logo and Description */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#0b1d51' }}>
                  <span className="text-white font-bold text-sm">U</span>
                </div>
                <span className="text-xl font-semibold" style={{ color: '#0b1d51' }}>
                  UpLynk
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-6 max-w-md">
                Empowering businesses with innovative solutions and professional services. 
                Join us in building the future of digital transformation.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-2">
                <div className="flex items-center text-gray-600 text-sm">
                  <Mail className="w-4 h-4 mr-2" style={{ color: '#0b1d51' }} />
                  contact@uplynk.com
                </div>
                <div className="flex items-center text-gray-600 text-sm">
                  <Phone className="w-4 h-4 mr-2" style={{ color: '#0b1d51' }} />
                  +1 (555) 123-4567
                </div>
                <div className="flex items-center text-gray-600 text-sm">
                  <MapPin className="w-4 h-4 mr-2" style={{ color: '#0b1d51' }} />
                  New York, NY 10001
                </div>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-gray-600 text-sm hover:text-white hover:bg-opacity-90 px-2 py-1 rounded transition-all duration-200"
                      style={{
                        '--hover-bg': '#0b1d51'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#0b1d51';
                        e.target.style.color = 'white';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'transparent';
                        e.target.style.color = '#4B5563';
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Services</h3>
              <ul className="space-y-2">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-gray-600 text-sm hover:text-white hover:bg-opacity-90 px-2 py-1 rounded transition-all duration-200"
                      style={{
                        '--hover-bg': '#0b1d51'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#0b1d51';
                        e.target.style.color = 'white';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'transparent';
                        e.target.style.color = '#4B5563';
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Newsletter</h3>
              <p className="text-gray-600 text-sm mb-4">
                Stay updated with our latest news and offers.
              </p>
              <div className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all duration-200"
                    style={{
                      '--focus-ring-color': '#0b1d51'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#0b1d51';
                      e.target.style.boxShadow = `0 0 0 2px rgba(11, 29, 81, 0.1)`;
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#D1D5DB';
                      e.target.style.boxShadow = 'none';
                    }}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        handleNewsletterSubmit(e);
                      }
                    }}
                  />
                </div>
                <button
                  onClick={handleNewsletterSubmit}
                  className="w-full flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-md shadow-sm hover:shadow-md transition-all duration-200 ease-in-out hover:opacity-90"
                  style={{ backgroundColor: '#0b1d51' }}
                >
                  <Send className="w-4 h-4 mr-2" />
                  {isSubscribed ? 'Subscribed!' : 'Subscribe'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-600 text-sm">
              © 2025 UpLynk. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="p-2 rounded-full text-gray-600 hover:text-white hover:shadow-md transition-all duration-200"
                    style={{
                      '--hover-bg': '#0b1d51'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#0b1d51';
                      e.target.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = '#4B5563';
                    }}
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>

            {/* Legal Links */}
            <div className="flex space-x-4">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 text-sm hover:text-white hover:bg-opacity-90 px-2 py-1 rounded transition-all duration-200"
                  style={{
                    '--hover-bg': '#0b1d51'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#0b1d51';
                    e.target.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = '#4B5563';
                  }}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;