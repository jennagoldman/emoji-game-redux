const initialState = {
  coffees: 0,
  snacks: 0,
  naps: 0,
  studies: 0
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'DRINK_COFFEE':
      this.setState(state => ({ coffees: state.coffees + 1 }));
      break;
    case 'EAT_SNACK':
      this.setState(state => ({ snacks: state.snacks + 1 }));
      break;
    case 'TAKE_NAP':
      this.setState(state => ({ naps: state.naps + 1 }));
      break;
    case 'STUDY':
      this.setState(state => ({ studies: state.studies + 1 }));
      break;
    default:
      console.log(`unhandled type: ${action.type}`);
  }
}