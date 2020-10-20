import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Current from './Components/Current';
import Hours from './Components/Hours';
import Week from './Components/Week';
import Maps from './Components/Maps';
import PreviousDays from './Components/PreviousDays';
import WeatherStorage from './WeatherContext';
import './App.css';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <WeatherStorage>
          <Header />
          <Routes>
            <Navigate from="/" to="/brasília" />
            <Route path="/:city" element={<Current />} />
            <Route path="hora/:city/" element={<Hours />} />
            <Route path="7dias/:city/" element={<Week />} />
            <Route path="diasanteriores/:city/" element={<PreviousDays />} />
            <Route path="mapas/:city/" element={<Maps />} />
          </Routes>
          <Footer />
        </WeatherStorage>
      </BrowserRouter>
    </div>
  );
}
