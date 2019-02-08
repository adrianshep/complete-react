import React from 'react';
import { connect } from 'react-redux';

const ExpenseListItem = (props) => (
  <div>
    {props.expenses.description}
    {props.expenses.amount}
    {props.expenses.createdAt}
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses
  };
};

export default connect(mapStateToProps)(ExpenseListItem);
