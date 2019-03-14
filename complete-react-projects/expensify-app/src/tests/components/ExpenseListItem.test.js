import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListItem } from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('should render ExpenseListItem with an expense', (expense) => {
  const wrapper = shallow(<ExpenseListItem key={expense.id} />);
  expect(wrapper).toMatchSnapshot();
});
