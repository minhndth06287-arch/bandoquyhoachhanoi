import React, { useState, useRef } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MapSection from './components/MapSection';
import SpatialStructureSection from './components/SpatialStructureSection';
import MilestonesSection from './components/MilestonesSection';
import RailTODSection from './components/RailTODSection';
import PopulationSection from './components/PopulationSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

export default function App() {
  const [isMetroView, setIsMetroView] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(null);

  const mapRef = useRef(null);

  const [layerState, setLayerState] = useState({
    qhc: true,
    qhpk: true,
    metro: true,
    metrop: true,
    gadk: true,
    opacityBoost: false
  });

  const handleFlyToLocation = (center, zoom) => {
    if (mapRef.current) {
      mapRef.current.flyTo({
        center,
        zoom,
        essential: true,
        duration: 1800
      });
    }
  };

  return (
    <div className="w-full bg-slate-50 text-slate-900 font-sans">
      <Header isMetroView={isMetroView} setIsMetroView={setIsMetroView} />

      <main>
        <HeroSection />

        <MapSection
          layerState={layerState}
          setLayerState={setLayerState}
          isMetroView={isMetroView}
          setIsMetroView={setIsMetroView}
          selectedFeature={selectedFeature}
          setSelectedFeature={setSelectedFeature}
          mapRef={mapRef}
          onFlyToLocation={handleFlyToLocation}
        />

        <SpatialStructureSection />
        <MilestonesSection />
        <RailTODSection />
        <PopulationSection />
        <FAQSection />
      </main>

      <Footer />
    </div>
  );
}
