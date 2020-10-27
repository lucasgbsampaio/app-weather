import React from 'react';

import { WeatherContext } from '../WeatherContext';
import dateFormat from '../helpers/dateFormat';
import capitalizeFirstLetter from '../helpers/capitalizeFirstLetter';
import sliceTemp from '../helpers/sliceTemp';

import barometer from '../Assets/icons/wi-barometer.svg';
import cloudy from '../Assets/icons/wi-cloudy.svg';
import direction from '../Assets/icons/wi-direction-up.svg';
import humidity from '../Assets/icons/wi-humidity.svg';
import wind from '../Assets/icons/wi-strong-wind.svg';
import sunrise from '../Assets/icons/wi-sunrise.svg';
import sunset from '../Assets/icons/wi-sunset.svg';
import thermometer from '../Assets/icons/wi-thermometer.svg';

import style from './styles/Current.module.css';

export default function Current() {
  const { dataCurrent } = React.useContext(WeatherContext);

  if (dataCurrent) {
    return (
      <main className={style.mainCurrent}>
        <section className={style.sectionMain}>
          <div className={style.container}>
            <h2>Clima em {dataCurrent.name}</h2>

            <span className={style.datetime}>
              às {dateFormat(dataCurrent.dt).formattedTime}
            </span>

            <div className={style.mainContent}>
              <span className={style.temp}>
                {sliceTemp(dataCurrent.main.temp)}°C
              </span>
              <img
                src={`http://openweathermap.org/img/wn/${dataCurrent.weather[0].icon}@4x.png`}
                alt={dataCurrent.weather[0].description}
              />
            </div>

            <span className={style.description}>
              {capitalizeFirstLetter(dataCurrent.weather[0].description)}
            </span>
          </div>
        </section>

        <section className={style.sectionDetails}>
          <div className={style.detailsContainer}>
            <h2>{sliceTemp(dataCurrent.main.feels_like)}°C</h2>

            <div className={style.info}>
              <span style={{ fontWeight: '500' }}>Sensação térmica</span>
              <div className={style.sunRiseSet}>
                <img src={sunrise} alt="sunrise" />
                <span>{dateFormat(dataCurrent.sys.sunrise).formattedTime}</span>
                <div style={{ width: '10px' }}></div>
                <img src={sunset} alt="sunset" />
                <span>{dateFormat(dataCurrent.sys.sunset).formattedTime}</span>
              </div>
            </div>

            <div className={style.main}>
              <div className={style.firstColumm}>
                <div>
                  <img src={thermometer} alt="thermometer" />
                  <p>Max. / Mín.</p>
                  <span>
                    {dataCurrent.main.temp_max}°C / {dataCurrent.main.temp_min}
                    °C
                  </span>
                </div>

                <div>
                  <img src={barometer} alt="barometer" />
                  <p>Pressão</p>
                  <span>{dataCurrent.main.pressure} hPa</span>
                </div>

                <div>
                  <img src={humidity} alt="humidity" />
                  <p>Umidade</p>
                  <span>{dataCurrent.main.humidity}%</span>
                </div>
              </div>

              <div className={style.secondColumm}>
                <div>
                  <img src={wind} alt="wind" />
                  <p>Vento</p>
                  <span>{dataCurrent.wind.speed} m/s</span>
                </div>

                <div>
                  <img src={cloudy} alt="cloudy" />
                  <p>Nuvens</p>
                  <span>{dataCurrent.clouds.all}%</span>
                </div>

                <div>
                  <img src={direction} alt="direction" />
                  <p>Visibilidade</p>
                  <span>{dataCurrent.visibility} m</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
  return null;
}
