import React from 'react';
import styles from './Sentences.module.css';
import { useSelector } from 'react-redux';

const Sentences = () => {
  const sentences = useSelector((state) => state.sentences);
  return (
    <div className={styles.sentences}>
      <div>
        <p>Sentences:</p>
      </div>
      {sentences.map((s, key) => (
        <p key={key}>{s}</p>
      ))}
    </div>
  );
};

export default Sentences;
