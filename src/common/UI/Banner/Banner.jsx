import styles from './Banner.module.scss';

export default function Banner({ image, children }) {
  return (
    <div className={styles.banner}>
      <img
        className={styles.banner__img}
        src={image}
        alt="Paysages"
        aria-hidden="true"
      />
      {children && <h1 className={styles.banner__h1}>{children}</h1>}
    </div>
  );
}
