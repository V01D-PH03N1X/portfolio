import React, { ReactElement } from 'react';
import { motion } from 'framer-motion';

import styles from './NavBar.module.sass';
import { useLocation } from 'react-router-dom';

export default function NavBar(): ReactElement {
  const entries = new Map<string, string>([
    ['Home', '/'],
    ['Socials', '/links'],
    ['Projects', '/projects'],
    ['Impressum', '/impressum'],
  ]);

  function createLinks(): ReactElement[] {
    const links: ReactElement[] = [];
    const location = useLocation().pathname;
    entries.forEach((value, key) => {
      if (location == value) {
        links.push(
          <motion.a
            className={styles.activeNavlink}
            key={key}
            href={value}
            whileHover={{
              scale: 1.3,
              color: '#83c6d3',
              textShadow: '0px 0px 6px #83c6d3',
            }}
            id='active'
            whileTap={{ scale: 0.9, color: '#83c6d3' }}>
            {key}
          </motion.a>,
        );
      } else {
        links.push(
          <motion.a
            className={styles.navlink}
            key={key}
            href={value}
            whileHover={{
              scale: 1.3,
              color: '#83c6d3',
              textShadow: '0px 0px 6px #83c6d3',
            }}
            whileTap={{ scale: 0.9, color: '#83c6d3' }}>
            {key}
          </motion.a>,
        );
      }
    });
    return links;
  }

  return (
    <>
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial='hidden'
        animate='visible'
        transition={{ duration: 1, delay: 0.75, easings: 'inOut' }}
        className={styles.navbar}>
        {createLinks()}
      </motion.div>
    </>
  );
}
