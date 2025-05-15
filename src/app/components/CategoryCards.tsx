'use client'

import { motion } from 'framer-motion'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import { useRef, useState } from 'react'
import Image from 'next/image'
import photo2 from '../assets/photo2.jpg'

export default function CategoryCards() {
    const categories = [
        {
            name: 'Clothing',
            emoji: '👕',
            topPicks: [
                {
                    name: 'Embroidered Kurtas',
                    image: photo2
                },
                {
                    name: 'Handmade Shawls',
                    image: 'https://images.unsplash.com/photo-1698856287429-d43461bbe2db?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                },
                {
                    name: 'Custom Dresses',
                    image: 'https://images.unsplash.com/photo-1744742203640-ba59afa94a4d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                },
                {
                    name: 'Traditional Sarees',
                    image: 'https://images.unsplash.com/photo-1717585679395-bbe39b5fb6bc?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                },
                {
                    name: 'Handwoven Scarves',
                    image: 'https://images.unsplash.com/photo-1609803384069-19f3e5a70e75?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
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
                    image: 'https://images.unsplash.com/photo-1523252012848-c22188792c27?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                },
                {
                    name: 'Embroidered Bags',
                    image: 'https://images.unsplash.com/photo-1669578718654-9fb5c15942ef?q=80&w=2003&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                },
                {
                    name: 'Leather Wallets',
                    image: 'https://images.unsplash.com/photo-1620109176902-24afe6146cd3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                },
                {
                    name: 'Bamboo Sunglasses',
                    image: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                },
                {
                    name: 'Silk Ties',
                    image: 'https://images.unsplash.com/photo-1617238749996-ab4c0f9fba57?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
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
                    image: 'https://images.unsplash.com/photo-1592290321458-49b80f943a26?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                },
                {
                    name: 'Gourmet Spices',
                    image: 'https://images.unsplash.com/photo-1517646458010-ea6bd9f4a75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                },
                {
                    name: 'Artisan Bread',
                    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
                },
                {
                    name: 'Homemade Jam',
                    image: 'https://images.unsplash.com/photo-1656431157258-3618c14d4b37?q=80&w=2003&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
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
                    image: 'https://images.unsplash.com/photo-1604249180535-583716d9ec33?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                },
                {
                    name: 'Ceramic Vases',
                    image: 'https://images.unsplash.com/photo-1721373490515-5341adf543a5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                },
                {
                    name: 'Wooden Sculptures',
                    image: 'https://images.unsplash.com/photo-1727273625443-0b33b58a9a8f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                },
                {
                    name: 'Woven Baskets',
                    image: 'https://images.unsplash.com/photo-1691412788407-065354256734?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                },
                {
                    name: 'Macrame Wall Art',
                    image: 'https://images.unsplash.com/photo-1628415246390-806d42a1f90e?q=80&w=1929&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
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
                    image: 'https://images.unsplash.com/photo-1736215900628-5802c4a23db5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                },
                {
                    name: 'Essential Oils',
                    image: 'https://images.unsplash.com/photo-1624454002302-36b824d7bd0a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                },
                {
                    name: 'Natural Soaps',
                    image: 'https://images.unsplash.com/photo-1661450159298-d58a3b98f3a4?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                },
                {
                    name: 'Ayurvedic Creams',
                    image: 'https://images.unsplash.com/photo-1637194502327-c99c94943680?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                },
                {
                    name: 'Aromatherapy Candles',
                    image: 'https://images.unsplash.com/photo-1690571561842-65bf9a3c173b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                }
            ],
            accentColor: 'rose-400'
        }
    ]

    // Create a ref and state for each category
    const scrollRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [arrowVisibility, setArrowVisibility] = useState<Array<{
        showLeft: boolean;
        showRight: boolean;
    }>>(categories.map(() => ({ showLeft: false, showRight: true })));

    // Initialize the refs array with null values
    if (scrollRefs.current.length !== categories.length) {
        scrollRefs.current = Array(categories.length).fill(null);
    }

    // Proper ref callback function
    const setScrollRef = (index: number) => (el: HTMLDivElement | null) => {
        scrollRefs.current[index] = el;
    };

    const scroll = (direction: 'left' | 'right', index: number) => {
        const scrollRef = scrollRefs.current[index];
        if (!scrollRef) return;

        const { clientWidth } = scrollRef;
        const scrollAmount = direction === 'left' ? -clientWidth : clientWidth;

        scrollRef.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });

        // Update arrow visibility after scroll completes
        setTimeout(() => {
            updateArrowVisibility(index);
        }, 500);
    }

    const updateArrowVisibility = (index: number) => {
        const scrollRef = scrollRefs.current[index];
        if (!scrollRef) return;

        const { scrollLeft, clientWidth, scrollWidth } = scrollRef;
        setArrowVisibility(prev => {
            const newVisibility = [...prev];
            newVisibility[index] = {
                showLeft: scrollLeft > 0,
                showRight: scrollLeft + clientWidth < scrollWidth
            };
            return newVisibility;
        });
    }

    const handleScroll = (index: number) => {
        updateArrowVisibility(index);
    }


    return (
        <div className="space-y-8 p-4 md:p-6 w-full max-w-7xl mx-auto">
            {categories.map((category, index) => {
                const { showLeft, showRight } = arrowVisibility[index];

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
                                    ref={setScrollRef(index)}
                                    className="flex space-x-4 md:space-x-8 overflow-x-hidden pb-6 scrollbar-hide px-2"
                                    onScroll={() => handleScroll(index)}
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
                                                <Image
                                                    src={item.image}
                                                    alt={item.name}
                                                    width={208}
                                                    height={208}
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
                                {showLeft && (
                                    <motion.button
                                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 md:p-3 rounded-full shadow-lg z-20 hover:shadow-xl transition-all"
                                        whileHover={{
                                            scale: 1.1,
                                            backgroundColor: 'bg-indigo-100'
                                        }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => scroll('left', index)}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                    >
                                        <ChevronLeft
                                            className="text-gray-700 w-5 h-5 md:w-6 md:h-6"
                                            strokeWidth={2.5}
                                        />
                                    </motion.button>
                                )}
                                {showRight && (
                                    <motion.button
                                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 md:p-3 rounded-full shadow-lg z-20 hover:shadow-xl transition-all"
                                        whileHover={{
                                            scale: 1.1,
                                            backgroundColor: 'bg-indigo-100'
                                        }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => scroll('right', index)}
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