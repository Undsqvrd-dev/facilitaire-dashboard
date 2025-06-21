import React, { useEffect, useState } from 'react';
import { motion, useAnimate } from 'framer-motion';

const CompanyPopupMobile = ({ company, onClose }) => {
  const [scope, animate] = useAnimate();
  const [isExpanded, setIsExpanded] = useState(false);

  const expand = () => {
    animate(scope.current, { y: "20%" }, { type: "spring", stiffness: 300, damping: 30 });
    setIsExpanded(true);
  };

  const collapse = () => {
    animate(scope.current, { y: "calc(100% - 200px)" }, { type: "spring", stiffness: 300, damping: 30 });
    setIsExpanded(false);
  };

  const toggle = () => (isExpanded ? collapse() : expand());

  const handleClose = () => {
    collapse();
    setTimeout(onClose, 300);
  };

  useEffect(() => {
    const handleEsc = (e) => e.key === 'Escape' && handleClose();
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []); // eslint-disable-line

  if (!company) return null;

  const onDragEnd = (event, info) => {
    if (info.velocity.y < -50 || (info.offset.y < -100 && info.velocity.y <= 0)) {
      expand();
    } else if (info.velocity.y > 50 || (info.offset.y > 100 && info.velocity.y >= 0)) {
      collapse();
    } else {
       if (isExpanded) expand();
       else collapse();
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-30 z-40" onClick={handleClose} aria-hidden="true" />
      <motion.div
        ref={scope}
        drag="y"
        onDragEnd={onDragEnd}
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={0.2}
        initial={{ y: "calc(100% - 200px)" }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-2xl shadow-2xl"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 p-4 cursor-grab" onTouchStart={(e) => e.stopPropagation()} onClick={toggle}>
          <div className="w-10 h-1.5 bg-gray-300 rounded-full" />
        </div>
        <button onClick={handleClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10" aria-label="Sluiten">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="p-4 pt-8 max-h-[80vh] overflow-y-auto" onClick={() => !isExpanded && expand()}>
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0">
              <img src={company.logo} alt={`${company.naam} logo`} className="w-24 h-12 object-contain" onError={(e) => { e.target.src = '/placeholder-logo.svg'; }} />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold">{company.naam}</h2>
              <p className="text-sm text-gray-600">
                {company.omschrijving.substring(0, 100)}{company.omschrijving.length > 100 && '...'}
              </p>
            </div>
          </div>
          <motion.div initial={false} animate={{ opacity: isExpanded ? 1 : 0, height: isExpanded ? 'auto' : 0 }} className="overflow-hidden">
            <div className="mt-4 border-t pt-4">
              <p className="text-sm text-gray-700 mb-4">{company.omschrijving}</p>
              <div className="space-y-3 bg-gray-50 p-3 rounded-lg">
                <div className="flex justify-between items-center text-sm"><span className="font-medium text-gray-500">Type organisatie</span><span className="text-gray-900">{company.type}</span></div>
                <div className="flex justify-between items-center text-sm"><span className="font-medium text-gray-500">Locatie</span><span className="text-gray-900">{company.locatie}</span></div>
                <div className="flex justify-between items-center text-sm"><span className="font-medium text-gray-500">Branche</span><span className="text-gray-900">{company.branche || 'Alles'}</span></div>
              </div>
              {company.website && <a href={company.website} target="_blank" rel="noopener noreferrer" className="mt-4 block w-full bg-blue-500 text-white text-center py-2.5 px-4 rounded-lg hover:bg-blue-600 transition-colors font-semibold">Naar website</a>}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default CompanyPopupMobile; 