'use client'

import { useState } from 'react'

export default function CategoryCards() {
    const categories = [
        {
            name: 'Clothes',
            emoji: '🧵',
            topPicks: ['Embroidered Kurtas', 'Handmade Shawls', 'Custom Stitched Dresses'],
        },
        {
            name: 'Accessories',
            emoji: '💍',
            topPicks: ['Handmade Jewelry', 'Embroidered Bags', 'Traditional Footwear'],
        },
        {
            name: 'Food',
            emoji: '🍱',
            topPicks: ['Homemade Pickles', 'Traditional Sweets', 'Spice Blends'],
        },
        {
            name: 'Lifestyle',
            emoji: '🪴',
            topPicks: ['Handmade Candles', 'Decor Items', 'Organic Soaps'],
        },
        {
            name: 'Healthcare',
            emoji: '🩺',
            topPicks: ['Herbal Remedies', 'Natural Skincare', 'Handmade Cosmetics'],
        },
    ]

    const [hoveredCategory, setHoveredCategory] = useState<number | null>(null)

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
                <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-soft hover-scale transition-all relative overflow-hidden"
                    onMouseEnter={() => setHoveredCategory(index)}
                    onMouseLeave={() => setHoveredCategory(null)}
                >
                    <div className="flex items-center space-x-4">
                        <span className="text-4xl">{category.emoji}</span>
                        <h2 className="text-2xl font-semibold">{category.name}</h2>
                    </div>

                    {hoveredCategory === index && (
                        <div className="mt-4 pt-4 border-t border-gray-100">
                            <h3 className="font-medium text-gray-700 mb-2">Top Picks:</h3>
                            <ul className="space-y-2">
                                {category.topPicks.map((item, i) => (
                                    <li key={i} className="flex items-center">
                                        <span className="w-2 h-2 bg-pink-300 rounded-full mr-2"></span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}