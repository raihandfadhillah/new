"use client";

import React from "react";
import Image from "next/image";
import gambarProfile from "@/./public/raihndf.jpeg";
import { GraduationCap, MapPin, Sparkles, Heart } from "lucide-react";

export default function AboutSection() {
  const aboutDetails = [
    {
      title: "Education",
      icon: <GraduationCap size={48} className="text-black" />,
      description:
        "Mahasiswa semester 3 di program studi Sistem Informasi, dengan fokus pada teknologi dan pemrograman web modern.",
      gradient: "from-teal-500 to-teal-700",
    },
    {
      title: "Location",
      icon: <MapPin size={48} className="text-black" />,
      description:
        "Berdomisili di Indonesia, terbuka untuk kolaborasi dan proyek pengembangan teknologi.",
      gradient: "from-yellow-500 to-yellow-700",
    },
    {
      title: "Hobbies",
      icon: <Heart size={48} className="text-black" />,
      description:
        "Menyukai membaca, menulis, dan menjelajahi teknologi baru di dunia web development.",
      gradient: "from-red-500 to-red-700",
    },
    {
      title: "Goals",
      icon: <Sparkles size={48} className="text-black" />,
      description:
        "Menjadi Software Engineer handal dan memberikan kontribusi dalam solusi teknologi yang inovatif.",
      gradient: "from-green-500 to-green-700",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* 💡 Hero Section - Personal Info */}
      <section className="bg-gradient-to-br from-indigo-500 to-indigo-700 py-16 text-white ">
        <div className="flex flex-row justify-center gap-40">
          <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4">
            <Image
              src={gambarProfile}
              alt="Profile of Desta Novita Dewi"
              width={120}
              height={120}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold mb-2">Tentang Saya</h1>
            <p className="text-lg max-w-md">
              Mahasiswa Sistem Informasi dengan ketertarikan pada pengembangan
              web, analisis data, pasar modal, investasi saham, dan manajemen
              proyek.
            </p>
          </div>
        </div>
      </section>

      {/* 📦 About Cards */}
      <section className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {aboutDetails.map((item, index) => (
            <div
              key={index}
              className={`bg-gradient-to-r ${item.gradient} rounded-2xl shadow-xl p-5 flex items-start gap-5 hover:scale-[1.02] transition-transform duration-300`}
            >
              <div className="bg-white rounded-full p-3 shadow-md">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-white text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 360px) {
          .w-36 {
            width: 100px;
            height: 100px;
          }
          h1 {
            font-size: 1.5rem;
          }
          p {
            font-size: 0.9rem;
          }
          div[class*="flex items-start"] {
            flex-direction: column;
            text-align: center;
          }
          div[class*="bg-white"] {
            margin-bottom: 12px;
          }
        }
      `}</style>
    </div>
  );
}
