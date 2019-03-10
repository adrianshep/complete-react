import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT'});
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const action = {
    type: 'ADD_EXPENSE',
    id: '4',
    description: 'writing',
    note: 'fountain pen',
    amount: 299,
    createdAt: moment(0).add(2, 'days').valueOf()
  };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[1], expenses[2], expenses[3]]);
});

test('should edit an expense', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    note: 'is a note appearing?'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[1], expenses[2]]);
});

test('should not edit an expense if an expense not found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
