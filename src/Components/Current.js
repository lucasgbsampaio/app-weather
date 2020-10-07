import React from 'react';
import { WeatherContext } from '../WeatherContext';

export default function Current() {
  const { dataCurrent } = React.useContext(WeatherContext);

  return (
    <div>
      {dataCurrent && dataCurrent.map((data) => console.log(data.coord))}
    </div>
  );
}
