import styles from './Rating.module.scss';

import Star from './Star/Star';

export default function Rating({ nb }) {
  const stars = Array(5).fill(0);

  const color = {
    red: '#FF6060',
    grey: '#E3E3E3',
  };

  return (
    <div className={styles.rating}>
      {stars.map((_, index) => (
        <Star color={nb > index ? color.red : color.grey} />
      ))}
    </div>
  );
}
