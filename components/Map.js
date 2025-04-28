import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, useMap, Tooltip, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Image from 'next/image';

const MapUpdater = ({ selectedCompany, onSelectCompany }) => {
  const map = useMap();
  const defaultCenter = [52.1326, 5.2913];
  const defaultZoom = 8;

  useEffect(() => {
    if (selectedCompany && selectedCompany.lat && selectedCompany.lng) {
      // Forceer altijd flyTo naar zoom 16, ook als je al op 16 zit
      map.flyTo([selectedCompany.lat, selectedCompany.lng],17, {
        animate: true,
        duration: 1.2,
        easeLinearity: 0.25,
      });
    } else {
      // Zoom uit naar overzicht van Nederland
      console.log("🗺️ Zoom uit naar overzicht");
      map.flyTo(defaultCenter, defaultZoom, {
        animate: true,
        duration: 1.2,
        easeLinearity: 0.25,
      });
    }
  }, [selectedCompany, map]);

  // Reset selectie wanneer er wordt uitgezoomd
  useEffect(() => {
    const handleZoomEnd = () => {
      const currentZoom = map.getZoom();
      if (currentZoom <= defaultZoom && selectedCompany) {
        onSelectCompany(null);
      }
    };

    map.on('zoomend', handleZoomEnd);
    return () => {
      map.off('zoomend', handleZoomEnd);
    };
  }, [map, selectedCompany, onSelectCompany]);

  return null;
};

const Map = ({ filters, facilities = [], selectedCompany, onSelectCompany }) => {
  const [mapZoom, setMapZoom] = useState(8);

  const getMarkerSize = (zoom, isSelected) => {
    let baseSize;
    if (zoom <= 7) {
      baseSize = [30, 25]; // Veel kleiner op lage zoom levels
    } else if (zoom <= 9) {
      baseSize = [45, 38]; // Middelgroot op medium zoom levels
    } else {
      baseSize = [60, 50]; // Kleiner dan voorheen op hoge zoom levels
    }

    // Maak de marker 70% groter als deze geselecteerd is
    if (isSelected) {
      return [baseSize[0] * 1.7, baseSize[1] * 1.7];
    }
    return baseSize;
  };

  useEffect(() => {
    // Verwijder de oude icon URL
    delete L.Icon.Default.prototype._getIconUrl;
    
    // Configureer de nieuwe icon URLs
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: '/leaflet/marker-icon-2x.png',
      iconUrl: '/leaflet/marker-icon.png',
      shadowUrl: '/leaflet/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41]
    });
  }, []);

  // Definieer de grenzen van Nederland met wat extra ruimte
  const bounds = [
    [50.75, 3.2], // Zuidwestelijke grens
    [53.7, 7.22], // Noordoostelijke grens
  ];

  const handleZoomEnd = (e) => {
    setMapZoom(e.target.getZoom());
  };

  const filteredFacilities = facilities.filter((facility) => {
    if (filters.type !== "Alles" && facility.type !== filters.type) return false;
    if (filters.branche !== "Alles" && facility.branche !== filters.branche) return false;
    return true;
  });

  const handleMarkerClick = (company) => {
    if (selectedCompany?.id === company.id) {
      onSelectCompany(null);
    } else {
      onSelectCompany(company);
    }
  };

  return (
    <MapContainer
      center={[52.1326, 5.2913]}
      zoom={8}
      minZoom={8}
      maxBounds={bounds}
      maxBoundsViscosity={1.0}
      className="h-full w-full z-0"
      onClick={() => onSelectCompany(null)}
      scrollWheelZoom={true}
      doubleClickZoom={true}
      dragging={true}
      zoomControl={true}
      zoomDelta={1}
      wheelDebounceTime={100}
      eventHandlers={{
        zoomend: handleZoomEnd
      }}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        maxZoom={19}
      />

      {filteredFacilities.map((company) => {
        const isSelected = selectedCompany?.id === company.id;
        const [width, height] = getMarkerSize(mapZoom, isSelected);
        const padding = 4; // padding uit CSS
        const totalHeight = height + 2 * padding;
        return (
          <Marker
            key={company.id}
            position={[company.lat || 52.3702, company.lng || 4.8952]}
            eventHandlers={{
              click: () => handleMarkerClick(company)
            }}
            icon={L.divIcon({
              className: 'custom-marker',
              iconSize: [width, totalHeight],
              iconAnchor: [width / 2, totalHeight],
              tooltipAnchor: [0, -totalHeight / 2]
            })}
          >
            <Tooltip 
              permanent={true}
              direction="top" 
              className={`marker-tooltip ${isSelected ? 'marker-tooltip-large' : ''}`}
              interactive={true}
            >
              {company.logo && (
                <div className="marker-logo-container" style={{ width: width + 'px', height: height + 'px' }}>
                  <Image
                    src={company.logo}
                    alt={company.naam}
                    width={width}
                    height={height}
                    className="marker-logo"
                    style={{ objectFit: 'contain' }}
                    onError={(e) => {
                      e.target.src = '/placeholder-logo.svg';
                    }}
                  />
                </div>
              )}
            </Tooltip>
          </Marker>
        );
      })}

      <MapUpdater selectedCompany={selectedCompany} onSelectCompany={onSelectCompany} />
    </MapContainer>
  );
};

export default Map;
