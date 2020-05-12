import { drinkCoffee, eatSnack, takeNap, study } from '../actions/moodActions.js';
import reducer from './reducer.js';

describe('moods reducer', () => {
  it('handles the drinkCoffee action', () => {
    const state = { coffees: 0 };
    const action = drinkCoffee();

    const newState = reducer(state, action);

    expect(newState).toEqual({ coffees: 1 })
  })
})