"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { NavItems } from "./components/NavItems";
import { NavLinks } from "./components/NavLinks";
import { Menu } from "./components/Menu";

export default function Navbar() {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateHash = () => setActiveHash(window.location.hash);
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  if (pathname.startsWith("/projects-details/")) {
    return null;
  }

  const links = (
    <>
      {NavItems.map((item) => (
        <NavLinks
          key={item.href}
          href={item.href}
          label={item.label}
          activeHash={activeHash}
        />
      ))}
    </>
  );

  return (
    <div className="navbar sticky top-0 z-60 bg-background/55 backdrop-blur-md text-white">
      <div className="max-w-337.5 mx-auto w-full flex justify-between items-center px-4 md:px-3">
        {/* Left side */}
        <Link
          href="/"
          className="text-xl -ml-1 md:-ml-0.5 lg:ml-0 font-bold bg-linear-to-r from-blue-700 via-blue-600 to-blue-300 bg-clip-text text-transparent"
        >
          Tahmid
        </Link>

        {/* Right side */}
        <div className="navbar-end">
          <ul className="hidden lg:flex gap-5">{links}</ul>

          {/* Mobile menu */}
          <div className="lg:hidden relative -mr-1" ref={menuRef}>
            <Menu isOpen={isOpen} links={links} setIsOpen={setIsOpen} />
          </div>
        </div>
      </div>
    </div>
  );
}
