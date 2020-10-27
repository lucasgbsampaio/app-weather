import React from 'react';

import { WEATHER_GET, ONECALL_GET } from './Api/api';
import useFetch from './Hooks/useFetch';

export const WeatherContext = React.createContext();

export default function WeatherStorage({ children }) {
  const [dataCurrent, setDataCurrent] = React.useState(null);
  const [dataOneCall, setDataOneCall] = React.useState(null);
  const [dataHistorical, setDataHistorical] = React.useState(null);

  const [coord, setCoord] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const { request } = useFetch();

  const getCurrent = React.useCallback(
    async (dataNow) => {
      try {
        setError(null);
        setLoading(true);

        const { url, options } = WEATHER_GET(dataNow);
        const { json } = await request(url, options);

        setDataCurrent(json);
        setCoord(json.coord);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    },
    [request]
  );

  const getOneCall = React.useCallback(
    async (lat, lon) => {
      try {
        setError(null);
        setLoading(true);

        const { url, options } = ONECALL_GET(lat, lon);
        const { json } = await request(url, options);

        setDataOneCall(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    },
    [request]
  );

  const getHistorical = React.useCallback(
    async (lat, lon, dt) => {
      try {
        setError(null);
        setLoading(true);

        const { url, options } = getHistorical(lat, lon, dt);
        const { json } = await request(url, options);

        setDataHistorical(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    },
    [request]
  );

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
        error,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}
