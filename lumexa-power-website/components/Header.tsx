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
