import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Current from './Components/Current';
import OneHour from './Components/OneHour';
import TwoDays from './Components/TwoDays';
import Week from './Components/Week';
import Alerts from './Components/Alerts';
import PreviousDays from './Components/PreviousDays';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Current />} />
          <Route path="1hora/" element={<OneHour />} />
          <Route path="2dias/" element={<TwoDays />} />
          <Route path="7dias/" element={<Week />} />
          <Route path="alertas/" element={<Alerts />} />
          <Route path="diasanteriores/" element={<PreviousDays />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
