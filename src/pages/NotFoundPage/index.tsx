import React, { ReactElement } from 'react';
import { motion } from 'framer-motion';
import { Wave, WaveSpacer } from '../../compontents/Wave';
import styles from './NotFound.module.sass';

export default function NotFoundPage(): ReactElement {
  return (
    <>
      <Wave />
      <motion.div className={styles.container}>
        <h1>Hoppla, wonach suchen Sie hier?</h1>
        <h3>Leider konnte ich nicht finden, wonach Sie gesucht haben. </h3>
        <h3>
          Um zur Startseite zurückzukehren, drücken Sie <a href={'/'}>Hier</a>
        </h3>
      </motion.div>
      <WaveSpacer />
    </>
  );
}
