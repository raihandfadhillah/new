"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Pesan terkirim!");
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-2xl"
    >
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-3xl font-bold text-center mb-6 text-gray-800"
      >
        Kontak Kami
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        className="space-y-5"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div>
          <label className="block text-lg font-semibold text-gray-700">
            Nama
          </label>
          <motion.input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Masukkan nama Anda"
            className="w-full p-3 text-lg text-gray-900 bg-white border border-gray-400 rounded-lg placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            whileFocus={{ scale: 1.05, borderColor: "#2563eb" }}
          />
        </div>
        <div>
          <label className="block text-lg font-semibold text-gray-700">
            Email
          </label>
          <motion.input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Masukkan email Anda"
            className="w-full p-3 text-lg text-gray-900 bg-white border border-gray-400 rounded-lg placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            whileFocus={{ scale: 1.05, borderColor: "#2563eb" }}
          />
        </div>
        <div>
          <label className="block text-lg font-semibold text-gray-700">
            Pesan
          </label>
          <motion.textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Tulis pesan Anda..."
            className="w-full p-3 text-lg text-gray-900 bg-white border border-gray-400 rounded-lg placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none h-32"
            whileFocus={{ scale: 1.05, borderColor: "#2563eb" }}
          />
        </div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="transition-transform duration-300"
        >
          <button
            type="submit"
            className="w-full p-3 bg-blue-600 text-white text-lg font-bold rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Kirim
          </button>
        </motion.div>
      </motion.form>
    </motion.div>
  );
}
