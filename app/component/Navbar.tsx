"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-4">
            <span className="text-2xl font-bold">Raihand F </span>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="/about" className="hover:text-gray-300">
              About
            </Link>
            <Link href="/skill" className="hover:text-gray-300">
              Skill
            </Link>
            <Link href="/table" className="hover:text-gray-300">
              Table
            </Link>
            <Link href="/contact" className="hover:text-gray-300">
              Kontak Kami
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-blue-600 p-4 space-y-2">
          <Link href="/about" className="block hover:text-gray-300">
            About
          </Link>
          <Link href="/skill" className="block hover:text-gray-300">
            Skill
          </Link>
          <Link href="/table" className="block hover:text-gray-300">
            Table
          </Link>
        </div>
      )}
    </nav>
  );
}
