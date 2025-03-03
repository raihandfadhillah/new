import React from "react";
import Image from "next/image";

export default function ProfilePicture() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-500 to-pink-500">
      {/* Gambar profil */}
      <div
        className="relative w-[20vw] h-[20vw] rounded-full border-[5px] border-white shadow-2xl overflow-hidden
                   transition-transform duration-500 ease-in-out hover:scale-125 hover:rotate-6 hover:shadow-pink-500/50"
      >
        <Image
          src="/raihand.jpeg" // Ganti dengan path gambar profil kamu
          alt="Profile Picture"
          layout="fill"
          objectFit="cover"
          className="rounded-full transition-all duration-500 hover:blur-[1px]"
        />
      </div>

      {/* Teks utama (nama) */}
      <h2 className="text-white text-3xl font-extrabold drop-shadow-lg mt-4 transition-all duration-500 hover:text-yellow-300 hover:scale-110">
        Raihand Fadhillah
      </h2>

      {/* Deskripsi di bawah teks utama */}
      <p className="text-white text-sm mt-2 opacity-80 transition-all duration-500 hover:opacity-100 hover:text-pink-200">
        Web Developer | Tech Enthusiast | Lifelong Learner
      </p>
    </div>
  );
}
