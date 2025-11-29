"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const galleryItems = [
  { title: "Sunday Worship", color: "from-purple-500 to-pink-500" },
  { title: "Youth Ministry", color: "from-blue-500 to-indigo-600" },
  { title: "Community Service", color: "from-green-500 to-teal-600" },
  { title: "Kids Church", color: "from-yellow-500 to-orange-500" },
  { title: "Baptism Service", color: "from-cyan-500 to-blue-600" },
  { title: "Easter Celebration", color: "from-rose-500 to-pink-600" },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Gallery
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Moments of worship, fellowship, and service captured in time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color}`}>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white text-center px-4 transform group-hover:scale-110 transition-transform duration-300">
                  {item.title}
                </h3>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
