import "../navbar/navStyles.css";
import clothes from "../../assets/shirt.svg";
import home from "../../assets/home.svg";
import clipboard from "../../assets/clipboard.svg";
import learning from "../../assets/learning.svg";
import bookmark from "../../assets/bookmark.svg";
import chartPie from "../../assets/chart-pie.svg";
import inbox from "../../assets/inbox.svg";

import { Outlet, Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="nav-container">
        <nav className="navbar">
          <ul className="ul-list">
            <li className="li-list">
              <Link to="/">
                <img src={home} alt="" />
              </Link>
            </li>
            <li className="li-list">
              <Link to="/clothes">
                <img src={clothes} alt="" />
              </Link>
            </li>
            <li className="li-list">
              <Link to="/tareas">
                <img src={clipboard} alt="" />
              </Link>
            </li>
            <li className="li-list">
              <Link to="/learning">
                <img src={learning} alt="" />
              </Link>
            </li>
            <li className="li-list">
              <Link to="/books">
                <img src={bookmark} alt="" />
              </Link>
            </li>
            <li className="li-list">
              <Link to="/chart">
                <img src={chartPie} alt="" />
              </Link>
            </li>
            <li className="li-list">
              <Link to="/inbox">
                <img src={inbox} alt="inbox" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <Outlet/>
    </>
  );
};

export default Nav;