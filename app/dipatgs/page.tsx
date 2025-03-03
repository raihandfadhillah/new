"use client";
import React from "react";
import Image from "next/image";
import { PlusCircle } from "lucide-react";

// Type definitions for participant and class data
interface Participant {
  name: string;
  img: string;
}

interface ClassData {
  className: string;
  participants: Participant[];
}

const classData: ClassData[] = [
  {
    className: "Kelas SI",
    participants: [
      {
        name: "Harist Fadillah",
        img: "https://randomuser.me/api/portraits/men/13.jpg",
      },
      {
        name: "Nuthafsari Ansarani",
        img: "https://randomuser.me/api/portraits/women/14.jpg",
      },
      { name: "Wahyudin Sapari", img: "/images/wahyudin.jpg" },
      {
        name: "Farhan Ramdani",
        img: "https://randomuser.me/api/portraits/men/16.jpg",
      },
      {
        name: "Rizki Amelia",
        img: "https://randomuser.me/api/portraits/women/17.jpg",
      },
    ],
  },
  {
    className: "Kelas KA",
    participants: [
      {
        name: "Erik Sobirin",
        img: "https://randomuser.me/api/portraits/men/18.jpg",
      },
      {
        name: "Muhammad Ashif Barkhiya Warman",
        img: "https://randomuser.me/api/portraits/men/19.jpg",
      },
      {
        name: "Novi Marcelimah",
        img: "https://randomuser.me/api/portraits/women/20.jpg",
      },
      {
        name: "Ulfa Nadya",
        img: "https://randomuser.me/api/portraits/women/21.jpg",
      },
      {
        name: "Dimas Arya",
        img: "https://randomuser.me/api/portraits/men/22.jpg",
      },
    ],
  },
  {
    className: "Kelas BD",
    participants: [
      {
        name: "Akmal Syarif",
        img: "https://randomuser.me/api/portraits/men/23.jpg",
      },
      {
        name: "Arie Nurhikmat",
        img: "https://randomuser.me/api/portraits/men/24.jpg",
      },
      {
        name: "Ayu Fatimah",
        img: "https://randomuser.me/api/portraits/women/25.jpg",
      },
      {
        name: "Christianity Nur Fhad",
        img: "https://randomuser.me/api/portraits/women/26.jpg",
      },
      {
        name: "Dea Pradestiawati",
        img: "https://randomuser.me/api/portraits/women/27.jpg",
      },
    ],
  },
];

// ParticipantCard component with enhanced UI
const ParticipantCard: React.FC<{ participant: Participant }> = ({
  participant,
}) => (
  <div className="flex flex-col items-center space-y-2 group">
    <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-green-300 shadow-xl group-hover:scale-110 transition-transform duration-300">
      <Image
        src={participant.img}
        alt={participant.name}
        layout="fill"
        objectFit="cover"
        onError={(e) => (e.currentTarget.src = "/images/default.jpg")}
      />
    </div>
    <p className="text-sm font-medium text-gray-800 text-center">
      {participant.name}
    </p>
  </div>
);

// ClassCard component with updated styling and responsiveness
const ClassCard: React.FC<{ kelas: ClassData }> = ({ kelas }) => (
  <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-3xl shadow-2xl p-8 space-y-6 hover:scale-105 transition-transform duration-300">
    <h2 className="text-center text-2xl font-bold text-green-700">
      {kelas.className}
    </h2>
    <div className="flex justify-center flex-wrap gap-6 md:gap-10">
      {kelas.participants.map((p, i) => (
        <ParticipantCard key={i} participant={p} />
      ))}
    </div>
    <div className="flex justify-center">
      <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-lg transition-all">
        <PlusCircle size={22} />
        Assign Peserta Kelas
      </button>
    </div>
  </div>
);

// Main ManageKelas component with grid layout for better responsiveness
const ManageKelas: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-gray-50 p-8 space-y-10 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {classData.map((kelas, index) => (
        <ClassCard key={index} kelas={kelas} />
      ))}
    </div>
  );
};

export default ManageKelas;
