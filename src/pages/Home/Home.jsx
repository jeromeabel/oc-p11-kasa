import { useFetchData } from '../../hook/fetchData';
import { useSetTitle } from '../../hook/setTitle';

import Banner from '../../components/Banner/Banner';
import LocationCard from './LocationCard/LocationCard';

import imgBanner from '../../assets/banner-home.jpg';
import './Home.scss'

export default function Home() {

  useSetTitle("Accueil");
  
  const { data, loading, error } = useFetchData('/logements.json');

  return (
    <section className="home">
      <Banner image={imgBanner}>Chez vous, partout et ailleurs</Banner>

      <section className="container home__grid">

        { loading && <div>LOADING ... </div> }
        { error && <div>ERROR : {error} </div> }
        { data && 
          <div className="grid">
          { data.map((location) => ( 
            <LocationCard key={location.id} data={location} /> 
          ) )}
         </div>
        }

      </section>
    </section>
  )
}