import { useFetchData } from 'common/hooks/fetchData';
import { useSetTitle } from 'common/hooks/setTitle';

import Banner from 'common/UI/Banner/Banner';
import Loader from 'common/UI/Loader/Loader';
import LocationCard from './LocationCard/LocationCard';

import imgBanner from 'assets/banner-home.jpg';

import styles from './Home.module.scss';

export default function Home() {
  useSetTitle('Accueil');

  const { data: locations, loading, error } = useFetchData('/logements.json');

  return (
    <section className={styles.home}>
      <Banner image={imgBanner}>Chez vous, partout et ailleurs</Banner>

      <section className={styles.home__container}>
        {loading && <Loader />}
        {error && <div>ERROR : {error} </div>}
        {locations && (
          <div className={styles.home__grid}>
            {locations.map((location) => (
              <LocationCard
                key={location.id}
                id={location.id}
                title={location.title}
                cover={location.cover}
              />
            ))}
          </div>
        )}
      </section>
    </section>
  );
}
