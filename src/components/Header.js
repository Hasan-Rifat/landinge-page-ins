import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [bg, setBg] = useState(false);
  const navLink = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-accent text-secondary" : "text-secondary"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-accent text-secondary" : "text-secondary"
          }
          to="/cart"
        >
          Cart
        </NavLink>
      </li>
    </>
  );

  const changeBg = () => {
    if (window.scrollY >= 70) {
      setBg(true);
    } else {
      setBg(false);
    }
  };
  window.addEventListener("scroll", changeBg);

  return (
    <header
      className={`${
        bg
          ? "bg-white shadow-[0px_4px_80px_rgba(0,0,0,0.1)] fixed left-0 right-0 top-0"
          : "bg-[#f8f9fa]  absolute left-0 right-0 top-0 "
      }`}
    >
      <div className="navbar max-w-[1140px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content  mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLink}
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost normal-case text-xl text-secondary"
          >
            Hasan Rifat
          </Link>
        </div>
        <div className="navbar-end  hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{navLink}</ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
