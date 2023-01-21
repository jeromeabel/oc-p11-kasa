import { useParams } from 'react-router-dom';
import { useFetchLocationById } from 'common/hooks/fetchData';
import { useSetTitle } from 'common/hooks/setTitle';
import Caroussel from './Caroussel/Caroussel';
import Dropdown from 'common/UI/Dropdown/Dropdown';

import './Location.scss';

export default function Location() {
  // Get Data
  const { locationId } = useParams();
  const { location, loading, error } = useFetchLocationById(
    '/logements.json',
    locationId
  );

  // Set Title
  let title = 'Logement';
  if (!loading && !error) title += ` - ${location.title}`;
  useSetTitle(title);

  return (
    <article className="location">
      {loading && <div>LOADING ... </div>}
      {error && <div>ERROR : {error} </div>}
      {location && (
        <>
          <Caroussel title={location.title} pictures={location.pictures} />

          <div className="location__header">
            <div className="location__heading">
              <h1 className="location__title">{location.title}</h1>
              <p>{location.location}</p>
              <div className="location__tags">
                {location.tags.map((item, index) => (
                  <span className="location__tag" key={`${item}-${index}`}>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="location__host">
              <p>{location.host.name}</p>
              <img src={location.host.picture} alt={location.host.name} />
              <div className="location__ratings">{location.rating}</div>
            </div>
          </div>

          <div className="location__description">
            <Dropdown title="description">{location.description}</Dropdown>
            <Dropdown title="equipements">
              <ul>
                {location.equipments.map((item, index) => (
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
