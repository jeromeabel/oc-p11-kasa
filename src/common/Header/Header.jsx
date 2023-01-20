import { NavLink, Link } from "react-router-dom"

import './Header.scss'

import logoSVG from '../../assets/logo.svg'

export default function Header() {

    return (
        <header className="container header">
            <div >
                <Link to="/">
                    <img className="header__logo" src={logoSVG} alt="Kasa logo"/>
                </Link>
            </div>
            <nav className="nav">
                <ul>
                    <li className="nav__link"><NavLink to="/" end>Accueil</NavLink></li>
                    <li className="nav__link"><NavLink to="about">À propos</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}