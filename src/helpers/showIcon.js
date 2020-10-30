export default function showIcon(weather) {
  if (weather.icon.slice(2, 3) === 'd') {
    return `wi wi-owm-day-${weather.id}`;
  } else {
    return `wi wi-owm-night-${weather.id}`;
  }
}
