'use client';

import Link from 'next/link';
import { Package, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#003366] text-white py-4 px-6 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <Package className="w-6 h-6" />
          <span>Deiwala Plastic</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-medium">
          <Link href="/" className="hover:text-blue-200 transition-colors">Home</Link>
          <Link href="/products" className="hover:text-blue-200 transition-colors">Products</Link>
          <Link href="/about" className="hover:text-blue-200 transition-colors">About</Link>
          <Link href="/contact" className="hover:text-blue-200 transition-colors">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <div className="flex flex-col space-y-4 font-medium">
            <Link href="/" className="hover:text-blue-200 transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/products" className="hover:text-blue-200 transition-colors" onClick={() => setIsMenuOpen(false)}>Products</Link>
            <Link href="/about" className="hover:text-blue-200 transition-colors" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link href="/contact" className="hover:text-blue-200 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}