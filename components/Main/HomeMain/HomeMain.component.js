import React from 'react';
import Link from 'next/link';
import { challengesData } from '../../../data/main';
import styles from './HomeMain.module.scss';
import Navbar from '../Navbar/Navbar.component';

function HomeMainComponent() {
  return (
    <div className={styles.container}>
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
