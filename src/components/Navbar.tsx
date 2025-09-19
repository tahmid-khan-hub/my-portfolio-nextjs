"use client";
import Link from "next/link";

export default function Navbar() {
  const links = (
    <>
      <li><Link href="#about">About</Link></li>
      <li><Link href="#skills">Skills</Link></li>
      <li><Link href="#projects">Projects</Link></li>
      <li><Link href="#contact">Contact</Link></li>
    </>
  );

  return (
    <div className="w-full shadow-sm">
      <div className="max-w-[1350px] mx-auto ">
        <div className="navbar">
          <div className="navbar-start">
            <Link href="/" className="btn btn-ghost text-xl font-bold">
              Portfolio
            </Link>
          </div>

          <div className="navbar-end">
            <ul className="hidden lg:flex menu menu-horizontal px-1">
              {links}
            </ul>

            {/* Mobile menu  */}
            <div className="lg:hidden dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost">
                {/* Hamburger Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 w-52 p-2 shadow bg-base-100 rounded-box z-[1]"
              >
                {links}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
