import { useState } from 'react';
import styles from './Caroussel.module.scss';
import { ReactComponent as Arrow } from 'assets/arrow.svg';

export default function Caroussel({ title, pictures }) {
  const [current, setCurrent] = useState(0);
  const length = pictures.length;

  const nextImage = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevImage = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(pictures) || pictures.length <= 0) {
    return null;
  }

  return (
    <section className={styles.caroussel}>
      {length > 1 && (
        <div className={styles.caroussel__controls}>
          <button onClick={prevImage}>
            <Arrow />
          </button>
          <button onClick={nextImage}>
            <Arrow />
          </button>
        </div>
      )}

      {pictures.map((picture, index) => {
        return (
          <div
            className={`${styles['caroussel__image']}  ${
              index === current ? styles['caroussel__image--active'] : ''
            } `}
            key={index}
          >
            {index === current && (
              <img src={picture} alt={`${title} : ${index}`} />
            )}
          </div>
        );
      })}
    </section>
  );
}
