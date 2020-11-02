import React from 'react';

import { WeatherContext } from '../WeatherContext';
import { API_KEY } from '../Api/api';

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import '../leaflet-openweathermap';
import '../leaflet-openweathermap.css';

/* eslint-disable */

export default function Maps() {
  const { coord } = React.useContext(WeatherContext);
  const [leafletMap, setLeafletMap] = React.useState(null);
  const mapRef = React.useRef(null);

  React.useEffect(() => {
    let osm, clouds, wind, rain, map;

    osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors</a>',
    });

    clouds = L.OWM.clouds({
      showLegend: false,
      opacity: 0.5,
      appId: API_KEY,
    });

    rain = L.OWM.rainClassic({ appId: API_KEY });

    wind = L.OWM.wind({ appId: API_KEY });

    map = L.map('map', { layers: [osm] });

    const overlayMaps = {
      Clouds: clouds,
      Rain: rain,
      'Wind speed': wind,
    };

    const baseMaps = { 'OSM Standard': osm };
    const layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);
    setLeafletMap(map);
  }, []);

  React.useEffect(() => {
    if (coord && leafletMap) {
      setLeafletMap(leafletMap.setView([coord.lat, coord.lon], 10));
    }
  }, [coord, leafletMap]);

  React.useEffect(() => {
    const storedData = window.localStorage.getItem('city');

    if (!storedData && leafletMap) {
      setLeafletMap(leafletMap.setView([-15.7801, -47.9292], 10));
    }
  }, [leafletMap]);

  return (
    <div className="mapWrapper">
      <div ref={mapRef} id="map"></div>
    </div>
  );
}
