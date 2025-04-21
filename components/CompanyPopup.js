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
    <div className="detail-popup active">
      {/* Linker kolom met logo en omschrijving */}
      <div>
        {company.logo && (
          <div className="company-logo">
            <Image
              src={company.logo}
              alt={company.naam}
              width={260}
              height={100}
              style={{ objectFit: 'contain' }}
              onError={(e) => {
                e.currentTarget.src = '/placeholder-logo.svg';
              }}
              unoptimized
            />
          </div>
        )}
        <h2>{company.naam}</h2>
        <p>{company.omschrijving}</p>
      </div>

      {/* Rechter kolom met info box */}
      <div className="info-box">
        <div className="info-item">
          <span className="info-label">Type facilitaire organisatie</span>
          <span className="info-value">{company.type}</span>
        </div>
        
        <div className="info-item">
          <span className="info-label">Locatie</span>
          <span className="info-value">{company.locatie}</span>
        </div>
        
        <div className="info-item">
          <span className="info-label">Type branche</span>
          <span className="info-value">{company.branche || 'Alles'}</span>
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

      {/* Sluit knop */}
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
  );
};

export default CompanyPopup;