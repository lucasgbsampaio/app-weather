import React from 'react';
import { WeatherContext } from '../WeatherContext';

export default function Current() {
  const {
    dataCurrent,
    dataOneCall,
    getCurrent,
    coord,
    getOneCall,
  } = React.useContext(WeatherContext);

  function handleClick(event) {
    if (event.type === 'click') {
      getCurrent('Brasília');
      getOneCall(coord.lat, coord.lon);
    }
  }
  console.log(dataCurrent);
  console.log(dataOneCall);

  return <div onClick={handleClick}>Clique</div>;
}
