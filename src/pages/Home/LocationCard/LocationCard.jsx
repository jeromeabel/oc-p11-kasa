import { Link } from 'react-router-dom'

import './LocationCard.scss'

export default function LocationCard( { data }) {

    return (
        <Link to={`/location/${data.id}`}>
            <div className="card">
                <img className="card__img" src={data.cover} alt={data.title} />
                <h2 className="card__title">{data.title}</h2>
            </div>
        </Link>
    )
}
