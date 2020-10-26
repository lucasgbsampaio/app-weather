import React from 'react';
import MainContent from '../Components/MainContent';
import { WeatherContext } from '../WeatherContext';

export default function PreviousDays() {
  return (
    <>
      <MainContent dataHistorical={true} />
    </>
  );
}
