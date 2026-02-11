import { useState, useEffect, useCallback } from 'react';
import { motion } from 'motion/react';
import { personalInfo } from '../../data/portfolio';
import ParticleNetwork from './ParticleNetwork';
import styles from './Hero.module.css';

const spring = { type: 'spring', stiffness: 80, damping: 20 };

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.6 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { ...spring } },
};

const roles = [
  'Software Developer',
  'Frontend Developer',
  'React Native Developer',
  'React Engineer',
  'Mobile Developer',
  'Web Developer',
];

const TYPE_SPEED = 80;
const DELETE_SPEED = 50;
const PAUSE_AFTER_TYPE = 2000;
const PAUSE_AFTER_DELETE = 400;
const INITIAL_DELAY = 500;

function useTypewriter(words) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState(words[0]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), INITIAL_DELAY);
    return () => clearTimeout(timeout);
  }, []);

  const tick = useCallback(() => {
    const currentWord = words[wordIndex];

    if (!isDeleting) {
      setText(currentWord.slice(0, text.length + 1));
    } else {
      setText(currentWord.slice(0, text.length - 1));
    }
  }, [words, wordIndex, text, isDeleting]);

  useEffect(() => {
    if (!started) return;

    const currentWord = words[wordIndex];
    let timeout;

    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPE);
    } else if (isDeleting && text === '') {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }, PAUSE_AFTER_DELETE);
    } else {
      timeout = setTimeout(tick, isDeleting ? DELETE_SPEED : TYPE_SPEED);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, tick, started]);

  return text;
}

export default function Hero() {
  const typedRole = useTypewriter(roles);

  return (
    <section className={styles.hero} id="hero">
      {/* Background */}
      <ParticleNetwork />
      <div className={`${styles.orb} ${styles.orbA}`} />
      <div className={`${styles.orb} ${styles.orbB}`} />
      <div className={`${styles.orb} ${styles.orbC}`} />

      <div className={styles.content}>
        {/* Greeting */}
        <motion.p
          className={styles.greeting}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0 }}
        >
          Hi, my name is
        </motion.p>

        {/* Name: slide from left + slight scale */}
        <motion.h1
          className={styles.name}
          initial={{ opacity: 0, x: -60, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ ...spring, delay: 0.1 }}
        >
          {personalInfo.name}
        </motion.h1>

        {/* Title: typewriter cycling through roles */}
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          {typedRole}
          <span className={styles.cursor}>|</span>
        </motion.h2>

        {/* Accent line: width 0 → 60px */}
        <motion.div
          className={styles.accentLine}
          initial={{ width: 0 }}
          animate={{ width: 60 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.7 }}
        />

        {/* Staggered elements: tagline, CTAs */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <motion.p className={styles.tagline} variants={staggerItem}>
            {personalInfo.tagline}
          </motion.p>
          <motion.div className={styles.ctas} variants={staggerItem}>
            <a href="#projects" className={styles.primaryBtn}>
              Try My Projects
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </a>
            <a href="#contact" className={styles.secondaryBtn}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
