import React from 'react';

const MobileMenuButton = ({ isOpen, onClick }) => {
  return (
    <button
      className={`fixed top-[80px] z-50 bg-white p-3 rounded-full shadow-lg lg:hidden transition-all duration-300 ${
        isOpen 
          ? 'left-[calc(58vw-24px)]' // Als sidebar open is, plaats knop aan rechterkant
          : 'left-4' // Als sidebar dicht is, plaats knop links
      }`}
      onClick={onClick}
      aria-label={isOpen ? 'Sluit menu' : 'Open menu'}
    >
      <svg
        className={`w-6 h-6 transition-transform ${isOpen ? 'rotate-90' : ''}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        {isOpen ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        )}
      </svg>
    </button>
  );
};

export default MobileMenuButton; 