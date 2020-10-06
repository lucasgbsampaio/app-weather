import React from 'react';
import { WeatherContext } from '../WeatherContext';

export default function Current() {
  const { dataCurrent, getCurrent } = React.useContext(WeatherContext);

  React.useEffect(() => {
    function teste() {
      if (!dataCurrent) {
        getCurrent('brasília');
      } else {
        return null;
      }
    }
    teste();
  }, [dataCurrent, getCurrent]);

  console.log(dataCurrent);

  return <div style={{ padding: '700px' }}></div>;
}
