import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { WeatherContext } from '../WeatherContext';

import style from './styles/Header.module.css';

export default function Header() {
  const [city, setCity] = React.useState('');

  const { getCurrent, getOneCall, getHistorical, coord } = React.useContext(
    WeatherContext
  );

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    getCurrent(city);
    window.localStorage.setItem('city', `${city}`);

    navigate('/');
  }

  React.useEffect(() => {
    const storedData = window.localStorage.getItem('city');

    if (!storedData) {
      getCurrent('brasília') &&
        getOneCall(-15.7801, -47.9292) &&
        getHistorical(-15.7801, -47.9292);
    } else {
      getCurrent(storedData);
    }
  }, [getCurrent, getOneCall, getHistorical]);

  React.useEffect(() => {
    const storedData = window.localStorage.getItem('city');

    if (coord && storedData)
      getOneCall(coord.lat, coord.lon) && getHistorical(coord.lat, coord.lon);
  }, [getOneCall, coord, getHistorical]);

  return (
    <header>
      <div className={style.infobg}>
        <div className={style.info}>
          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <input
              id="inputValue"
              type="text"
              name="cidade"
              onChange={({ target }) => {
                setCity(target.value);
              }}
              placeholder="Buscar cidade..."
              aria-label="Buscar cidade"
            />
          </form>
        </div>
      </div>

      <div className={style.menubg}>
        <nav className={style.menu}>
          <NavLink
            to="/"
            className={style.navBarLink}
            activeClassName={style.navBarLinkActive}
            end
          >
            AGORA
          </NavLink>

          <NavLink
            to="/hora"
            className={style.navBarLink}
            activeClassName={style.navBarLinkActive}
          >
            A CADA HORA
          </NavLink>

          <NavLink
            to="/7dias"
            className={style.navBarLink}
            activeClassName={style.navBarLinkActive}
          >
            7 DIAS
          </NavLink>

          <NavLink
            to="/diasanteriores"
            className={style.navBarLink}
            activeClassName={style.navBarLinkActive}
          >
            DIAS ANTERIORES
          </NavLink>

          <NavLink
            to="/mapas"
            className={style.navBarLink}
            activeClassName={style.navBarLinkActive}
          >
            MAPAS
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
