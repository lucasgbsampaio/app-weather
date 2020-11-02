import React from 'react';

import { WEATHER_GET, ONECALL_GET, HISTORICAL_GET } from './Api/api';

export const WeatherContext = React.createContext();

export default function WeatherStorage({ children }) {
  const [dataCurrent, setDataCurrent] = React.useState(null);
  const [dataOneCall, setDataOneCall] = React.useState(null);
  const [dataHistorical, setDataHistorical] = React.useState(null);

  const [coord, setCoord] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const getCurrent = React.useCallback(async (dataNow) => {
    try {
      setLoading(true);

      const { url, options } = WEATHER_GET(dataNow);
      const response = await fetch(url, options);
      const json = await response.json();

      setDataCurrent(json);
      setCoord(json.coord);
    } finally {
      setLoading(false);
    }
  }, []);

  const getOneCall = React.useCallback(async (lat, lon) => {
    try {
      setLoading(true);

      const { url, options } = ONECALL_GET(lat, lon);
      const response = await fetch(url, options);
      const json = await response.json();

      setDataOneCall(json);
    } finally {
      setLoading(false);
    }
  }, []);

  const getHistorical = React.useCallback(async (lat, lon) => {
    try {
      setLoading(true);

      const { url, options } = HISTORICAL_GET(lat, lon);
      const response = await fetch(url, options);
      const json = await response.json();

      setDataHistorical(json);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <WeatherContext.Provider
      value={{
        dataCurrent,
        dataOneCall,
        dataHistorical,
        coord,
        getCurrent,
        getOneCall,
        getHistorical,
        loading,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}
