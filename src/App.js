import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Current from './Components/Current';
import Hours from './Components/Hours';
import Week from './Components/Week';
import Maps from './Components/Maps';
import PreviousDays from './Components/PreviousDays';
import WeatherStorage from './WeatherContext';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <WeatherStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Current />} />
            <Route path="hora/" element={<Hours />} />
            <Route path="7dias/" element={<Week />} />
            <Route path="diasanteriores/" element={<PreviousDays />} />
            <Route path="mapas/" element={<Maps />} />
          </Routes>
          <Footer />
        </WeatherStorage>
      </BrowserRouter>
    </div>
  );
}
