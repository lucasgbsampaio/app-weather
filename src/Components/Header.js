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
    <header className={style.header}>
      <nav className={style.mainNav}>
        <span className={style.logo}>The Weather App</span>
        <form onSubmit={handleSubmit}>
          <input
            id="inputValue"
            type="text"
            name="cidade"
            onChange={({ target }) => {
              setCity(target.value);
            }}
            placeholder="Buscar cidade"
            aria-label="Buscar cidade"
          />
        </form>
      </nav>
      <nav className={style.secondaryNav}>
        <Link to={city ? `/${city}` : `/brasília`}>Agora</Link>
        <Link to={city ? `hora/${city}` : `hora/brasília`}>A cada hora</Link>
        <Link to={city ? `7dias/${city}` : `7dias/brasília`}>7 dias</Link>
        <Link to={city ? `diasanteriores/${city}` : `diasanteriores/brasília`}>
          Dias anteriores
        </Link>
        <Link to={city ? `mapas/${city}` : `diasanteriores/brasília`}>
          Mapas
        </Link>
      </nav>
    </header>
  );
}
