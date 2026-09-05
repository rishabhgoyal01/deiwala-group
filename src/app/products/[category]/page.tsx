import type { Metadata } from 'next';
import products from '@/data/products.json';
import { Product } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

export function generateStaticParams() {
  const categories = Array.from(new Set(products.map((product) => product.category)));
  return categories.map((category) => ({ category }));
}

export function generateMetadata({ params }: CategoryPageProps): Metadata {
  const name = params.category
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  return {
    title: name,
    description: `${name} manufactured by Deiwala Plastic Products, Kota. Browse available volumes and neck sizes.`,
    alternates: { canonical: `/products/${params.category}` },
  };
}

type CategoryPageProps = {
  params: {
    category: string;
  };
};

export default function CategoryPage({ params }: CategoryPageProps) {
  const { category } = params;
  const filteredProducts: Product[] = products.filter(
    (product) => product.category === category
  );

  const categoryName = category.replace('-', ' ').toUpperCase();

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/products" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600">
                  <svg className="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                  </svg>
                  Products
                </Link>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">{categoryName}</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {categoryName}
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Browse our selection of {categoryName.toLowerCase()}.
          </p>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <div key={product.id} className="border rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-64 w-full bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{product.title}</h3>
                  <p className="mt-2 text-gray-600">Volume: {product.volume}</p>
                  <p className="text-gray-600">Neck Size: {product.neckSize}</p>
                  {product.features && (
                    <p className="text-sm text-gray-500 mt-2">{product.features}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center mt-12">
            <p className="text-lg text-gray-500">No products found in this category yet.</p>
            <Link href="/products">
              <span className="text-blue-600 hover:text-blue-700">Go back to all categories</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
