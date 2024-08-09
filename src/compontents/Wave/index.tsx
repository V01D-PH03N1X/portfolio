import React from 'react';
import { motion } from 'framer-motion';
import styles from './Wave.module.sass';

export default function Wave() {
  return (
    <motion.div
    className={styles.sticky}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      initial='hidden'
      animate='visible'
      transition={{ duration: 1, delay: 1.25, ease: 'circInOut' }}>
      <div className={styles.wave}></div>
      <div className={styles.wave}></div>
      <div className={styles.wave}></div>
      <div className={styles.wave}></div>
      <div className={styles.wave}></div>
    </motion.div>
  );
}
