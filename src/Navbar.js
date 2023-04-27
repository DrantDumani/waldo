import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const { pathname } = useLocation();
  const [display, setDisplay] = useState({
    seeHome: true,
    seeLeaderBoards: true,
    seeAbout: true,
  });

  //could use a for in loop while checking the keys instead. Refactor later?
  useEffect(() => {
    if (pathname.includes("home")) {
      setDisplay((state) => {
        return { seeAbout: true, seeHome: false, seeLeaderBoards: true };
      });
    } else if (pathname.includes("leaderboards")) {
      setDisplay((state) => {
        return { seeAbout: true, seeHome: true, seeLeaderBoards: false };
      });
    } else if (pathname.includes("about")) {
      setDisplay((state) => {
        return { seeAbout: false, seeHome: true, seeLeaderBoards: true };
      });
    }
  }, [pathname]);

  return (
    <nav className="navbar">
      <ul className="nav-options">
        {display.seeHome && (
          <li>
            <Link className="nav-link" to="/home">
              Home
            </Link>
          </li>
        )}
        {display.seeLeaderBoards && (
          <li>
            <Link className="nav-link" to="/Waldo-without-Waldo/leaderboards">
              Leaderboards
            </Link>
          </li>
        )}
        {display.seeAbout && (
          <li>
            <Link className="nav-link" to="/Waldo-without-Waldo/about">
              About
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
