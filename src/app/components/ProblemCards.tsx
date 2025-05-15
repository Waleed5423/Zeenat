"use client"
import React from 'react'
import { motion } from 'framer-motion'

export default function ProblemCards() {
  const problems = [
    {
      icon: '🚫',
      title: 'Harassment on public platforms',
      description: 'Many women face inappropriate messages and behavior when selling online.',
    },
    {
      icon: '🕵️‍♀️',
      title: 'Fake orders and scammers',
      description: 'Sellers often deal with fake buyers who waste their time and resources.',
    },
    {
      icon: '💬',
      title: 'Language barriers',
      description: 'Most platforms don\'t support Urdu, making it hard for many sellers.',
    },
  ]

  return (
    <motion.section
      className="space-y-10 py-8 px-4 md:px-8 lg:px-16 bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ staggerChildren: 0.2 }}
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center text-gray-800"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        The Problems Women Sellers Face
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {problems.map((problem, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="w-14 h-14 flex items-center justify-center text-3xl bg-pink-100 rounded-full mb-4">
              {problem.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{problem.title}</h3>
            <p className="text-gray-600">{problem.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
