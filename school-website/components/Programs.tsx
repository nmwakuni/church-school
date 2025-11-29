"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Baby, Smile, BookOpen, GraduationCap, Palette, Laptop } from "lucide-react";

const programs = [
  {
    icon: Baby,
    title: "Pre-Primary",
    age: "Ages 3-5",
    description: "Foundational learning through play-based activities and early childhood development.",
    color: "from-pink-600 to-rose-800",
  },
  {
    icon: Smile,
    title: "Primary School",
    age: "Ages 6-13",
    description: "Comprehensive curriculum following the Kenyan 8-4-4 system with modern teaching methods.",
    color: "from-blue-600 to-blue-800",
  },
  {
    icon: BookOpen,
    title: "Junior Secondary",
    age: "Ages 14-15",
    description: "Competency-based curriculum preparing students for senior secondary education.",
    color: "from-green-600 to-green-800",
  },
  {
    icon: GraduationCap,
    title: "Senior Secondary",
    age: "Ages 16-17",
    description: "Specialized pathways in STEM, humanities, and arts for university preparation.",
    color: "from-purple-600 to-purple-800",
  },
  {
    icon: Palette,
    title: "Arts & Sports",
    age: "All Ages",
    description: "Co-curricular programs in music, drama, sports, and creative arts.",
    color: "from-orange-600 to-orange-800",
  },
  {
    icon: Laptop,
    title: "ICT & Robotics",
    age: "All Ages",
    description: "Cutting-edge technology programs including coding, robotics, and digital literacy.",
    color: "from-teal-600 to-teal-800",
  },
];

export default function Programs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="programs" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Programs
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive educational programs designed to nurture every aspect of your child's development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 overflow-hidden">
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>

                <div className="relative">
                  <div className={`bg-gradient-to-br ${program.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <program.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {program.title}
                  </h3>

                  <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    {program.age}
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    {program.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
