"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const projects = [
  { id: 1, title: "Project 1", image: "/images/12.jpg" },
  { id: 2, title: "Project 2", image: "/images/13.jpg" },
  { id: 3, title: "Project 3", image: "/images/14.jpg" },
];

export default function MyProjects() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <section ref={containerRef} className="py-20 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 max-w-5xl mx-auto">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            style={{ scale }}
            className="overflow-hidden rounded-lg shadow-lg bg-white"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={256}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
