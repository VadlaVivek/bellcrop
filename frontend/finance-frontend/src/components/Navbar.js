import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { token, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div>
        <Link to="/">Dashboard</Link>
        <Link to="/explorer">Explorer</Link>
      </div>

      {token && <button onClick={logout}>Logout</button>}
    </div>
  );
}

export default Navbar;
