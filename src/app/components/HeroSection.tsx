"use client"
import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import photo from '../assets/photo1.jpg'

export default function HeroSection() {
    return (
        <section className="relative w-full bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 overflow-hidden">
            <div className="relative h-132 flex flex-col md:flex-row">
                {/* Text Area */}
                <motion.div
                    className="w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-8 z-10"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.div
                        className="max-w-2xl space-y-4"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: {},
                            visible: {
                                transition: {
                                    staggerChildren: 0.2,
                                },
                            },
                        }}
                    >
                        <motion.h1
                            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            A safe, verified space for women to{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                                sell and grow.
                            </span>
                        </motion.h1>

                        <motion.p
                            className="text-lg text-purple-100/90 leading-relaxed"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9 }}
                        >
                            Only 4% of entrepreneurs in Pakistan are women — and just 1% are online.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Link
                                href="/signup"
                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium rounded-lg shadow-lg shadow-purple-700/30 hover:shadow-xl hover:shadow-purple-700/40 transition-all duration-300 text-base"
                            >
                                Join Zeenat Now
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Image Area */}
                <motion.div
                    className="w-full md:w-1/2 relative"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 1 }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 via-purple-900/30 to-transparent z-10"></div>
                    <Image
                        alt="Woman entrepreneur packaging a parcel"
                        src={photo}
                        className="w-full h-full object-cover object-center"
                    />
                </motion.div>
            </div>
        </section>
    )
}
