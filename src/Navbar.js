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
    if (pathname === "/") {
      setDisplay({
        seeAbout: true,
        seeHome: false,
        seeLeaderBoards: true,
      });
    } else if (pathname.includes("/leaderboards")) {
      setDisplay({
        seeAbout: true,
        seeHome: true,
        seeLeaderBoards: false,
      });
    } else if (pathname.includes("/about")) {
      setDisplay({
        seeAbout: false,
        seeHome: true,
        seeLeaderBoards: true,
      });
    }
  }, [pathname]);

  return (
    <nav className="navbar">
      <ul className="nav-options">
        {display.seeHome && (
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
        )}
        {display.seeLeaderBoards && (
          <li>
            <Link className="nav-link" to="/leaderboards">
              Leaderboards
            </Link>
          </li>
        )}
        {display.seeAbout && (
          <li>
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
