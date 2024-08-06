import React, { ReactElement, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import NavBar from '../../compontents/NavBar';
import styles from './HomePage.module.sass';

export default function HomePage(): ReactElement {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    console.log(isInView);
  }, [isInView]);

  return (
    <>
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial='hidden'
        animate='visible'
        transition={{ duration: 1, delay: 1.25, ease: 'circInOut' }}>
        <div className='wave'></div>
        <div className='wave'></div>
        <div className='wave'></div>
        <div className='wave'></div>
        <div className='wave'></div>
      </motion.div>
      <NavBar />
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial='hidden'
        animate='visible'
        transition={{ duration: 1, delay: 1.25, ease: 'circInOut' }}>
        <h2 className={styles.heading}>Hi, Ich bin Sebastian Schindler,</h2>
        <div className={styles.container}>
          <p>
            Als angehender Fullstack-Entwickler aus Chemnitz, geboren in Hof
            (Saale), bin ich ein 21-jähriger IT-Enthusiast mit einem soliden
            Ausbildungshintergrund. Im Jahr 2022 habe ich erfolgreich meine
            Ausbildung zum technischen Assistenten in Informatik abgeschlossen.
            Im Anschluss daran begann ich eine verkürzte Ausbildung zum
            Fachinformatiker für Anwendungsentwicklung. Leider wirde diese
            Ausbildung im März 2024 aus gesundheitlichen Gründen vorzeitig
            beendet. Seitdem nutze ich die Zeit, um mich privat weiterzubilden
            und an eigenen Projekten zu arbeiten, um meine Fähigkeiten und
            Kenntnisse kontinuierlich zu erweitern.
          </p>
        </div>
      </motion.div>
    </>
  );
}
