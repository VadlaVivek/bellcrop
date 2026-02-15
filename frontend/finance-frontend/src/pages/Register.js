import { useState } from "react";
import API from "../api/axiosConfig";

function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/auth/register", form);
    alert("Registered! Now login.");
    window.location.href = "/login";
  };

  return (
  <div className="container">
    <form onSubmit={handleSubmit} className="card">
      <h2>Register</h2>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} />
      <button>Register</button>
    </form>
  </div>
);

}

export default Register;
