import { Link } from "react-router-dom";
import "../css/navbar.css";

function NavBar() {
  return (
    <>
      <nav>
        <ul id="navbar-style">
          <li className="navbar-item">
            <Link to="/">To Do List</Link>
          </li>
          <li className="navbar-item">
            <Link to="/TaskList">Task List</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
