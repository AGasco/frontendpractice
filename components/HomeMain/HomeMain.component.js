import React from 'react';
import Link from 'next/link';
import { challengesData } from './HomeMain.config';
import styles from './HomeMain.module.scss';

function HomeMainComponent() {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {challengesData.map((c) => (
          <li className={styles.element}>
            <Link href={c.link}>
              <a>
                <div>{`# ${c.id} - ${c.label}`}</div>
                <div>{c.subLabel}</div>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomeMainComponent;
