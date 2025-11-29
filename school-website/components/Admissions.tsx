"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, UserCheck, CreditCard, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "1. Application",
    description: "Fill out our online application form or visit the school to get a physical application form.",
  },
  {
    icon: UserCheck,
    title: "2. Assessment",
    description: "Students undergo a simple assessment to help us understand their learning needs.",
  },
  {
    icon: CreditCard,
    title: "3. Payment",
    description: "Pay the admission fee and complete the registration process.",
  },
  {
    icon: CheckCircle,
    title: "4. Welcome!",
    description: "Receive your welcome pack and join our school family!",
  },
];

const requirements = [
  "Birth Certificate (Original & Copy)",
  "Previous School Report (if applicable)",
  "Passport Size Photos (2)",
  "Medical Certificate",
  "Parent/Guardian ID Copies",
];

export default function Admissions() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="admissions" className="py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Admissions Process
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our community of learners. The admission process is simple and straightforward.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-center">
                <div className="bg-gradient-to-br from-blue-600 to-teal-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Requirements & CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Required Documents
            </h3>
            <ul className="space-y-4">
              {requirements.map((req, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{req}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-blue-600 to-teal-600 rounded-2xl p-8 text-white"
          >
            <h3 className="text-2xl font-bold mb-4">Ready to Apply?</h3>
            <p className="mb-6 text-white/90">
              Start your child's journey to excellence today. Our admissions team
              is ready to guide you through the process.
            </p>
            <div className="space-y-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <p className="font-semibold mb-1">Admission Deadline</p>
                <p className="text-white/90">Rolling admissions - Apply anytime</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <p className="font-semibold mb-1">School Visits</p>
                <p className="text-white/90">Monday - Friday, 9:00 AM - 4:00 PM</p>
              </div>
            </div>
            <button className="w-full mt-6 bg-white text-blue-700 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors shadow-xl hover:shadow-2xl hover:scale-105">
              Start Application
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
