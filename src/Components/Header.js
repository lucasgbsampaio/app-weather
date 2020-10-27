import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { WeatherContext } from '../WeatherContext';

import logo from '../Assets/logo.png';
import style from './styles/Header.module.css';

export default function Header() {
  const [city, setCity] = React.useState('');
  const [show, setShow] = React.useState(false);

  const { getCurrent, getOneCall, coord } = React.useContext(WeatherContext);

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    getCurrent(city);
    window.localStorage.setItem('city', `${city}`);

    navigate('/');
  }

  React.useEffect(() => {
    const storedData = window.localStorage.getItem('city');
    if (!storedData) getCurrent('brasília') && getOneCall(-15.7801, -47.9292);

    // Causando infinite loop por causa do coord que vem do WeatherContext
    // getCurrent(storedData) && coord && getOneCall(coord.lat,coord.lon);
  }, [getCurrent, getOneCall]);
  // [getCurrent, getOneCall, coord]);

  return (
    <header>
      <div className={style.infobg}>
        <div className={style.info}>
          <div className={style.logan}>
            <img
              src={logo}
              style={{
                width: '45px',
                height: '40px',
                background: '#f4ffff',
              }}
              alt="Weather."
            />

            <span className={style.logo}>Weather.</span>
          </div>

          <form onSubmit={handleSubmit}>
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

      <div className={show ? style.menubg + ' ' + style.menuOn : style.menubg}>
        <div onClick={() => setShow(!show)} className={style.menuToggle}>
          <div className={style.one}></div>
          <div className={style.two}></div>
          <div className={style.three}></div>
        </div>

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
