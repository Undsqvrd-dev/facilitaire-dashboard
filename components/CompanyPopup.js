import { useEffect } from "react";
import Image from 'next/image';

const CompanyPopup = ({ company, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleClose = () => {
    document.body.style.overflow = 'auto';
    onClose();
  };

  // Voeg een event listener toe voor het sluiten met de Escape toets
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, []);

  if (!company) return null;

  return (
    <div className="fixed left-1/2 bottom-10 transform -translate-x-1/2 z-50 w-full flex justify-center items-end pointer-events-none">
      <div className="detail-popup active pointer-events-auto">
        <div className="flex-1">
          {company.logo && (
            <div className="company-logo">
              <Image
                src={company.logo}
                alt={company.naam}
                width={120}
                height={120}
                style={{ objectFit: 'contain' }}
                className="w-auto h-auto"
              />
            </div>
          )}
          <h2 className="text-xl font-semibold mb-3">Omschrijving</h2>
          <p className="text-gray-700">{company.omschrijving}</p>
        </div>

        <div className="info-box">
          <div className="info-item">
            <span className="info-label">Type facilitaire organisatie</span>
            <span className="info-value">{company.type}</span>
          </div>
          
          <div className="info-item">
            <span className="info-label">Branche</span>
            <span className="info-value">{company.branche || 'Alles'}</span>
          </div>
          
          <div className="info-item">
            <span className="info-label">Locatie</span>
            <span className="info-value">{company.locatie}</span>
          </div>

          {company.website && (
            <a
              href={company.website}
              target="_blank"
              rel="noopener noreferrer"
              className="website-button"
            >
              Naar website
            </a>
          )}
        </div>

        <button
          onClick={handleClose}
          className="close-button"
          aria-label="Sluiten"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CompanyPopup;