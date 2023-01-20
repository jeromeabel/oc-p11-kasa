import './Footer.scss'

import logoSVG from '../../assets/logo-white.svg'

export default function Footer() {

    return (
        <footer className="footer">
                <img className="footer__logo" src={logoSVG} alt="Kasa logo" />
                <p>© 2023 Kasa. Tous droits réservés.</p>
        </footer>
    )
}