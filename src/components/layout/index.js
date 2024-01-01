import React from "react";
import { NAVBAR_LINKS } from "./navbar_data";
import { Link, Outlet } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

function Layout() {
  return (
    <div className="flex flex-col">
      <header className="navbar shadow-sm">
        <div className="navbar-start">
          <div className="block lg:hidden dropdown">
            <div tabIndex={0} className="btn btn-ghost lg:hidden" role="button">
              <IoMenu fontSize={25} />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content z-[1] bg-base-100 shadow-md rounded-box w-52 mt-4"
            >
              {NAVBAR_LINKS.map((links) => {
                return (
                  <Link
                    className="px-2 gap-3 btn btn-ghost font-light"
                    to={links.path}
                    key={links.key}
                  >
                    {links.link}
                  </Link>
                );
              })}
            </ul>
          </div>
          <h1 className="btn btn-ghost text-xl font-light">
            Shopping Bag - KiritoWorks
          </h1>
        </div>
        <div className="navbar-center">
          <ul className="menu menu-horizontal hidden md:block ">
            {NAVBAR_LINKS.map((links) => {
              return (
                <Link
                  className="px-2 gap-3 text-xl btn btn-ghost font-light"
                  to={links.path}
                  key={links.key}
                >
                  {links.link}
                </Link>
              );
            })}
          </ul>
        </div>
        <div className="navbar-end">
          <label className="flex cursor-pointer gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>

            <input
              type="checkbox"
              value="dark"
              className="toggle theme-controller"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
