"use client";

import { useState, useEffect } from "react";

const sections = [
  { id: "home", title: "Home" },
  { id: "tentang", title: "Tentang" },
  { id: "layanan", title: "Layanan" },
  { id: "stories", title: "Stories" },
  { id: "latihan", title: "Latihan" },
  { id: "bab1", title: "BAB 1 - Pendahuluan" },
  { id: "bab2", title: "BAB 2 - Landasan Teori" },
  { id: "bab3", title: "BAB 3 - Metodologi Penelitian" },
  { id: "bab4", title: "BAB 4 - Hasil dan Pembahasan" },
  { id: "bab5", title: "BAB 5 - Kesimpulan dan Saran" },
];

const contentSections = sections.slice(5); // Hanya menampilkan BAB 1 - 5

export default function Page() {
  const [activeSection, setActiveSection] = useState(contentSections[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      for (let i = contentSections.length - 1; i >= 0; i--) {
        const sectionElement = document.getElementById(contentSections[i].id);
        if (
          sectionElement &&
          sectionElement.offsetTop - 100 <= scrollPosition
        ) {
          setActiveSection(contentSections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-blue-600 text-white py-4 px-6 text-xl font-semibold shadow-md z-50 flex justify-between items-center">
        <span>Skripsi Online</span>
        <div className="space-x-4">
          {sections.slice(0, 4).map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="hover:underline"
            >
              {section.title}
            </a>
          ))}
        </div>
      </nav>

      {/* Sticky Heading */}
      <div className="sticky top-[60px] bg-white shadow-md p-3 text-lg font-semibold text-blue-700 z-40 transition-all duration-300">
        {contentSections.find((section) => section.id === activeSection)?.title}
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto py-24 px-6">
        {contentSections.map((section) => (
          <div key={section.id} id={section.id} className="mb-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {section.title}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              facilisi. Proin sit amet tortor nec metus luctus tincidunt.
              Integer vitae odio et lectus pharetra vestibulum. Duis suscipit
              eros at orci malesuada, sed convallis magna facilisis.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
