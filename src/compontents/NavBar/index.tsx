import React, { ReactElement } from 'react';
import { motion } from 'framer-motion';

import styles from './NavBar.module.sass';

export default function NavBar(): ReactElement {
  const entries = new Map<string, string>([
    ['Home', '/'],
    // ['About', '/about'],
    ['Projects', '/projects'],
    ['Impressum', '/impressum'],
  ]);

  function createLinks(): ReactElement[] {
    const links: ReactElement[] = [];
    entries.forEach((value, key) => {
      links.push(
        <motion.a
          className={styles.navlink}
          key={key}
          href={value}
          whileHover={{
            scale: 1.3,
            color: '#83c6d3',
            backgroundColor: '#222222',
            borderRadius: '14px',
          }}
          whileTap={{ scale: 0.9, color: '#83c6d3' }}>
          {key}
        </motion.a>,
      );
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
