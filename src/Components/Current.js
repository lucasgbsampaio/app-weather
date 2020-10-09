import React from 'react';
import { WeatherContext } from '../WeatherContext';
import style from './styles/Current.module.css';

export default function Current() {
  const { dataCurrent } = React.useContext(WeatherContext);

  return (
    <main className={style.mainCurrent}>
      <section className={style.resume}></section>
      <section className={style.details}></section>
    </main>
  );
}
