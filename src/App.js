import React, { useState } from 'react';
import TransactionRow from './TransactionRow';
import TransactionForm from './TransactionForm';
import './App.css';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const handleDeleteTransaction = (transactionToDelete) => {
    setTransactions(transactions.filter(transaction => transaction !== transactionToDelete));
  };

  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <header className="app-header">The Royal Bank of Flatiron</header>
      <TransactionForm onAddTransaction={handleAddTransaction} />
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((transaction, index) => (
            <TransactionRow 
              key={index} 
              transaction={transaction} 
              onDelete={handleDeleteTransaction} 
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
