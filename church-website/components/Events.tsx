"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";

const events = [
  {
    title: "Easter Sunday Celebration",
    date: "April 20, 2025",
    time: "9:00 AM",
    location: "Main Sanctuary",
    description: "Join us for a special Easter celebration with music, message, and communion.",
    image: "bg-gradient-to-br from-yellow-400 to-orange-500",
  },
  {
    title: "Youth Conference 2025",
    date: "May 15-17, 2025",
    time: "6:00 PM - 9:00 PM",
    location: "Church Grounds",
    description: "Three days of worship, teaching, and fellowship for our young people.",
    image: "bg-gradient-to-br from-blue-500 to-purple-600",
  },
  {
    title: "Community Outreach",
    date: "June 5, 2025",
    time: "10:00 AM",
    location: "Local Community",
    description: "Serving our neighbors with love through food distribution and medical camp.",
    image: "bg-gradient-to-br from-green-500 to-teal-600",
  },
];

export default function Events() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="events" className="py-24 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Upcoming Events
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay connected with what's happening at Grace Church Kenya.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2">
                {/* Event Image/Gradient */}
                <div className={`h-48 ${event.image} relative`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 right-4 bg-white rounded-full px-4 py-2">
                    <p className="text-sm font-bold text-gray-900">
                      {event.date.split(',')[0]}
                    </p>
                  </div>
                </div>

                {/* Event Details */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                    {event.title}
                  </h3>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-gray-600">
                      <Calendar className="w-5 h-5 text-purple-600" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Clock className="w-5 h-5 text-purple-600" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <MapPin className="w-5 h-5 text-purple-600" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">
                    {event.description}
                  </p>

                  <button className="group/btn flex items-center gap-2 text-purple-600 font-semibold hover:gap-3 transition-all">
                    Learn More
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
