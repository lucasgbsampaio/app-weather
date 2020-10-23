import React from 'react';
import style from './styles/Header.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { WeatherContext } from '../WeatherContext';
import logo from '../Assets/logo.png';

export default function Header() {
  const [city, setCity] = React.useState('');
  const { getCurrent } = React.useContext(WeatherContext);
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    getCurrent(city);
    navigate(`/${city}`);
  }

  React.useEffect(() => {
    if (city === '') {
      getCurrent('brasília');
    }
  }, [city, getCurrent]);

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

      <div className={style.menubg}>
        <nav className={style.menu}>
          <NavLink
            to={city ? `/${city}` : `/brasília`}
            className={style.navBarLink}
            activeClassName={style.navBarLinkActive}
          >
            AGORA
          </NavLink>
          <NavLink
            to={city ? `/hora/${city}` : `/hora/brasília`}
            className={style.navBarLink}
            activeClassName={style.navBarLinkActive}
          >
            A CADA HORA
          </NavLink>
          <NavLink
            to={city ? `/7dias/${city}` : `/7dias/brasília`}
            className={style.navBarLink}
            activeClassName={style.navBarLinkActive}
          >
            7 DIAS
          </NavLink>
          <NavLink
            to={city ? `/diasanteriores/${city}` : `/diasanteriores/brasília`}
            className={style.navBarLink}
            activeClassName={style.navBarLinkActive}
          >
            DIAS ANTERIORES
          </NavLink>
          <NavLink
            to={city ? `/mapas/${city}` : `/mapas/brasília`}
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
