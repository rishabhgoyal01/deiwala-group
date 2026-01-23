"use client";

import Image from 'next/image';
import Link from 'next/link';

// Helper object to map category IDs to user-friendly names, images, and descriptions
const categoryDetails = {
  'pet-jar': {
    name: 'PET Jars',
    image: '/assets/products/HomeProdImg/HomePetJar.png',
    description: 'Versatile and clear jars for food products, cosmetics, and more.',
  },
  'pet-bottle': {
    name: 'PET Bottles',
    image: '/assets/products/HomeProdImg/HomePetBottle.png',
    description: 'Lightweight bottles for beverages, oils, and household liquids.',
  },
  'hdpe-jar': {
    name: 'HDPE Jars',
    image: '/assets/products/HomeProdImg/5LHdpeJar(a).jpeg',
    description: 'Durable, chemical-resistant jars for industrial and bulk items.',
  },
  'hdpe-bottle': {
    name: 'HDPE Bottles',
    image: '/assets/products/HomeProdImg/HomehdpeBtl.png',
    description: 'Tough bottles for detergents, chemicals, and pharmaceuticals.',
  },
};

const ProductCategories = () => {
  // Extract the category keys to map over them
  const categories = Object.keys(categoryDetails);

  return (
    <div className="bg-white py-8 sm:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Products
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            We specialize in high-quality plastic packaging solutions. Below are our main product categories.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((key) => {
            const category = categoryDetails[key];
            return (
              <Link href="/products" key={key}>
                <div className="group flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg border border-transparent hover:shadow-lg hover:border-gray-200 transition-all duration-300">
                  <div className="relative h-64 w-full max-w-xs mx-auto mb-4">
                    <Image
                      src={category.image}
                      alt={category.name}
                      layout="fill"
                      objectFit="contain"
                      className="transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {category.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {category.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <Link href="/products">
            <span className="inline-block rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              View All Products
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;
