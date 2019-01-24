import { createStore, combineReducers } from 'redux';

// Expenses Reducers

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

//  Filters Reducers

const filtersReducerDefaultState = {};

const filtersReducer = ( state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
  }
}

// Store creation

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

console.log(store.getState());

const demoState = {
  expenses: [{
    id: 'poijasdfhwer',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};
