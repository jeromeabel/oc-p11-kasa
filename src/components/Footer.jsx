import '../styles/Footer.css'

import logoSVG from '../assets/logo-white.svg'

export default function Footer() {

    return (
        <footer className="footer">
                <img className="footer__logo" src={logoSVG} alt="Kasa logo"/>
                <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}