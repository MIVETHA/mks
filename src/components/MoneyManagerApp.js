import React, { Component } from 'react';
import TransactionList from './TransactionList';
import TransactionForm from './TransactionForm';
import Balance from './Balance';

class MoneyManagerApp extends Component {
  constructor() {
    super();
    this.state = {
      transactions: JSON.parse(localStorage.getItem('transactions')) || [],
      editingTransaction: null,
    };
  }

  // Function to add a new transaction
  handleAddTransaction = (newTransaction) => {
    this.setState((prevState) => ({
      transactions: [...prevState.transactions, newTransaction],
    }));
  };

  // Function to delete a transaction by ID
  handleDeleteTransaction = (id) => {
    this.setState((prevState) => ({
      transactions: prevState.transactions.filter(
        (transaction) => transaction.id !== id
      ),
    }));
  };
  //FUNCTION TO UPDATE a trasaction
  handleEditTransaction = (transaction) => {
    this.setState({ editingTransaction: transaction });
  };
   // Function to update an edited transaction
   handleUpdateTransaction = (updatedTransaction) => {
    this.setState((prevState) => ({
      transactions: prevState.transactions.map((transaction) =>
        transaction.id === updatedTransaction.id ? updatedTransaction : transaction
      ),
      editingTransaction: null, // Clear the editing state
    }));
  };
  saveTransactionsToStorage = (transactions) => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  };

  render() {
    return (
      <div className="money-manager-app">
        <h1>Money Manager</h1>
        <TransactionForm 
        onAddTransaction={this.handleAddTransaction}
        onUpdateTransaction={this.handleUpdateTransaction}
        editingTransaction={this.state.editingTransaction}
      /> 
        <TransactionList
          transactions={this.state.transactions}
          onDeleteTransaction={this.handleDeleteTransaction}
          onEditTransaction={this.handleEditTransaction}
        />
         <Balance transactions={this.state.transactions} />
      </div>
    );
  }
}

export default MoneyManagerApp;
