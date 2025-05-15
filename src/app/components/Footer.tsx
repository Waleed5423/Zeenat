"use client"
import Link from 'next/link'
import { Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-pink-500 to-purple-700 text-white pt-12 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="md:col-span-2">
                        <h3 className="text-xl font-bold mb-4">Zeenat</h3>
                        <p className="mb-4">
                            Empowering women entrepreneurs through a safe, verified marketplace.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" aria-label="Facebook">
                                <Facebook className="h-6 w-6 hover:text-pink-200 transition-colors" />
                            </Link>
                            <Link href="#" aria-label="Instagram">
                                <Instagram className="h-6 w-6 hover:text-pink-200 transition-colors" />
                            </Link>
                            <Link href="#" aria-label="Twitter">
                                <Twitter className="h-6 w-6 hover:text-pink-200 transition-colors" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">About Zeenat</h4>
                        <ul className="space-y-2">
                            <li><Link href="/about" className="hover:text-pink-200 transition-colors">Our Mission</Link></li>
                            <li><Link href="/team" className="hover:text-pink-200 transition-colors">Our Team</Link></li>
                            <li><Link href="/contact" className="hover:text-pink-200 transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Support</h4>
                        <ul className="space-y-2">
                            <li><Link href="/faq" className="hover:text-pink-200 transition-colors">FAQ</Link></li>
                            <li><Link href="/privacy" className="hover:text-pink-200 transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-pink-200 transition-colors">Terms of Service</Link></li>
                            <li><Link href="/community" className="hover:text-pink-200 transition-colors">Community Guidelines</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="mt-8 pt-8 border-t border-white/20">
                    <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
                    <div className="flex flex-col space-y-2">
                        <div className="flex items-center">
                            <Mail className="h-5 w-5 mr-2" />
                            <span>support@zeenat.com</span>
                        </div>
                        <div className="flex items-center">
                            <Phone className="h-5 w-5 mr-2" />
                            <span>+92 300 1234567</span>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 text-center text-sm text-white/80">
                    <p>© 2023 Zeenat. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer