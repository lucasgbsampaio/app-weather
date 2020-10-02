export const API_URL = 'http://api.openweathermap.org/data/2.5';

export const API_KEY = 'bf28a3653954efd294c82eb3769ef252';

export function WEATHER_GET(city) {
  return {
    url: `${API_URL}/weather?q=${city}&appid=${API_KEY}`,
    options: {
      method: 'GET',
    },
  };
}
