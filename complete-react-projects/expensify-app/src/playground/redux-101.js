import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({ setBy = 101 } = {}) => ({
  type: 'SET',
  setBy
});

const resetCount = ({ resetBy = 0 } = {}) => ({
  type: 'RESET',
  resetBy
});

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
    return {
      count: state.count + action.incrementBy
    };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'SET':
      return {
        count: action.setBy
      }
    case 'RESET':
      return {
        count: action.resetBy
      }
    default:
      return state;
  }
});

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

// store.dispatch({
//   type: 'RESET'
// });

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount());

// store.dispatch({
//   type: 'SET',
//   count: 101
// });
