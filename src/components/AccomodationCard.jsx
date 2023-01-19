import { Link } from 'react-router-dom'

import '../styles/AccomodationCard.css'

export default function AccomodationCard( { data }) {

    return (
        <div className="card">
            <Link to={`/accomodation/${data.id}`}>
           <img className="card__img" src={data.cover} alt={data.title} />
           <h2 className="card__title">{data.title}</h2>
           </Link>
        </div>
    )
}

// <Link to={`/accomodation/${accomodation.id}`} state={{ accomodation: accomodation }}>{accomodation.title}</Link>
