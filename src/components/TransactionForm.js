import React, { Component } from 'react';

class TransactionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      amount: '',
      date: '', // Add a date field to capture the transaction date
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { description, amount, date } = this.state;

    if (!description || !amount || !date) {
      alert('Please fill in all fields.');
      return;
    }

    // Create a new transaction object with the current date
    const newTransaction = {
      id: Date.now(),
      description,
      amount: parseFloat(amount),
      date: new Date(date), // Convert the date string to a Date object
    };

    // Pass the new transaction to the parent component for adding
    this.props.onAddTransaction(newTransaction);

    // Clear the form fields
    this.setState({
      description: '',
      amount: '',
      date: '',
    });
  };

  render() {
    const { description, amount, date } = this.state;

    return (
      <div className="transaction-form">
        <h2>Add Transaction</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              name="description"
              id="description"
              placeholder="Description"
              value={description}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              name="amount"
              id="amount"
              placeholder="Amount"
              value={amount}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              name="date"
              id="date"
              placeholder="Date"
              value={date}
              onChange={this.handleInputChange}
            />
          </div>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default TransactionForm;
