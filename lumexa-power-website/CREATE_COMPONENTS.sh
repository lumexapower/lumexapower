#!/bin/bash

# This script creates all necessary component files for the Lumexa Power website
# Run this after downloading the project

cd "$(dirname "$0")"

echo "Creating component files..."

# Create Header component
cat > components/Header.tsx << 'HEADER'
'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed w-full top-0 z-50 bg-white shadow-md">
      <nav className="container-custom py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-lumexa-navy">
              LUMEXA <span className="text-lumexa-gold">POWER</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/technology" className="text-gray-700 hover:text-lumexa-navy transition">Technology</Link>
            <Link href="/markets" className="text-gray-700 hover:text-lumexa-navy transition">Markets</Link>
            <Link href="/about" className="text-gray-700 hover:text-lumexa-navy transition">About</Link>
            <Link href="/investors" className="text-gray-700 hover:text-lumexa-navy transition">Investors</Link>
            <Link href="/news" className="text-gray-700 hover:text-lumexa-navy transition">News</Link>
            <Link href="/contact" className="btn-primary text-sm px-6 py-2">Contact Us</Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link href="/technology" className="text-gray-700 hover:text-lumexa-navy">Technology</Link>
              <Link href="/markets" className="text-gray-700 hover:text-lumexa-navy">Markets</Link>
              <Link href="/about" className="text-gray-700 hover:text-lumexa-navy">About</Link>
              <Link href="/investors" className="text-gray-700 hover:text-lumexa-navy">Investors</Link>
              <Link href="/news" className="text-gray-700 hover:text-lumexa-navy">News</Link>
              <Link href="/contact" className="btn-primary text-sm px-6 py-2 text-center">Contact Us</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
HEADER

# Create Footer component
cat > components/Footer.tsx << 'FOOTER'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-lumexa-navy text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-lumexa-gold">LUMEXA POWER</h3>
            <p className="text-gray-300 mb-4">Constant as the Sun</p>
            <p className="text-sm text-gray-400">
              World's first non-tracking 24/7 solar thermal power system
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/about" className="hover:text-lumexa-gold transition">About Us</Link></li>
              <li><Link href="/team" className="hover:text-lumexa-gold transition">Team</Link></li>
              <li><Link href="/news" className="hover:text-lumexa-gold transition">News</Link></li>
              <li><Link href="/contact" className="hover:text-lumexa-gold transition">Contact</Link></li>
            </ul>
          </div>

          {/* Technology Links */}
          <div>
            <h4 className="font-semibold mb-4">Technology</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/technology" className="hover:text-lumexa-gold transition">How It Works</Link></li>
              <li><Link href="/markets" className="hover:text-lumexa-gold transition">Markets</Link></li>
              <li><Link href="/investors" className="hover:text-lumexa-gold transition">Investors</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-300">
              <li>📧 info@lumexapower.com</li>
              <li>📍 Abu Dhabi, UAE</li>
              <li className="pt-4 flex space-x-4">
                <a href="https://linkedin.com" className="hover:text-lumexa-gold transition">LinkedIn</a>
                <a href="https://twitter.com" className="hover:text-lumexa-gold transition">Twitter</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>© 2026 Lumexa Power Inc. All rights reserved.</p>
          <p className="mt-2">
            <Link href="/privacy" className="hover:text-lumexa-gold">Privacy Policy</Link>
            {' · '}
            <Link href="/terms" className="hover:text-lumexa-gold">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
FOOTER

echo "✅ Header and Footer components created"
echo "📝 Now run the Python script to create homepage components..."

