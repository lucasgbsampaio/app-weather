import React from 'react';

import { WeatherContext } from '../../WeatherContext';
import Content from './Content';

import style from '../styles/MainContent.module.css';

export default function MainContent({ title, type, show }) {
  const { dataOneCall, dataCurrent, dataHistorical } = React.useContext(
    WeatherContext
  );

  const shouldDisplayHours = dataOneCall && type === 'hourly';
  const shouldDisplayWeek = dataOneCall && type === 'daily';
  const shouldDisplayPreviousDays = dataHistorical && type === 'previous';

  return (
    <main className={style.mainContent}>
      <section className={style.mainSection}>
        <h1 className={style.title}>
          <strong>Clima {title}</strong>
          <span style={{ fontSize: '1.2rem' }}>
            - {dataCurrent && dataCurrent.name}
          </span>
        </h1>

        <div className={style.wrapper}>
          {shouldDisplayHours &&
            dataOneCall['hourly'].map((data) => {
              return <Content key={data.dt} data={data} />;
            })}

          {shouldDisplayWeek &&
            dataOneCall['daily'].map((data) => {
              return <Content key={data.dt} customizeData={data} />;
            })}

          {shouldDisplayPreviousDays &&
            dataHistorical['hourly'].map((data) => {
              return <Content key={data.dt} data={data} />;
            })}
        </div>
      </section>
    </main>
  );
}
