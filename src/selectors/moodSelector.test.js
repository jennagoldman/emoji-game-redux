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
})