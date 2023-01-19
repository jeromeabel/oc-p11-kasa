import {  useParams } from "react-router-dom";
//useLocation, useLoaderData,
import jsonData from '../data/logements.json'

// export async function loader({ params }) {
//   const accomodations = [...jsonData];
//   return accomodations[params.id];
// }

export default function Accomodation() {

    const { accomodationId } = useParams();
    const accomodations = [...jsonData];
    const accomodation = accomodations.find( (item) => item.id === accomodationId )

    //<Link to={`/accomodation/${accomodation.id}`} state={{ accomodation: accomodation }}>{accomodation.title}</Link>
    //const location = useLocation() // data through <Link />
    //const { accomodation } = location.state

    return (
        <article>
        <h1>Logement</h1>
        { accomodation ? 
        
        <div><p>{accomodation.id} - {accomodation.title}</p>
        <img src={accomodation.pictures[0]} width="600px" alt="" />
        </div>
        : <div>ERREUR D'ID</div>}

        </article>
    )
}