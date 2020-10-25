import React from 'react';
import { WeatherContext } from '../WeatherContext';
// import dateFormat from '../helpers/dateFormat';

import style from './styles/Hours.module.css';

export default function Hours() {
  const { dataOneCall } = React.useContext(WeatherContext);

  if (dataOneCall) {
    console.log(dataOneCall);
  }

  return <div className={style.mainCurrent}></div>;
}
