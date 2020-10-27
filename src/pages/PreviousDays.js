import React from 'react';
import MainContent from '../Components/MainContent/MainContent';

import { WeatherContext } from '../WeatherContext';

export default function PreviousDays() {
  const { getHistorical } = React.useContext(WeatherContext);

  React.useEffect(() => {}, [getHistorical]);

  return (
    <>
      <MainContent title="dos dias anteriores" type="hourly" />
    </>
  );
}
