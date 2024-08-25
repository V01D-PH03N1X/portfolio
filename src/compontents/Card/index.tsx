import React, { ReactElement } from 'react';
// import { motion } from 'framer-motion';
import styles from './Card.module.sass';

interface CardContent {
  title?: string;
  subtitle?: string;
  content?: string;
  url?: string;
}
interface LinkCardContent {
  title?: string;
  url?: string;
}

type Props = {
  children: string | ReactElement | ReactElement[];
};

export function CardHolder({ children }: Props): ReactElement {
  return (
    <>
      <div className={styles.cardHolder}>{children}</div>
    </>
  );
}

export function Card(props: CardContent): ReactElement {
  return (
    <>
      <div className={styles.card}>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
        <p>{props.content}</p>
        <p>
          <a className={styles.cardLink} href={props.url}>
            Mehr Information
          </a>
        </p>
      </div>
    </>
  );
}

export function LinkCardHolder({ children }: Props): ReactElement {
  return (
    <>
      <div className={styles.linkCardHolder}>{children}</div>
    </>
  );
}

export function LinkCard(props: LinkCardContent): ReactElement {
  return (
    <>
      <div className={styles.linkCard}>
        <p>
          <a className={styles.linkTitle} href={props.url}>
            {props.title}
          </a>
        </p>
      </div>
    </>
  );
}
