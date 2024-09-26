import React, { ReactElement } from 'react';
import styles from './About.module.sass';
import { motion } from 'framer-motion';
import NavBar from '../../compontents/NavBar';
import { LinkCard, LinkCardHolder } from '../../compontents/Card';
import { Wave, WaveSpacer } from '../../compontents/Wave';

export default function LinkPage(): ReactElement {
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial={'hidden'}
          animate={'visible'}
          transition={{ duration: 1, delay: 0.75, easings: 'inOut' }}>
          <h2 className={styles.title}>Hey, ich bin Sebastian Schindler!</h2>
          <h3 className={styles.subtitle}>
            Hier sind einige Social Media Links, etc. von mir zu finden.
          </h3>
          <LinkCardHolder>
            <LinkCard
              url='https://github.com/V01D-PH03N1X'
              title='My Github Profile'
            />
            <LinkCard
              url='https://instagram.com/darkbastiplays'
              title='My Instagram Profile'
            />
          </LinkCardHolder>
        </motion.div>
      </div>
    </>
  );
}
