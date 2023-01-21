import styles from './Tags.module.scss';

export default function Tags({ tags }) {
  return (
    <div className={styles.tags}>
      {tags.map((item, index) => (
        <span className={styles.tag} key={`${item}-${index}`}>
          {item}
        </span>
      ))}
    </div>
  );
}
