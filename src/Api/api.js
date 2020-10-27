export const API_URL = 'http://api.openweathermap.org/data/2.5';

export const UNITS_LANG = 'units=metric&lang=pt_br';

export const API_KEY = 'bf28a3653954efd294c82eb3769ef252';

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

export function HISTORICAL_GET(lat, lon, dt) {
  return {
    url: `${API_URL}/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${dt}&appid=${API_KEY}&${UNITS_LANG}`,
    options: {
      method: 'GET',
    },
  };
}
