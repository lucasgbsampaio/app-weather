import React from 'react';
import style from './styles/Header.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { WeatherContext } from '../WeatherContext';

export default function Header() {
  const [city, setCity] = React.useState('');
  const { getCurrent } = React.useContext(WeatherContext);
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    getCurrent(city);
    navigate(`${city}/`);
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
          <span className={style.logo}>The Weather App</span>
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
          <Link to={city ? `/${city}` : `/brasília`}>AGORA</Link>
          <Link to={city ? `hora/${city}` : `hora/brasília`}>A CADA HORA</Link>
          <Link to={city ? `7dias/${city}` : `7dias/brasília`}>7 DIAS</Link>
          <Link
            to={city ? `diasanteriores/${city}` : `diasanteriores/brasília`}
          >
            DIAS ANTERIORES
          </Link>
          <Link to={city ? `mapas/${city}` : `diasanteriores/brasília`}>
            MAPAS
          </Link>
        </nav>
      </div>
    </header>
  );
}
