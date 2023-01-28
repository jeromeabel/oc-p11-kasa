import { useFetchData } from 'common/hooks/fetchData';
import { useSetTitle } from 'common/hooks/setTitle';

import Banner from 'common/UI/Banner/Banner';
import Loader from 'common/UI/Loader/Loader';
import LocationCard from './LocationCard/LocationCard';

import imgBanner from 'assets/banner-home.jpg';

import styles from './Home.module.scss';

export default function Home() {
  useSetTitle('Accueil');

  const dataURL = '/oc-p11-kasa/logements.json';
  const { data: locations, loading, error } = useFetchData(dataURL);

  return (
    <section className={styles.home}>
      <Banner image={imgBanner} className={styles.home__banner}>
        Chez vous, partout et ailleurs
      </Banner>

      <section className={styles.home__container}>
        {loading && <Loader />}
        {error && <div>ERROR : {error} </div>}
        {!loading && locations && (
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
