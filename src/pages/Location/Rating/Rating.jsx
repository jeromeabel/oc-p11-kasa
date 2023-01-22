import styles from './Rating.module.scss';

import Star from './Star/Star';

export default function Rating({ nb }) {
  const stars = Array(5).fill(0);

  return (
    <div className={styles.rating}>
      {stars.map((_, index) =>
        nb > index ? (
          <Star className={styles['rating--fill']} />
        ) : (
          <Star className={styles['rating--empty']} />
        )
      )}
    </div>
  );
}
