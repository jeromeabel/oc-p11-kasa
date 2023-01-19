import AccomodationCard from './AccomodationCard';

import '../styles/AccomodationsGrid.css'
import jsonData from '../data/logements.json'

// export async function loader() {
//     const response = await fetch('logements.json'); // public folder 
//     const logements = await response.json();
//     return logements;
// }

export default function AccomodationsGrid() {
     //const logements = useLoaderData(); // ! import
    const accomodations = [...jsonData];

    return (
        <section className="container accomodations-grid">
          <div className="grid">
            { accomodations.map((accomodation) => ( 
              <AccomodationCard key={accomodation.id} data={accomodation} /> 
            ) )}
           </div>
        </section>
    )
}

