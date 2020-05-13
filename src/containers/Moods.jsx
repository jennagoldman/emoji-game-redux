import React from 'react';
import Controls from '../components/Controls/Controls.jsx';
import Face from '../components/Face/Face.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { drinkCoffee, eatSnack, takeNap, study } from '../actions/moodActions.js';

const Moods = () => {
  const { coffees, snacks, naps, studies } = useSelector(state => state);
  const dispatch = useDispatch();
  
  const handleSelection = action => {
    dispatch(action);
  }

  return (
      <>
        <Controls>
          <button onClick={() => handleSelection(drinkCoffee)}>coffee - {coffees}</button>
          <button onClick={() => handleSelection(eatSnack)}>snacks - {snacks}</button>
          <button onClick={() => handleSelection(takeNap)}>naps - {naps}</button>
          <button onClick={() => handleSelection(study)}>studies - {studies}</button>
        </Controls>
        <Face />
      </>
    );
  }

  export default Moods;
