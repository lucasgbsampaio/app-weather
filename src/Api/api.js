import dotenv from dotenv
dotenv.config()

import previousDay from '../helpers/previousDay';

export const API_URL = 'https://api.openweathermap.org/data/2.5';

export const UNITS_LANG = 'units=metric&lang=pt_br';

export const API_KEY = process.env.REACT_APP_API_KEY;

export const YESTERDAY = previousDay();

export function WEATHER_GET(city) {
  return {
    url: `${API_URL}/weather?q=${city}&appid=${API_KEY}&${UNITS_LANG}`,
    options: {
      method: 'GET',
    },
  };
}

export function ONECALL_GET(lat, lon) {
  return {
    url: `${API_URL}/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}&${UNITS_LANG}`,
    options: {
      method: 'GET',
    },
  };
}

export function HISTORICAL_GET(lat, lon) {
  return {
    url: `${API_URL}/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${YESTERDAY}&appid=${API_KEY}&${UNITS_LANG}`,
    options: {
      method: 'GET',
    },
  };
}
