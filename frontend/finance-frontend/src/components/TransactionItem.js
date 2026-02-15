function TransactionItem({ item, onEdit, onDelete }) {
  return (
    <div className="card">
      <strong>{item.title}</strong>
      <p>₹{item.amount}</p>
      <p>{item.category} | {new Date(item.date).toLocaleDateString()}</p>

      <button onClick={() => onEdit(item)}>Edit</button>
      <button className="danger" onClick={() => onDelete(item._id)}>Delete</button>
    </div>
  );
}

export default TransactionItem;
