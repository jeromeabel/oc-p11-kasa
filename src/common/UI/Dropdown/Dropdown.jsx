import { useState } from 'react';

import { ReactComponent as Arrow } from 'assets/arrow.svg';

import styles from './Dropdown.module.scss';

export default function Dropdown({ title, children, list }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.dropdown}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <button
          type="button"
          aria-expanded={isOpen}
          aria-label="Toggle dropdown"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Arrow />
        </button>
      </div>
      <div className={` ${styles.body} ${!isOpen ? styles['body--open'] : ''}`}>
        {children}
      </div>
    </div>
  );
}
