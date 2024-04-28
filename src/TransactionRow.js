import React, { useState } from 'react';

const TransactionRow = ({ transaction, onDelete }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleDelete = () => onDelete(transaction);

  return (
    <tr onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <td>{transaction.date}</td>
      <td>{transaction.description}</td>
      <td>{transaction.amount}</td>
      <td>{transaction.category}</td>
      <td>
        <button 
          onClick={handleDelete} 
          className={`transaction-button ${isHovered ? 'button-visible' : 'button-hidden'}`}
          onFocus={() => setIsHovered(true)}
          onBlur={() => setIsHovered(false)}
          aria-label="Delete transaction"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TransactionRow;
