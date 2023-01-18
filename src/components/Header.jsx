import { Link } from "react-router-dom"

export default function Header() {

    return (
        <header className="header">
            <div>LOGO</div>
            <nav>
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/about">À Propos</Link></li>
                </ul>
            </nav>
        </header>
    )
}