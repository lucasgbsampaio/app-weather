import React from 'react';

import { WeatherContext } from '../../WeatherContext';
import Content from './Content';

import style from '../styles/MainContent.module.css';

export default function MainContent({ title, type }) {
  const { dataOneCall, dataCurrent, dataHistorical } = React.useContext(
    WeatherContext
  );

  const shouldDisplayHours = dataOneCall && type === 'hourly';
  const shouldDisplayWeek = dataOneCall && type === 'daily';
  const shouldDisplayPreviousDays = dataHistorical && type === 'hourly';

  return (
    <main className={style.mainContent}>
      <section className={style.mainSection}>
        <h1>
          <strong>Clima {title}</strong>
          <span> - {dataCurrent && dataCurrent.name}</span>
        </h1>

        <div className={style.wrapper}>
          {shouldDisplayHours &&
            dataOneCall[type].map((data) => {
              return <Content key={data.dt} data={data} />;
            })}

          {shouldDisplayWeek &&
            dataOneCall[type].map((data) => {
              return <Content key={data.dt} customizeData={data} />;
            })}

          {shouldDisplayPreviousDays &&
            dataHistorical[type].map((data) => {
              return <Content key={data.dt} data={data} />;
            })}
        </div>
      </section>
    </main>
  );
}
