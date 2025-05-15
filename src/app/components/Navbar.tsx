"use client"
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState, ReactNode } from 'react'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="sticky top-0 z-50 bg-gradient-to-r from-pink-400 to-purple-800 shadow-lg backdrop-blur-sm bg-opacity-80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <span className="text-xl font-bold text-white tracking-tight">Zeenat</span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden text-md md:flex items-center space-x-8">
                        <NavLink href="/">Home</NavLink>
                        <NavLink href="/categories">Categories</NavLink>
                        <NavLink href="/community">Community</NavLink>
                        <NavLink href="/why-zeenat">Why Zeenat?</NavLink>

                        {/* Sign Up Button */}
                        <Link
                            href="/signup"
                            className="px-4 py-2 rounded-md bg-white text-pink-600 font-medium shadow-sm hover:bg-opacity-90 transition-all duration-200 transform hover:-translate-y-0.5"
                        >
                            Sign Up
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none"
                        >
                            {isOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden bg-gradient-to-b from-pink-500 to-purple-500">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <MobileNavLink href="/" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
                        <MobileNavLink href="/categories" onClick={() => setIsOpen(false)}>Categories</MobileNavLink>
                        <MobileNavLink href="/community" onClick={() => setIsOpen(false)}>Community</MobileNavLink>
                        <MobileNavLink href="/why-zeenat" onClick={() => setIsOpen(false)}>Why Zeenat?</MobileNavLink>
                        <MobileNavLink href="/signup" onClick={() => setIsOpen(false)} className="bg-white text-pink-600 font-bold">
                            Sign Up
                        </MobileNavLink>
                    </div>
                </div>
            )}
        </nav>
    )
}

// Type definitions for NavLink props
interface NavLinkProps {
    href: string
    children: ReactNode
}

// Reusable NavLink component for desktop
const NavLink = ({ href, children }: NavLinkProps) => (
    <Link href={href} className="relative text-white hover:text-white font-medium transition-colors duration-200 group">
        {children}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
    </Link>
)

// Type definitions for MobileNavLink props
interface MobileNavLinkProps extends NavLinkProps {
    onClick: () => void
    className?: string
}

// Reusable NavLink component for mobile
const MobileNavLink = ({ href, children, onClick, className = '' }: MobileNavLinkProps) => (
    <Link
        href={href}
        onClick={onClick}
        className={`block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-pink-600 transition-colors ${className}`}
    >
        {children}
    </Link>
)