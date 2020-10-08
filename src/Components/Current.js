import React from 'react';
import { WeatherContext } from '../WeatherContext';

export default function Current() {
  const { dataCurrent } = React.useContext(WeatherContext);

  return (
    <div style={{ padding: '500px' }}>
      {dataCurrent &&
        dataCurrent.map((data) => {
          return <span>{data.coord.lat}</span>;
        })}
    </div>
  );
}
