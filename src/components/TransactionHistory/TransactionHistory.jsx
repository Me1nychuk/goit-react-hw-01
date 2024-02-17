import './TransactionHistory.css'
import TransactionItem from './TransactionItem/TransactionItem';

const TransactionHistory = ({ transactions }) => {
  return (
        
    <table className='transaction-table'>
      <thead className='table-head'>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
    
        {transactions.map(({ id, type, amount, currency }) => (

          <TransactionItem key={id} id={id} type={type} amount={amount} currency={currency} />
        ))}
      </tbody>
    </table>

  );
};
export default TransactionHistory;