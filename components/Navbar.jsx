import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link href={"/"}>
          <h1 className="nav-link">E-DEMOCRACY</h1>
        </Link>
        <Link href={"/proposal"}>
          <h1 className="nav-link">PROPOSALS</h1>
        </Link>
        <Link className="nav-link" href={"/faq"}>
          <h1 className="nav-link">FAQ</h1>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
