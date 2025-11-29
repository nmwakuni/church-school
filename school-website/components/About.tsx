"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Lightbulb, Heart, Trophy } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for academic and personal excellence in everything we do.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Fostering creativity and critical thinking in a modern learning environment.",
  },
  {
    icon: Heart,
    title: "Character",
    description: "Building strong moral values and ethical leadership qualities.",
  },
  {
    icon: Trophy,
    title: "Achievement",
    description: "Celebrating success and nurturing each student's unique potential.",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Our School
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Excellence Academy Kenya is a leading educational institution committed
            to nurturing well-rounded individuals through quality education and
            character development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-100 hover:border-blue-200 hover:-translate-y-2">
                <div className="bg-gradient-to-br from-blue-600 to-teal-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-3xl p-12 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed">
            To be the premier educational institution in Kenya, producing globally
            competitive graduates who are academically excellent, morally upright,
            and equipped with 21st-century skills to positively impact their
            communities and the world.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
