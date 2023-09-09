import React from 'react';

const TransactionList = ({ transactions, onDeleteTransaction, onEditTransaction }) => {
  return (
    <div className="transaction-list">
      <h2>Transactions</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            <div className="transaction-info">
              <p className="description">{transaction.description}</p>
              <p className="amount">${transaction.amount.toFixed(2)}</p>
            </div>
            <div className="transaction-actions">
              <button onClick={() => onDeleteTransaction(transaction.id)}>
                Delete
              </button>
              <button onClick={() => onEditTransaction(transaction)}>
                Edit
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
