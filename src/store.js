import {createStore} from 'redux';

const defaultState = {
  courses: {
    1: {
      title: 'Sexuality 101',
      description: 'Not sure where to start?  Learn the basics here!',
    },
    2: {
      title: 'How to Break Up',
      description: 'Breaking up is hard, learn how to survive it in one peace',
    },
    3: {
      title: 'What is consent?',
      description: 'And how does it play into a healthy relationship',
    },
  },
};

var reducer = function(state = defaultState, action) {
  switch (action.type) {
    default:
      return state;
  }
};

export default createStore(reducer);
