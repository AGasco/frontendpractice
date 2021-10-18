import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Summary.module.scss';

function SummaryComponent({ data = {} }) {
  const { label, subLabel, description, learnt, externalLink, link } = data;
  const router = useRouter();

  return (
    <div className={styles.container}>
      <img src="https://images.unsplash.com/photo-1542744095-291d1f67b221?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="" />
      <div className={styles.content}>
        <button className={styles.exitBtn} onClick={() => router.back()}>
          X
        </button>
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
            {learnt?.map((elem, idx) => (
              <li key={idx}>{elem}</li>
            ))}
          </ul>
        </div>
        <div className={styles.links}>
          <a href={externalLink} target="_blank">
            Original
          </a>
          {link && (
            <Link href={`${link}/demo`}>
              <a>My version</a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default SummaryComponent;
