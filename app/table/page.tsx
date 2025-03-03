"use client";

import React from "react";

const data = [
  {
    no: 1,
    nim: "20232505040",
    nama: "Raihand Fadhillah",
    gender: "laki - laki",
    prodi: "Sistem Informasi",
    kelas: "SI-4A",
    semester: 6,
    alamat: "Bandung",
    hobby: "Bermain Batminton, Membaca, memasak",
    citacita: "Full Stack Developer",
  },
  {
    no: 2,
    nim: "20232505038",
    nama: " p  ",
    gender: "perempuan",
    prodi: "Teknik Informatika",
    kelas: "TI-2B",
    semester: 4,
    alamat: "permata hijau",
    hobby: "nyanyi, ballet, coding",
    citacita: "Programmer Handal",
  },
];

export default function TabelMahasiswa() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold text-center mb-4 ">Data Mahasiswa</h2>

      {/* Tabel untuk Desktop */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow">
          <thead className="bg-blue-500 text-white">
            <tr>
              {[
                "No",
                "NIM",
                "Nama",
                "Gender",
                "Prodi",
                "Kelas",
                "Semester",
                "Alamat",
                "Hobby",
                "Cita-cita",
              ].map((header) => (
                <th key={header} className="py-2 px-3 text-sm">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((mhs) => (
              <tr
                key={mhs.nim}
                className="text-center text-black hover:bg-blue-100 transition"
              >
                <td className="py-2 px-3">{mhs.no}</td>
                <td className="py-2 px-3">{mhs.nim}</td>
                <td className="py-2 px-3">{mhs.nama}</td>
                <td className="py-2 px-3">{mhs.gender}</td>
                <td className="py-2 px-3">{mhs.prodi}</td>
                <td className="py-2 px-3">{mhs.kelas}</td>
                <td className="py-2 px-3">{mhs.semester}</td>
                <td className="py-2 px-3">{mhs.alamat}</td>
                <td className="py-2 px-3">{mhs.hobby}</td>
                <td className="py-2 px-3">{mhs.citacita}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Card untuk Mobile */}
      <div className="sm:hidden grid grid-cols-1 gap-4">
        {data.map((mhs) => (
          <div
            key={mhs.nim}
            className="bg-white rounded-lg shadow p-4 border border-gray-200"
          >
            {Object.entries(mhs).map(([key, value]) => (
              <div key={key} className="mb-2">
                <p className="text-sm font-semibold capitalize">{key}</p>
                <p className="text-base text-gray-700">{value}</p>
              </div>
            ))}
          </div>
        ))}
      </div>

      <style jsx>{`
        @media (max-width: 360px) {
          .grid {
            grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
          }
        }
      `}</style>
    </div>
  );
}
