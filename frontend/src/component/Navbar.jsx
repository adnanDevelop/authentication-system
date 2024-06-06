import { Link } from "react-router-dom";
import { UseThemeContext } from "../ThemeProvider";
import { useDispatch } from "react-redux";
import { logout } from "../redux/feature/authSlice";

const Navbar = () => {
  const { changeTheme } = UseThemeContext();

  const dispatch = useDispatch();

  return (
    <div className="navbar bg-base-100 max-w-[1200px] mx-auto">
      <div className="navbar-start">
        <a className="text-xl btn btn-ghost">daisyUI</a>
      </div>
      <div className="hidden navbar-center lg:flex">
        <ul className="px-1 menu menu-horizontal">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="flex navbar-end gap-x-3">
        <button className="btn btn-primary" onClick={() => changeTheme()}>
          Theme
        </button>

        <button className="btn btn-primary" onClick={() => dispatch(logout())}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
