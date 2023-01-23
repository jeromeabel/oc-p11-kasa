import { useState } from 'react';
import styles from './Caroussel.module.scss';
import { ReactComponent as Arrow } from 'assets/arrow.svg';

export default function Caroussel({ title, pictures }) {
  // transition ? slide ?
  const [index, setIndex] = useState(0);

  function nextImage() {
    if (index === pictures.length - 1) setIndex(0);
    else setIndex(index + 1);
  }

  function prevImage() {
    if (index === 0) setIndex(pictures.length - 1);
    else setIndex(index - 1);
  }

  return (
    <section className={styles.caroussel}>
      <div className={styles.caroussel__img}>
        <img src={pictures[index]} alt={title} />
      </div>

      {pictures.length > 1 && (
        <div className={styles.caroussel__controls}>
          <button onClick={prevImage}>
            <Arrow />
          </button>
          <button onClick={nextImage}>
            <Arrow />
          </button>
        </div>
      )}
    </section>
  );
}
