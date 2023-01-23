import { Link } from 'react-router-dom';

import styles from './LocationCard.module.scss';

export default function LocationCard({ id, title, cover }) {
  return (
    <Link to={`/location/${id}`}>
      <div className={styles.card}>
        <img className={styles.card__img} src={cover} alt={title} />
        <h2 className={styles.card__title}>{title}</h2>
      </div>
    </Link>
  );
}
