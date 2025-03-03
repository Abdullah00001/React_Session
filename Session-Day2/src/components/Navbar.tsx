import { FC } from "react";
import { NavLink } from "react-router-dom";

const Navbar: FC = () => {
  return (
    <nav className="bg-gray-900 text-white py-4 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4">
        <h1 className="text-2xl font-bold">React Session 1</h1>
        <ul className="flex space-x-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg transition duration-300 ${
                  isActive ? "bg-blue-600" : "hover:bg-blue-500"
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/posts"
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg transition duration-300 ${
                  isActive ? "bg-blue-600" : "hover:bg-blue-500"
                }`
              }
            >
              Posts
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
