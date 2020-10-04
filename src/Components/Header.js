import React from 'react';
import style from './styles/Header.module.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className={style.header}>
      <nav>
        <Link to="/">Agora</Link>
        <Link to="hora/">A cada hora</Link>
        <Link to="7dias/">7 dias</Link>
        <Link to="diasanteriores/">Dias anteriores</Link>
        <Link to="mapas/">Mapas</Link>
      </nav>
    </header>
  );
}
