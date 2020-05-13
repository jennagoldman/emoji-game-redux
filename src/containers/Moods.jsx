import React, { Component } from 'react';
import Controls from '../components/Controls/Controls.jsx';
import Face from '../components/Face/Face.jsx';

export default class Moods extends Component {

  render() {
    const { coffees, snacks, naps, studies } = this.state;
    const face = getFace(this.state);

    return (
      <>
        <Controls>
          <button onClick={() => this.handleSelection({ type: 'DRINK_COFFEE' })}>coffee - {coffees}</button>
          <button onClick={() => this.handleSelection({ type: 'EAT_SNACK' })}>snacks - {snacks}</button>
          <button onClick={() => this.handleSelection({ type: 'TAKE_NAP' })}>naps - {naps}</button>
          <button onClick={() => this.handleSelection({ type: 'STUDY' })}>studies - {studies}</button>
        </Controls>
        <Face emoji={face} />
      </>
    );
  }
}
