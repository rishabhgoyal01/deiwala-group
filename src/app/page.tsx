import ImageCarousel from '@/components/ImageCarousel';
import Link from 'next/link';
import ProductCategories from '@/components/ProductCategories';

export default function HomePage() {
  return (
    <>
      <ImageCarousel />
      <main className="flex-grow flex flex-col items-center bg-slate-50 px-4 sm:px-6 lg:px-8">
        <div className="text-center py-8 sm:py-12">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Welcome to Deiwala Plastic Products</h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">Your trusted partner for premium PET & HDPE packaging solutions.</p>
        </div>
        
        <ProductCategories />

        {/* About Us Section */}
        <section className="w-full max-w-5xl mx-auto my-8 sm:my-12 py-8 bg-white rounded-lg shadow-md text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">About Our Legacy</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Established in <strong className="font-semibold">2000</strong>, Deiwala Plastic Products has grown from a local factory into a leading manufacturer. With over a <strong className="font-semibold">quarter-century of experience</strong>, we create durable, food-grade containers that meet the highest industrial standards.
          </p>
          <Link href="/about">
            <span className="inline-block rounded-md bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
              Read Our Story
            </span>
          </Link>
        </section>
      </main>
    </>
  );
}
