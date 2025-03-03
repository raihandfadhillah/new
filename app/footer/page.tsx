"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-10 relative">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* 📜 Navigasi Cepat */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Navigasi</h4>
          <ul className="space-y-2">
            {["About", "Skills", "Services", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  href={`${item.toLowerCase()}`}
                  className="hover:text-yellow-300 transition duration-300"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 🌟 Info Website */}
        <div className="text-center">
          <h4 className="text-2xl font-bold mb-2">Raihand Fadhillah</h4>
          <p className="text-sm">
            Portfolio Website dengan ketertarikan pada Web Development, UI/UX
            Design, dan Software Engineering. Senang Anda berkunjung!
          </p>
        </div>

        {/* 🌐 Sosial Media */}
        <div className="flex flex-col items-center md:items-end">
          <h4 className="text-xl font-semibold mb-4">Temukan Saya 📱</h4>
          <div className="flex gap-4">
            {/* {socialMedia.map((media, idx) => (
              <Link href={`about`} className="hover:text-gray-300">
                About
              </Link>
            ))} */}
          </div>
        </div>
      </div>

      {/* 🖱️ Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute right-6 bottom-6 bg-yellow-400 text-indigo-800 p-3 rounded-full shadow-md hover:bg-yellow-500 transition-transform duration-300 hover:scale-110"
        aria-label="Scroll to top"
      >
        <ArrowUp />
      </button>

      {/* 📜 Copyright */}
      <div className="text-center text-sm mt-10">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold">Raihand Fadhillah</span>. All rights
        reserved.
      </div>

      {/* 🎨 Styling Mobile */}
      <style jsx>{`
        @media (max-width: 360px) {
          h4 {
            font-size: 1rem;
          }
          p {
            font-size: 0.875rem;
          }
          a {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </footer>
  );
}
