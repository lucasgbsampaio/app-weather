import React from 'react';

import dateFormat from '../../helpers/dateFormat';
import capitalizeFirstLetter from '../../helpers/capitalizeFirstLetter';
import sliceTemp from '../../helpers/sliceTemp';
import showIcon from '../../helpers/showIcon';

import wind from '../../Assets/icons/wi-strong-wind.svg';
import cloudy from '../../Assets/icons/wi-cloudy.svg';
import barometer from '../../Assets/icons/wi-barometer.svg';
import alien from '../../Assets/icons/wi-alien.svg';
import winddeg from '../../Assets/icons/wi-wind-deg.svg';
import thermometerinternal from '../../Assets/icons/wi-thermometer-internal.svg';
import humidty from '../../Assets/icons/wi-humidity.svg';
import raindrop from '../../Assets/icons/wi-raindrop.svg';
import thermometer from '../../Assets/icons/wi-thermometer.svg';
import widirectionup from '../../Assets/icons/wi-direction-up.svg';
import arrow from '../../Assets/icons/arrow.svg';

import style from '../styles/Content.module.css';

export default function Content({ data, customizeData }) {
  const [show, setShow] = React.useState(false);

  if (data) {
    return (
      <div className={style.container}>
        <div className={style.headerContent}>
          <div className={style.content} onClick={() => setShow(!show)}>
            <h2 className={style.date}>
              <span>{dateFormat(data.dt).formattedTime}</span>
              <span className={style.sub}>
                {dateFormat(data.dt).formattedDate}
              </span>
            </h2>

            <div className={style.icon}>
              <i className={showIcon(data.weather[0])}></i>
            </div>

            <div className={style.temp}>{sliceTemp(data.temp)}°C</div>

            <div className={style.desc}>
              <span className={style.description}>
                {capitalizeFirstLetter(data.weather[0].description)}
              </span>
            </div>

            <div className={style.clouds}>
              <img src={cloudy} alt="cloudy" />
              {data.clouds}%
            </div>

            <div className={style.wind}>
              <img src={wind} alt="wind" />
              {data.wind_speed} m/s
            </div>

            <img
              className={show ? `${style.arrowUp}` : `${style.arrowDown}`}
              src={arrow}
              alt="direction"
            />
          </div>
        </div>

        {show && (
          <div className={style.detailsContent}>
            <div className={style.details}>
              <div className={style.panelLeft}>
                <p>
                  <img src={barometer} alt="barometer" />
                  Pressão
                  <span className={style.value}>{data.pressure} hPa</span>
                </p>

                <p>
                  <img src={thermometer} alt="thermometer" />
                  Sensação térmica
                  <span className={style.value}>
                    {sliceTemp(data.feels_like)}°C
                  </span>
                </p>

                <p>
                  <img src={humidty} alt="humidity" />
                  Umidade
                  <span className={style.value}>{data.humidity}%</span>
                </p>

                <p className={style.detailsWind}>
                  <img src={wind} alt="wind" />
                  Velocidade do vento
                  <span className={style.value}>{data.wind_speed} m/s</span>
                </p>
              </div>

              <div className={style.panelRight}>
                <p>
                  <img src={thermometerinternal} alt="thermometerinternal" />
                  Temperatura atmosférica
                  <span className={style.value}>
                    {sliceTemp(data.dew_point)}°C
                  </span>
                </p>

                <p>
                  <img src={widirectionup} alt="visibility" />
                  Visibilidade
                  <span className={style.value}>{data.visibility} m</span>
                </p>

                <p>
                  <img src={winddeg} alt="winddeg" />
                  Direção do vento
                  <span className={style.value}>{data.wind_deg}°</span>
                </p>

                <p className={style.detailsClouds}>
                  <img src={cloudy} alt="cloudy" />
                  Nuvens
                  <span className={style.value}>{data.clouds}%</span>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={style.container}>
      <div className={style.headerContent}>
        <div className={style.content} onClick={() => setShow(!show)}>
          <h2 className={style.date}>
            <span>{dateFormat(customizeData.dt).formattedTime}</span>
            <span className={style.sub}>
              {dateFormat(customizeData.dt).formattedDate}
            </span>
          </h2>

          <div className={style.icon}>
            <i className={showIcon(customizeData.weather[0])}></i>
          </div>

          <div className={style.temp}>
            {sliceTemp(customizeData.temp.day)}°C
          </div>

          <div className={style.desc}>
            <span className={style.description}>
              {capitalizeFirstLetter(customizeData.weather[0].description)}
            </span>
          </div>

          <div className={style.clouds}>
            <img src={cloudy} alt="cloudy" />
            {customizeData.clouds}%
          </div>

          <div className={style.wind}>
            <img src={wind} alt="wind" />
            {customizeData.wind_speed} m/s
          </div>

          <img
            className={show ? `${style.arrowUp}` : `${style.arrowDown}`}
            src={arrow}
            alt="direction"
          />
        </div>
      </div>
      {show && (
        <div className={style.detailsContent}>
          <div className={style.details}>
            <div className={style.panelLeft}>
              <p>
                <img src={barometer} alt="barometer" />
                Pressão
                <span className={style.value}>
                  {customizeData.pressure} hPa
                </span>
              </p>

              <p>
                <img src={thermometer} alt="thermometer" />
                Sensação térmica
                <span className={style.value}>
                  {sliceTemp(customizeData.feels_like.day)}°C
                </span>
              </p>

              <p>
                <img src={humidty} alt="humidity" />
                Umidade
                <span className={style.value}>{customizeData.humidity}%</span>
              </p>

              <p>
                <img src={alien} alt="uvi" />
                Index UV
                <span className={style.value}>{customizeData.uvi}</span>
              </p>

              <p className={style.detailsWind}>
                <img src={wind} alt="wind" />
                Velocidade do vento
                <span className={style.value}>
                  {customizeData.wind_speed} m/s
                </span>
              </p>
            </div>

            <div className={style.panelRight}>
              <p>
                <img src={thermometerinternal} alt="thermometerinternal" />
                Temperatura atmosférica
                <span className={style.value}>
                  {sliceTemp(customizeData.dew_point)}°C
                </span>
              </p>

              <p>
                <img src={winddeg} alt="winddeg" />
                Direção do vento
                <span className={style.value}>{customizeData.wind_deg}°</span>
              </p>

              <p>
                <img src={raindrop} alt="precipitation" />
                Precipitação
                <span className={style.value}>{customizeData.pop}%</span>
              </p>

              <p className={style.detailsClouds}>
                <img src={cloudy} alt="cloudy" />
                Nuvens
                <span className={style.value}>{customizeData.clouds}%</span>
              </p>
            </div>
          </div>
        </div>
      )}{' '}
    </div>
  );
}
