'use client'

import { motion } from 'framer-motion'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import { useRef, useState } from 'react'

export default function CategoryCards() {
    const categories = [
        {
            name: 'Clothing',
            emoji: '👕',
            topPicks: [
                {
                    name: 'Embroidered Kurtas',
                    image: 'https://images.unsplash.com/photo-1595341595379-cf0f2f7b45e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
                },
                {
                    name: 'Handmade Shawls',
                    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
                },
                {
                    name: 'Custom Dresses',
                    image: 'https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
                },
                {
                    name: 'Traditional Sarees',
                    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
                },
                {
                    name: 'Handwoven Scarves',
                    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
                }
            ],
            accentColor: 'indigo-400'
        },
        {
            name: 'Accessories',
            emoji: '💍',
            topPicks: [
                {
                    name: 'Handmade Jewelry',
                    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
                },
                {
                    name: 'Embroidered Bags',
                    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
                },
                {
                    name: 'Leather Wallets',
                    image: 'https://images.unsplash.com/photo-1548032885-b5e38734688a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
                },
                {
                    name: 'Bamboo Sunglasses',
                    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
                },
                {
                    name: 'Silk Ties',
                    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
                }
            ],
            accentColor: 'amber-400'
        },
        {
            name: 'Food & Spices',
            emoji: '🍯',
            topPicks: [
                {
                    name: 'Organic Honey',
                    image: 'https://images.unsplash.com/photo-1587049352851-8d4e89133924?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
                },
                {
                    name: 'Handmade Chocolates',
                    image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
                },
                {
                    name: 'Gourmet Spices',
                    image: 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
                },
                {
                    name: 'Artisan Bread',
                    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
                },
                {
                    name: 'Homemade Jam',
                    image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
                }
            ],
            accentColor: 'emerald-400'
        },
        {
            name: 'Home Decor',
            emoji: '🏠',
            topPicks: [
                {
                    name: 'Handmade Candles',
                    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
                },
                {
                    name: 'Ceramic Vases',
                    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
                },
                {
                    name: 'Wooden Sculptures',
                    image: 'https://images.unsplash.com/photo-1564939558297-fc1f1f30b4a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
                },
                {
                    name: 'Woven Baskets',
                    image: 'https://images.unsplash.com/photo-1591348278863-a8fb3887e2aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
                },
                {
                    name: 'Macrame Wall Art',
                    image: 'https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
                }
            ],
            accentColor: 'teal-400'
        },
        {
            name: 'Wellness',
            emoji: '🧴',
            topPicks: [
                {
                    name: 'Herbal Tea Blends',
                    image: 'https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
                },
                {
                    name: 'Essential Oils',
                    image: 'https://images.unsplash.com/photo-1601524909160-5e23b5f6b0a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
                },
                {
                    name: 'Natural Soaps',
                    image: 'https://images.unsplash.com/photo-1604176354204-926165b9c7ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
                },
                {
                    name: 'Ayurvedic Creams',
                    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
                },
                {
                    name: 'Aromatherapy Candles',
                    image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
                }
            ],
            accentColor: 'rose-400'
        }
    ]

    return (
        <div className="space-y-8 p-4 md:p-6 w-full max-w-7xl mx-auto">
            {categories.map((category, index) => {
                const scrollRef = useRef<HTMLDivElement>(null)
                const [showLeftArrow, setShowLeftArrow] = useState(false)
                const [showRightArrow, setShowRightArrow] = useState(true)

                const scroll = (direction: 'left' | 'right') => {
                    if (!scrollRef.current) return

                    const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current
                    const scrollAmount = direction === 'left' ? -clientWidth : clientWidth

                    scrollRef.current.scrollBy({
                        left: scrollAmount,
                        behavior: 'smooth'
                    })

                    // Update arrow visibility after scroll completes
                    setTimeout(() => {
                        if (!scrollRef.current) return
                        const newScrollLeft = scrollRef.current.scrollLeft
                        const newClientWidth = scrollRef.current.clientWidth
                        const newScrollWidth = scrollRef.current.scrollWidth

                        setShowLeftArrow(newScrollLeft > 0)
                        setShowRightArrow(newScrollLeft + newClientWidth < newScrollWidth)
                    }, 500)
                }

                const handleScroll = () => {
                    if (!scrollRef.current) return
                    const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current

                    setShowLeftArrow(scrollLeft > 0)
                    setShowRightArrow(scrollLeft + clientWidth < scrollWidth)
                }

                return (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            delay: index * 0.15,
                            ease: [0.16, 1, 0.3, 1]
                        }}
                        className="bg-indigo-50 p-6 md:p-8 rounded-3xl shadow-lg w-full relative overflow-hidden group hover:shadow-xl transition-shadow duration-300"
                    >
                        {/* Animated background elements */}
                        <motion.div
                            className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-10 blur-lg"
                            animate={{
                                scale: [1, 1.2, 1],
                                rotate: [0, 180, 360]
                            }}
                            transition={{
                                duration: 15,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            style={{ background: `var(--tw-${category.accentColor})` }}
                        />

                        <div className="flex items-center gap-4 mb-6 md:mb-8 relative z-10">
                            <motion.span
                                className="text-4xl md:text-5xl"
                                animate={{
                                    rotate: [0, 10, -5, 0],
                                    y: [0, -5, 0]
                                }}
                                transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }}
                            >
                                {category.emoji}
                            </motion.span>
                            <motion.h2
                                className="text-2xl md:text-3xl font-bold text-gray-800"
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.3, type: 'spring' }}
                            >
                                {category.name}
                                <motion.span
                                    className="block h-1 mt-2 origin-left"
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ delay: 0.5, duration: 0.8 }}
                                    style={{ background: `var(--tw-${category.accentColor})` }}
                                />
                            </motion.h2>
                        </div>

                        <div className="mt-6 md:mt-8 relative z-10">
                            <motion.h3
                                className="text-lg md:text-xl font-medium text-gray-600 mb-4 md:mb-6 flex items-center gap-2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                <motion.span
                                    animate={{
                                        x: [0, 5, 0],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity
                                    }}
                                >
                                    ✨
                                </motion.span>
                                Top Picks
                                <motion.span
                                    animate={{
                                        x: [0, -5, 0],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: 0.5
                                    }}
                                >
                                    ✨
                                </motion.span>
                            </motion.h3>

                            <div className="relative">
                                <div
                                    ref={scrollRef}
                                    className="flex space-x-4 md:space-x-8 overflow-x-hidden pb-6 scrollbar-hide px-2"
                                    onScroll={handleScroll}
                                >
                                    {category.topPicks.map((item, i) => (
                                        <motion.div
                                            key={i}
                                            className="flex-shrink-0 flex flex-col items-center text-center group cursor-pointer"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{
                                                delay: 0.5 + i * 0.1,
                                                type: "spring",
                                                stiffness: 100
                                            }}
                                            whileHover={{
                                                y: -10,
                                            }}
                                        >
                                            <motion.div
                                                className="relative overflow-hidden rounded-2xl shadow-xl border-4 border-white"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="w-40 h-40 md:w-52 md:h-52 object-cover"
                                                />
                                                <motion.div
                                                    className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-4"
                                                >
                                                    <motion.span
                                                        className="text-white font-bold text-sm md:text-lg"
                                                        initial={{ y: 20 }}
                                                        whileInView={{ y: 0 }}
                                                        transition={{ delay: 0.2 }}
                                                    >
                                                        {item.name}
                                                    </motion.span>
                                                </motion.div>
                                            </motion.div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Navigation arrows with Lucide icons */}
                                {showLeftArrow && (
                                    <motion.button
                                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 md:p-3 rounded-full shadow-lg z-20 hover:shadow-xl transition-all"
                                        whileHover={{
                                            scale: 1.1,
                                            backgroundColor: 'bg-indigo-100'
                                        }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => scroll('left')}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                    >
                                        <ChevronLeft
                                            className="text-gray-700 w-5 h-5 md:w-6 md:h-6"
                                            strokeWidth={2.5}
                                        />
                                    </motion.button>
                                )}
                                {showRightArrow && (
                                    <motion.button
                                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 md:p-3 rounded-full shadow-lg z-20 hover:shadow-xl transition-all"
                                        whileHover={{
                                            scale: 1.1,
                                            backgroundColor: 'bg-indigo-100'
                                        }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => scroll('right')}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                    >
                                        <ChevronRight
                                            className="text-gray-700 w-5 h-5 md:w-6 md:h-6"
                                            strokeWidth={2.5}
                                        />
                                    </motion.button>
                                )}
                            </div>
                        </div>

                        {/* Floating corner element */}
                        <motion.div
                            className="absolute bottom-4 right-4 w-12 h-12 md:w-16 md:h-16 opacity-30"
                            animate={{
                                rotate: [0, 90, 180, 270, 360],
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        >
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z"
                                    stroke={`var(--tw-${category.accentColor})`}
                                    strokeWidth="2"
                                />
                                <path
                                    d="M12 6C8.686 6 6 8.686 6 12C6 15.314 8.686 18 12 18C15.314 18 18 15.314 18 12C18 8.686 15.314 6 12 6Z"
                                    stroke={`var(--tw-${category.accentColor})`}
                                    strokeWidth="2"
                                />
                            </svg>
                        </motion.div>
                    </motion.div>
                )
            })}
        </div>
    )
}