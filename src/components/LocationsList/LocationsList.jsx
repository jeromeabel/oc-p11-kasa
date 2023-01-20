import { useEffect, useState } from 'react'

import LocationCard from '../LocationCard/LocationCard';

import './LocationsList.scss';

//import jsonData from '../../data/logements.json';

// export async function loader() {
//     const response = await fetch('logements.json'); // public folder 
//     const logements = await response.json();
//     return logements;
// }

/*
  async function fetchData() {
        const response = await fetch('logements.json');
        const logements = await response.json();
        return logements
      }

      fetchData();
      */

export default function LocationsList() {
    //const Locations = [...jsonData];
   
    const [ Locations, setLocations ] = useState(null);
    const [ isError, setIsError ] = useState(null); // 

    useEffect( () => {
      fetch('logements.json')
      .then((response) =>  response.json())
      .then((data) => setLocations(data))
      .catch((err) => setIsError(err.message) )
    }, [])

   // if (!Locations) console.log("loading")

    return (
      <section className="container Locations-grid">

        { isError && <div>ERROR : {isError} </div>}


      { !Locations ? 
         <div>LOADING ...</div>:
         <div className="grid">
         { Locations.map((Location) => ( 
           <LocationCard key={Location.id} data={Location} /> 
         ) )}
        </div>
      }
      </section>
    )
}

