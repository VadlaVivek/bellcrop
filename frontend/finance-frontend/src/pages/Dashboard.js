import { useEffect, useState } from "react";
import API from "../api/axiosConfig";

function Dashboard() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await API.get("/transactions");
    setTransactions(res.data);
  };

  const total = transactions.reduce((sum, t) => sum + t.amount, 0);

  const categoryTotals = {};
  transactions.forEach((t) => {
    categoryTotals[t.category] =
      (categoryTotals[t.category] || 0) + t.amount;
  });

  return (
    <div className="card">
      <h2>Total Expenses: ₹{total}</h2>

      <h3>Category Breakdown</h3>
      {Object.entries(categoryTotals).map(([cat, amt]) => (
        <p key={cat}>{cat}: ₹{amt}</p>
      ))}

      <h3>Recent Transactions</h3>
      {transactions.slice(0, 5).map((t) => (
        <div key={t._id}>{t.title} - ₹{t.amount}</div>
      ))}
    </div>
  );
}

export default Dashboard;
