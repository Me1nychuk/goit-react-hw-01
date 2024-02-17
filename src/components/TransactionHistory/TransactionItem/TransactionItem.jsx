
const TransactionItem = ({id,amount,currency,type}) => {
    return (
        <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </tr>
    );
}
export default TransactionItem;