"use client"
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function SolutionCards() {
    const solutions = [
        {
            title: 'Verified Sellers Only',
            description: 'Each seller goes through ID and address checks.',
        },
        {
            title: 'Women-Only Community Chat',
            description: 'No male users. No spam. Full control over interactions.',
        },
        {
            title: 'Urdu & English Interface',
            description: 'Use Zeenat in your preferred language.',
        },
    ]

    return (
        <motion.section
            className="space-y-10 py-16 px-4 md:px-8 lg:px-16 bg-white"
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
                Our Solution
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {solutions.map((solution, index) => (
                    <motion.div
                        key={index}
                        className="bg-gray-50 border border-gray-100 p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">{solution.title}</h3>
                        <p className="text-gray-600">{solution.description}</p>
                    </motion.div>
                ))}
            </div>

            <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
            >
                <Link
                    href="/categories"
                    className="inline-block px-6 py-3 bg-pink-500 text-white font-medium rounded-lg hover:bg-pink-600 transition-colors duration-300"
                >
                    Explore the Platform
                </Link>
            </motion.div>
        </motion.section>
    )
}
