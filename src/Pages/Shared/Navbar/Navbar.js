import React from "react";
import { Link } from "react-router-dom";
import "../../../Styles/style.css";

const Navbar = () => {
  const menuItems = (
    <React.Fragment>
      <li className="hover:text-accent hover:text-lg">
        <Link to="/">Home</Link>
      </li>
      <li tabIndex={0}>
        <Link className="hover:text-accent hover:text-lg">
          Categories
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
          </svg>
        </Link>
        <ul className="p-2 bg-base-100">
          <li className="hover:text-accent">
            <Link>Submenu 1</Link>
          </li>
          <li className="hover:text-accent">
            <Link>Submenu 2</Link>
          </li>
          <li className="hover:text-accent">
            <Link>Submenu 2</Link>
          </li>
        </ul>
      </li>
      <li className="hover:text-accent hover:text-lg">
        <Link to="/myOrders">My Orders</Link>
      </li>
      <li className="hover:text-accent hover:text-lg">
        <Link to="/blog">Blog</Link>
      </li>
    </React.Fragment>
  );

  return (
    <div className="navbar bg-primary text-primary-content py-4 lg:px-8">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-3xl site-name">
          <span className="site-name">PureSnuggle</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>

      <div className="navbar-end">
        <div className="avatar hidden md:block lg:block mr-3">
          <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img alt="avatar_image" src="https://placeimg.com/192/192/people" />
          </div>
        </div>
        <Link className="btn btn-outline glass btn-accent" to="/login">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
