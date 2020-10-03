import React from 'react';
import { WeatherContext } from '../WeatherContext';

export default function Current() {
  const { dataCurrent } = React.useContext(WeatherContext);
  console.log(dataCurrent);
  return <div>Current</div>;
}
