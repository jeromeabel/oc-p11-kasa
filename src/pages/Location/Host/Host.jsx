import styles from './Host.module.scss';

export default function Host({ name, picture }) {
  return (
    <div className={styles.host}>
      <p>{name}</p>
      <img src={picture} alt={name} />
    </div>
  );
}
