import React from 'react';
import styles from './Controls.css';
import { useSelector, useDispatch } from 'react-redux';
import { drinkCoffee, eatSnack, takeNap, study } from '../../actions/moodActions.js';

const Controls = () => {
  const { coffees, snacks, naps, studies } = useSelector(state => state);
  const dispatch = useDispatch();
  
  const handleSelection = action => {
    dispatch(action);
  }

  return (
    <section className={styles.Controls}>
      <button onClick={() => handleSelection(drinkCoffee())}>coffee - {coffees}</button>
      <button onClick={() => handleSelection(eatSnack())}>snacks - {snacks}</button>
      <button onClick={() => handleSelection(takeNap())}>naps - {naps}</button>
      <button onClick={() => handleSelection(study())}>studies - {studies}</button>
    </section>
  );
};

export default Controls;
