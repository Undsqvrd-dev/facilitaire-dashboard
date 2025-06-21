import React, { useState, useEffect, useRef } from 'react';

const CompanyPopupMobile = ({ company, onClose }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartY = useRef(0);
  const popupRef = useRef(null);

  const handleDragStart = (e) => {
    setIsDragging(true);
    dragStartY.current = e.touches ? e.touches[0].clientY : e.clientY;
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    const currentY = e.touches ? e.touches[0].clientY : e.clientY;
    const deltaY = dragStartY.current - currentY;

    // Expand if swiping up
    if (deltaY > 50) {
      setIsExpanded(true);
      setIsDragging(false);
    }
    
    // Collapse if swiping down
    if (deltaY < -50) {
      setIsExpanded(false);
      setIsDragging(false);
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };
  
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    // Prevent background scroll when popup is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (!company) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden"
        onClick={onClose} 
      />

      {/* Popup */}
      <div
        ref={popupRef}
        className={`fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-2xl shadow-lg transition-transform duration-300 ease-in-out md:hidden ${
          isExpanded ? 'translate-y-0' : 'translate-y-[calc(80%-30%)]' // Adjust based on peek height
        }`}
        style={{ height: '80vh', transform: `translateY(${isExpanded ? '20vh' : 'calc(100vh - 30vh)'})` }}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
      >
        {/* Drag Handle */}
        <div className="w-full py-3 flex justify-center cursor-grab" onClick={toggleExpand}>
          <div className="w-10 h-1.5 bg-gray-300 rounded-full" />
        </div>

        {/* Content */}
        <div className="p-4 pt-0 overflow-y-auto h-full">
            {/* Close button */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
                aria-label="Sluiten"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            
            <div className="flex flex-col h-full">
                {/* Header */}
                <div className="text-center mb-4">
                    <div className="flex justify-center items-center h-16">
                         <img
                            src={company.logo}
                            alt={`${company.naam} logo`}
                            className="max-h-full max-w-[180px] object-contain"
                            onError={(e) => { e.target.src = '/placeholder-logo.svg'; }}
                        />
                    </div>
                    <h2 className="text-2xl font-bold mt-3">{company.naam}</h2>
                    <p className="text-sm text-gray-600 px-2">{company.omschrijving.substring(0, 100)}{company.omschrijving.length > 100 && '...'}</p>
                </div>
            
                {/* Collapsible Content */}
                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isExpanded ? 'opacity-100' : 'opacity-0 h-0'}`}>
                    <p className="text-base text-gray-700 mb-6">{company.omschrijving}</p>

                    <div className="bg-gray-50 p-4 rounded-lg space-y-4">
                        <div className="flex justify-between items-center">
                            <span className="font-semibold text-gray-600">Type organisatie</span>
                            <span className="text-gray-800 text-right">{company.type}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="font-semibold text-gray-600">Locatie</span>
                            <span className="text-gray-800 text-right">{company.locatie}</span>
                        </div>
                         <div className="flex justify-between items-center">
                            <span className="font-semibold text-gray-600">Branche</span>
                            <span className="text-gray-800 text-right">{company.branche || 'Alles'}</span>
                        </div>
                    </div>

                    {company.website && (
                        <a
                            href={company.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 w-full bg-blue-500 text-white text-center py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors block"
                        >
                            Naar website
                        </a>
                    )}
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default CompanyPopupMobile; 