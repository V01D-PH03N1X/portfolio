import React, { ReactElement } from 'react';
import styles from './About.module.sass';
import { motion } from 'framer-motion';
import { Wave, WaveSpacer } from '../../compontents/Wave';
import NavBar from '../../compontents/NavBar';

export default function AboutPage(): ReactElement {
  return (
    <>
      <Wave />
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
            Ich bin Fachinformatiker in Anwendungsentwicklung!
          </h3>
        </motion.div>
        {/**
         * Add Content here
         * Add About Content here
         * Something like Age, Location, Education, Skills, Hobbies, etc.
         * Do it Eventually in a CardHolder and Cards
         */}
      </div>
      <WaveSpacer />
    </>
  );
}
