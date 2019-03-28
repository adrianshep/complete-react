import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.editExpense(expense);
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <ExpenseForm
          expense={props.expense}
          onSubmit={(expense) => {
            props.dispatch(editExpense(props.expense.id, expense));
            props.history.push('/');
          }}
        />
        <button onClick={() => {
          props.dispatch(removeExpense({ id: props.expense.id }));
          props.history.push('/');
        }}>Remove</button>
      </div>
    );
  }
}

const mapStateToProps = (dispatch) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(EditExpensePage);
