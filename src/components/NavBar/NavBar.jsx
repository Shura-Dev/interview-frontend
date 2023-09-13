import { Link } from "react-router-dom";
import style from "./NavBar.module.css"
const NavBar = () => {
  return (
    <div className={style.navbar}>
      <div className="navbar-left">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <h2>TODO Tasks</h2>
        </Link>
      </div>
      <div className="navbar-right">
      <Link to="/create-task" style={{ textDecoration: 'none' }}>
        <button className={style.createButton}>Crear Tarea</button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
