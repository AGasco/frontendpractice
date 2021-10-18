import React from 'react';
import Link from 'next/link';
import styles from './Summary.module.scss';

function SummaryComponent({ data = {} }) {
  const { label, subLabel, description, learnt, externalLink, link } = data;

  return (
    <div className={styles.container}>
      <img src="" alt="" />
      <div className={styles.content}>
        <div className={styles.summaryLabel}>Practice Details</div>
        <div className={styles.type}>
          Website:&nbsp;
          <span>{label}</span>
        </div>
        <div className={styles.type}>
          Route:&nbsp;
          <span>{subLabel}</span>
        </div>
        <div className={styles.type}>
          Description:&nbsp;
          <span>{description}</span>
        </div>
        <div className={styles.type}>
          Important points:
          <ul className={styles.learntList}>
            {learnt?.map((elem) => (
              <li>{elem}</li>
            ))}
          </ul>
        </div>
        <div className={styles.links}>
          <a href={externalLink} target="_blank">
            Original
          </a>
          <Link href={`${link}/demo`}>
            <a>My version</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SummaryComponent;
