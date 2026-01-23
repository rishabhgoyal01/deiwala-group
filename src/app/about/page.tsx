import { Building, Award, PackageCheck, Factory, GlassWater, Droplet, CookingPot, FlaskConical } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  const industries = [
    {
      name: 'Water & Beverages',
      description: 'Precision-made bottles for mineral water and juice packing.',
      icon: <GlassWater className="w-10 h-10 text-[#003366]" />,
    },
    {
      name: 'Edible Oils',
      description: 'Leak-proof and sturdy containers optimized for oil packaging.',
      icon: <Droplet className="w-10 h-10 text-[#003366]" />,
    },
    {
      name: 'Food & Preservatives',
      description: 'Specialized jars for pickles, spices, and dry food storage.',
      icon: <CookingPot className="w-10 h-10 text-[#003366]" />,
    },
    {
      name: 'Industrial Chemicals',
      description: 'High-strength HDPE solutions for chemical and cleaning products.',
      icon: <FlaskConical className="w-10 h-10 text-[#003366]" />,
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            About Deiwala Plastic Products
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Pioneering Packaging Excellence Since 2000
          </p>
        </div>
      </div>

      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-[#003366] tracking-wide uppercase">Our Heritage</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
              A Legacy of Quality and Trust
            </p>
          </div>
          <div className="mt-12 text-lg text-gray-600 text-center max-w-3xl mx-auto">
            <p>
              Established in the year <strong className="font-bold text-gray-900">2000</strong>, Deiwala Plastic Products has grown from a local factory into a leading manufacturer of premium plastic packaging solutions. With over a <strong className="font-bold text-gray-900">quarter-century of experience</strong>, we have perfected the art of creating durable, food-grade containers that meet the highest industrial standards.
            </p>
          </div>
          <div className="mt-12">
            <Image
              src="/assets/products/AboutusBottlejar.png"
              alt="Deiwala Plastic Products"
              width={1200}
              height={800}
              className="mx-auto rounded-lg shadow-lg w-full max-w-4xl h-auto"
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-[#003366] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            <div className="flex flex-col items-center">
              <PackageCheck className="w-12 h-12 mb-2" />
              <p className="text-4xl font-bold">100+</p>
              <p className="text-lg">Product Varieties</p>
            </div>
            <div className="flex flex-col items-center">
              <Factory className="w-12 h-12 mb-2" />
              <p className="text-4xl font-bold">4</p>
              <p className="text-lg">Primary Categories (PET/HDPE Bottles & Jars)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Industries Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-[#003366] tracking-wide uppercase">Diverse Industry Expertise</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
              Serving a Multitude of Sectors
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <div key={industry.name} className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg">
                {industry.icon}
                <h3 className="mt-4 text-xl font-semibold text-gray-900">{industry.name}</h3>
                <p className="mt-2 text-gray-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
