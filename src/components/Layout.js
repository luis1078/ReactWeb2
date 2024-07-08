import { Outlet, Link } from "react-router-dom";
import Logo from "./Logo";
import styles from '../stylesheets/NavBar.module.css';

const Layout = () => {
  return (
    <div>
      <nav className={styles.navbar}>
        <Logo />
        <ul className={styles.navbarLinks}>
          <li>
            <Link to="/test">Test</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/calculator">Calculator</Link>
          </li>
          <li>
            <Link to="/taskManager">Task Manager</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export default Layout;
