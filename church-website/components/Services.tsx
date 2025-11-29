"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Music, Sparkles, Baby, Users2, GraduationCap } from "lucide-react";

const services = [
  {
    icon: Music,
    title: "Sunday Worship",
    time: "9:00 AM - 11:30 AM",
    description: "Join us for inspiring worship, powerful messages, and fellowship.",
    color: "from-purple-600 to-purple-800",
  },
  {
    icon: Sparkles,
    title: "Midweek Service",
    time: "Wednesday, 6:00 PM",
    description: "Prayer, Bible study, and spiritual growth in an intimate setting.",
    color: "from-pink-600 to-pink-800",
  },
  {
    icon: Baby,
    title: "Kids Church",
    time: "Sunday, 9:00 AM",
    description: "Age-appropriate lessons and activities for children to learn about Jesus.",
    color: "from-yellow-500 to-orange-600",
  },
  {
    icon: Users2,
    title: "Youth Ministry",
    time: "Friday, 5:00 PM",
    description: "Dynamic programs helping young people grow in faith and character.",
    color: "from-blue-600 to-blue-800",
  },
  {
    icon: GraduationCap,
    title: "Bible Study",
    time: "Tuesday, 6:30 PM",
    description: "Deep dive into Scripture with discussion and practical application.",
    color: "from-green-600 to-green-800",
  },
  {
    icon: Music,
    title: "Choir Practice",
    time: "Saturday, 3:00 PM",
    description: "Join our worship team and use your musical gifts to glorify God.",
    color: "from-indigo-600 to-indigo-800",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services & Programs
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a variety of services and programs for all ages and stages of faith.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 overflow-hidden">
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>

                <div className="relative">
                  <div className={`bg-gradient-to-br ${service.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>

                  <div className="flex items-center gap-2 text-purple-600 mb-4">
                    <Clock className="w-4 h-4" />
                    <span className="font-semibold">{service.time}</span>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
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
