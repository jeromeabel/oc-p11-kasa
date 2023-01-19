import { Link } from 'react-router-dom'

import '../styles/AccomodationCard.css'

export default function AccomodationCard( { data }) {

    return (
        <Link to={`/accomodation/${data.id}`}>
            <div className="card">
                <img className="card__img" src={data.cover} alt={data.title} />
                <h2 className="card__title">{data.title}</h2>
            </div>
        </Link>
    )
}

// <Link to={`/accomodation/${accomodation.id}`} state={{ accomodation: accomodation }}>{accomodation.title}</Link>
