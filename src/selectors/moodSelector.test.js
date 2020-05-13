import { getFace } from './moodSelector.js';

describe('mood selector', () => {
  it('gets a hyper face', () => {
    const state = {
      coffees: 4,
      snacks: 5,
      naps: 2,
      studies: 4
    }
    const face = getFace(state);
    expect(face).toEqual('🙀')
  })

  it('gets an angry face', () => {
    const state = {
      coffees: 0,
      snacks: 0,
      naps: 0,
      studies: 100
    }
    const face = getFace(state);
    expect(face).toEqual('🤬')
  })
})