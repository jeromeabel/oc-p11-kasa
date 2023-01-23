import styles from './Rating.module.scss';

// import Star from './Star/Star';

import { ReactComponent as Star } from 'assets/star.svg';

export default function Rating({ nb }) {
  const stars = Array(5).fill(0);

  return (
    <div className={styles.rating}>
      {stars.map((_, index) =>
        nb > index ? (
          <Star key={`star-${index}`} className={styles['rating--fill']} />
        ) : (
          <Star key={`star-${index}`} className={styles['rating--empty']} />
        )
      )}
    </div>
  );
}
