import { useState } from 'react';

import styles from './Dropdown.module.scss';

export default function Dropdown({ title, children, list }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdown__header}>
        <h2>{title}</h2>
        <button
          type="button"
          aria-expanded={isOpen}
          aria-label="Toggle dropdown"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className="fa-sharp fa-solid fa-chevron-down"></i>
        </button>
      </div>
      <div className={styles.dropdown__body} aria-expanded={!isOpen}>
        <p aria-expanded={isOpen}>{children}</p>
      </div>
    </div>
  );
}
