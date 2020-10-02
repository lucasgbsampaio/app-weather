import React from 'react';
import style from './styles/Header.module.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className={style.header}>
      <nav>
        <Link to="/">Hoje</Link>
        <Link to="1hora/">1 hora</Link>
        <Link to="2dias/">2 dias</Link>
        <Link to="7dias/">7 dias</Link>
        <Link to="alertas/">Alertas</Link>
        <Link to="diasanteriores/">Dias anteriores</Link>
      </nav>
    </header>
  );
}
