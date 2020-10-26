import React from 'react';
import { WeatherContext } from '../WeatherContext';
import style from './styles/MainContent.module.css';

export default function MainContent({ dataHistorical }) {
  const { dataOneCall } = React.useContext(WeatherContext);

  return (
    <main className={style.mainContent}>
      <section className={style.mainSection}>AAAAAAAAAA</section>
    </main>
  );
}
