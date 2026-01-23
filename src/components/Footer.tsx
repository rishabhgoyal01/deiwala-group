import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12 border-t-4 border-blue-600">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Left Column: Company Navigation Buttons */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-bold uppercase tracking-wider mb-2">Company</h3>
          <div className="flex flex-col gap-3">
            <Link href="/" className="bg-blue-800 hover:bg-blue-700 text-center py-2 px-4 rounded transition w-full md:w-64">
              Home
            </Link>
            <Link href="/products" className="bg-blue-800 hover:bg-blue-700 text-center py-2 px-4 rounded transition w-full md:w-64">
              Product
            </Link>
            <Link href="/about" className="bg-blue-800 hover:bg-blue-700 text-center py-2 px-4 rounded transition w-full md:w-64">
              About Us
            </Link>
          </div>
        </div>

        {/* Right Column: Factory Address & Contact */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-bold uppercase tracking-wider mb-2">Factory Details</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="text-blue-400 shrink-0 mt-1" size={20} />
              <p className="text-gray-200">
                <strong>Address:</strong> Dynamic engineer, F-23, Chambal Ind Area, 
                Kota Industrial Area, Kota, Rajasthan 324003
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-blue-400 shrink-0" size={20} />
              <p className="text-gray-200">
                <strong>Phone No:</strong> <a href="tel:+919829037230" className="hover:text-blue-300 transition">+91 9829037230</a>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-blue-400 shrink-0" size={20} />
              <p className="text-gray-200">
                <strong>Email:</strong> <a href="mailto:deiwalag04@gmail.com" className="hover:text-blue-300 transition">deiwalag04@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-12 pt-6 border-t border-blue-800 text-center text-sm text-blue-300">
        &copy; 2026 Deiwala Plastic Bottle. All rights reserved.
      </div>
    </footer>
  );
}
