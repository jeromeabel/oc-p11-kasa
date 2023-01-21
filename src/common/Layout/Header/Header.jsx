import { NavLink, Link } from 'react-router-dom';

import styles from './Header.module.scss';

import logoSVG from 'assets/logo.svg';

export default function Header() {
  return (
    <header className={`container ${styles.header}`}>
      <div>
        <Link to="/">
          <img className={styles.header__logo} src={logoSVG} alt="Kasa logo" />
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li className={styles.nav__link}>
            <NavLink to="/" end>
              Accueil
            </NavLink>
          </li>
          <li className={styles.nav__link}>
            <NavLink to="about">À propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
