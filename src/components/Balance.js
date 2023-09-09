import React from 'react';

const Balance = ({ transactions }) => {
  const totalBalance = transactions.reduce(
    (total, transaction) => total + transaction.amount,
    0
  );

  return (
    <div className="balance">
      <h2>Balance</h2>
      <p className={`balance-amount ${totalBalance >= 0 ? 'positive' : 'negative'}`}>
        Total: ${totalBalance.toFixed(2)}
      </p>
    </div>
  );
};

export default Balance;
