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

  it('gets a nauseous face', () => {
    const state = {
      coffees: 4,
      snacks: 0,
      naps: 0,
      studies: 5
    }
    const face = getFace(state);
    expect(face).toEqual('🤮')
  })

  it('gets a nauseous face', () => {
    const state = {
      coffees: 0,
      snacks: 2,
      naps: 0,
      studies: 3
    }
    const face = getFace(state);
    expect(face).toEqual('😴')
  })

  it('gets a educateds face', () => {
    const state = {
      coffees: 2,
      snacks: 2,
      naps: 2,
      studies: 5
    }
    const face = getFace(state);
    expect(face).toEqual('🤯')
  })

  it('gets a hungry face', () => {
    const state = {
      coffees: 2,
      snacks: 0,
      naps: 2,
      studies: 2
    }
    const face = getFace(state);
    expect(face).toEqual('😡')
  })
})