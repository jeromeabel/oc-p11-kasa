import { useParams } from 'react-router-dom';
import { useFetchLocationById } from 'common/hooks/fetchData';
import { useSetTitle } from 'common/hooks/setTitle';

import Dropdown from 'common/UI/Dropdown/Dropdown';
import Loader from 'common/UI/Loader/Loader';

import Caroussel from './Caroussel/Caroussel';
import Tags from './Tags/Tags';
import Host from './Host/Host';
import Rating from './Rating/Rating';

import styles from './Location.module.scss';

export default function Location() {
  // Get Data
  const { locationId } = useParams();
  const { locationData, loading, error } = useFetchLocationById(
    '/logements.json',
    locationId
  );

  // Set Title
  let title = 'Logement';
  if (!loading && !error) title += ` - ${locationData.title}`;
  useSetTitle(title);

  return (
    <article className={styles.container}>
      {loading && <Loader />}
      {error && <div>ERROR : {error} </div>}
      {locationData && (
        <>
          <Caroussel
            title={locationData.title}
            pictures={locationData.pictures}
          />

          <div className={styles.header}>
            <div className={styles.header__side}>
              <h1>{locationData.title}</h1>
              <p>{locationData.location}</p>
              <Tags tags={locationData.tags} />
            </div>
            <div className={styles.header__side}>
              <Host
                name={locationData.host.name}
                picture={locationData.host.picture}
              />
              <Rating nb={locationData.rating} />
            </div>
          </div>

          <div className={styles.description}>
            <Dropdown title="description">{locationData.description}</Dropdown>
            <Dropdown title="equipements">
              <ul>
                {locationData.equipments.map((item, index) => (
                  <li key={`${item}-${index}`}>{item}</li>
                ))}
              </ul>
            </Dropdown>
          </div>
        </>
      )}
    </article>
  );
}
