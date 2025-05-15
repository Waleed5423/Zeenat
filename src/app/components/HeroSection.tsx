"use client"
import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image';

export default function HeroSection() {

    return (
        <section className="relative w-full min-h-80 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 overflow-hidden">
            <div className="relative h-180 flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-8 z-10">
                    <div className="max-w-2xl space-y-4">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                            A safe, verified space for women to <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">sell and grow.</span>
                        </h1>

                        <p className="text-lg text-purple-100/90 leading-relaxed">
                            Only 4% of entrepreneurs in Pakistan are women — and just 1% are online.
                        </p>

                        <Link
                            href="/signup"
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium rounded-lg shadow-lg shadow-purple-700/30 hover:shadow-xl hover:shadow-purple-700/40 transition-all duration-300 text-base"
                        >
                            Join Zeenat Now
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

                <div className="w-full md:w-1/2 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 via-purple-900/30 to-transparent z-10"></div>
                    <Image
                        src="https://images.unsplash.com/photo-1617141818496-0ec18b6ab97b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Woman entrepreneur packaging a parcel"
                        className="w-full h-full object-cover object-left" />
                </div>
            </div>
        </section>
    )
}