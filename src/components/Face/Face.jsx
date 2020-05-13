import React from 'react';
import styles from './Face.css';
import { useSelector } from 'react-redux';

const Face = () => {
  const face = useSelector(getFace);

  return (
    <p className={styles.Face}>{face}</p>
  );
};

export default Face;