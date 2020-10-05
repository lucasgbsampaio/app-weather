import React from 'react';
import style from './styles/Header.module.css';
import { Link } from 'react-router-dom';

export default function Header() {
  const [city, setCity] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
  }
  function handleChange(event) {
    setCity(event.target.value);
  }

  return (
    <header className={style.header}>
      <nav className={style.mainNav}>
        <Link className={style.logo} to="/" aria-label="Weather App">
          <span>The Weather App</span>
        </Link>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="buscar"
            value={city}
            onChange={handleChange}
            placeholder="Buscar cidade"
            aria-label="Buscar cidade"
          />
        </form>
      </nav>
      <nav className={style.secondaryNav}>
        <Link to="/">Agora</Link>
        <Link to="hora/">A cada hora</Link>
        <Link to="7dias/">7 dias</Link>
        <Link to="diasanteriores/">Dias anteriores</Link>
        <Link to="mapas/">Mapas</Link>
      </nav>
    </header>
  );
}
