import React from 'react';
import style from './styles/Header.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { WeatherContext } from '../WeatherContext';

export default function Header() {
  const [city, setCity] = React.useState('brasília');
  const { getCurrent } = React.useContext(WeatherContext);
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    getCurrent(city);
    navigate(`${city}/`);
  }

  function handleChange({ target }) {
    setCity(target.value);
  }

  return (
    <header className={style.header}>
      <nav className={style.mainNav}>
        <span>The Weather App</span>
        <form onSubmit={handleSubmit}>
          <input
            id="inputValue"
            type="text"
            name="cidade"
            onChange={handleChange}
            placeholder="Buscar cidade"
            aria-label="Buscar cidade"
          />
        </form>
      </nav>
      <nav className={style.secondaryNav}>
        <Link to={`/${city}`}>Agora</Link>
        <Link to={`hora/${city}`}>A cada hora</Link>
        <Link to={`7dias/${city}`}>7 dias</Link>
        <Link to={`diasanteriores/${city}`}>Dias anteriores</Link>
        <Link to={`mapas/${city}`}>Mapas</Link>
      </nav>
    </header>
  );
}
