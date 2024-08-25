import React, { ReactElement } from 'react';
import { motion } from 'framer-motion';
import NavBar from '../../compontents/NavBar';
import styles from './HomePage.module.sass';
import { Wave, WaveSpacer } from '../../compontents/Wave';

export default function HomePage(): ReactElement {
  return (
    <>
      <NavBar />
      <Wave />
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial='hidden'
        animate='visible'
        transition={{ duration: 1, delay: 0.75, ease: 'circInOut' }}
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}>
        <h2 className={styles.heading}>Hi, Ich bin Sebastian Schindler,</h2>
        <div className={styles.container}>
          <p>
            ich bin 21 Jahre alt und habe meine Ausbildung zum Technischen
            Assistenten für Informatik erfolgreich abgeschlossen. Programmieren
            ist meine Leidenschaft, und ich konnte bereits wertvolle Erfahrungen
            in der Entwicklung von Desktop-, Web- und Serveranwendungen sammeln.
            Zu meinen Stärken gehören Kenntnisse in der Programmierung mit Java,
            C#, C++, JavaScript und TypeScript.
          </p>
          <p>
            Im Bereich der Webentwicklung arbeite ich mit React und erweitere
            derzeit mein Wissen in Angular. Bei Serveranwendungen setze ich auf
            Java mit Spring Boot. Meine große Neugier treibt mich dazu, ständig
            neue Technologien und Frameworks zu entdecken und anzuwenden. Ich
            bin stets auf der Suche nach spannenden Herausforderungen und
            Projekten, um mein Wissen weiter auszubauen.
          </p>
          <p>
            Zudem bin ich eine zuverlässige und verantwortungsbewusste Person,
            die gerne in einem hilfsbereiten und motivierten Team arbeitet.
            Zusammenarbeit und gegenseitige Unterstützung stehen für mich im
            Vordergrund.
          </p>
        </div>
      </motion.div>
      <WaveSpacer />
    </>
  );
}
