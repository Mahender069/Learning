import { NavLink } from "react-router-dom";
import vite from "../../public/vite.svg";

export default function Header() {
  return (
    <header className="flex justify-between p-5 shadow-md">
      <img src={vite} alt="Vite Logo" />
      <ul className="flex gap-4">
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "text-blue-600 underline font-bold" : ""
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? " text-blue-600 underline font-bold" : ""
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-blue-600 underline font-bold" : ""
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
