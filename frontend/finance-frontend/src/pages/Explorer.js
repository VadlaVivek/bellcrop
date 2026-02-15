import { useEffect, useState } from "react";
import API from "../api/axiosConfig";
import TransactionItem from "../components/TransactionItem";
import TransactionForm from "../components/TransactionForm";
import SearchFilters from "../components/SearchFilters";

function Explorer() {
  const [transactions, setTransactions] = useState([]);
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    const res = await API.get("/transactions");
    setTransactions(res.data);
  };

  const addTransaction = async (data) => {
    if (selected) {
      await API.put(`/transactions/${selected._id}`, data);
      setSelected(null);
    } else {
      await API.post("/transactions", data);
    }
    fetchTransactions();
  };

  const deleteTransaction = async (id) => {
    await API.delete(`/transactions/${id}`);
    fetchTransactions();
  };

  const filtered = transactions.filter((t) => {
    const matchSearch = t.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" || t.category === category;

    return matchSearch && matchCategory;
  });

  return (
    <div className="container">
      <h2>Transaction Explorer</h2>

      <TransactionForm onSubmit={addTransaction} selected={selected} />

      <SearchFilters setSearch={setSearch} setCategory={setCategory} />

      {filtered.length === 0 && <p>No transactions found</p>}

      {filtered.map((t) => (
        <TransactionItem
          key={t._id}
          item={t}
          onEdit={setSelected}
          onDelete={deleteTransaction}
        />
      ))}
    </div>
  );
}

export default Explorer;
