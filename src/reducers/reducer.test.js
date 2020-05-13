import { drinkCoffee, eatSnack, takeNap, study } from '../actions/moodActions.js';
import reducer from './reducer.js';

describe('moods reducer', () => {
  it('handles the drinkCoffee action', () => {
    const state = { coffees: 0 };
    const action = drinkCoffee();
    const newState = reducer(state, action);
    expect(newState).toEqual({ coffees: 1 })
  })

  it('handles the eatSnack action', () => {
    const state = { snacks: 1 };
    const action = eatSnack();
    const newState = reducer(state, action);
    expect(newState).toEqual({ snacks: 2 })
  })

  it('handles the takeNap action', () => {
    const state = { naps: 100 };
    const action = takeNap();
    const newState = reducer(state, action);
    expect(newState).toEqual({ naps: 101 })
  })
})