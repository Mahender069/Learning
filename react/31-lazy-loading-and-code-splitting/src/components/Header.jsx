import React, { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header>
        <p>Header</p>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </header>
      <Suspense fallback={<p>Loading.........</p>}>
        <Outlet />
      </Suspense>
    </>
  );
}
