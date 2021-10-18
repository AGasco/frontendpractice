import React from 'react';
import Link from 'next/link';
import { challengesData } from '../../../data/main';
import styles from './HomeMain.module.scss';

function HomeMainComponent() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.brand}>antoniofgasco</div>
        <div>Frontend Practice</div>
      </div>
      <ul className={styles.list}>
        {challengesData.map((c) => (
          <Link href={`${c.link}/summary`} key={`#${c.id}`}>
            <a className={styles.element}>
              <div>{`#${c.id} ${c.label}`}</div>
              <div>{c.subLabel}</div>
            </a>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default HomeMainComponent;
