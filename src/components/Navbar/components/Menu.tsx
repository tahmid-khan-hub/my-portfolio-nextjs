import React from "react";

interface MenuProps {
  isOpen: boolean;
  links: React.ReactNode;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
} 

export function Menu( {isOpen, links, setIsOpen} : MenuProps ) {
  return (
    <>
      {/* Hamburger Icon */}
      <label
        tabIndex={0}
        className="cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
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

      {/* Dropdown menu */}
      {isOpen && (
        <ul
          tabIndex={0}
          className="absolute right-0 mt-3 w-60 p-4 rounded-2xl shadow-lg bg-[#1c222a] flex flex-col gap-4 z-50"
        >
          {links}
        </ul>
      )}
    </>
  );
}
