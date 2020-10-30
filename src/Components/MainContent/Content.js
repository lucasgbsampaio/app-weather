import React from 'react';
import style from '../styles/Content.module.css';
import dateFormat from '../../helpers/dateFormat';
import capitalizeFirstLetter from '../../helpers/capitalizeFirstLetter';
import sliceTemp from '../../helpers/sliceTemp';
import showIcon from '../../helpers/showIcon';
import widirection from '../../Assets/icons/wi-direction-down.svg';
import wind from '../../Assets/icons/wi-strong-wind.svg';
import cloudy from '../../Assets/icons/wi-cloudy.svg';

export default function Content({ data, customizeData }) {
  if (data) {
    return (
      <div className={style.container}>
        <div className={style.headerContent}>
          <div className={style.content}>
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

            <img src={widirection} alt="direction" />
          </div>
        </div>
        <div className={style.detailsContent}></div>
      </div>
    );
  }
  return (
    <div className={style.container}>
      <div className={style.headerContent}>
        <div className={style.content}>
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

          <img src={widirection} alt="direction" />
        </div>
      </div>
      <div className={style.detailsContent}></div>
    </div>
  );
}
