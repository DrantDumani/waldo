import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-options">
        <li>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/Waldo-without-Waldo/Leaderboard">
            Leaderboard
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
