import Link from 'next/link';
import Image from 'next/image';

const categories = [
  { 
    name: 'PET Bottles', 
    href: '/products/pet-bottle', 
    description: 'Durable and clear bottles for beverages, oils, and more.',
    image: '/assets/products/HomeProdImg/HomePetBottle.png'
  },
  { 
    name: 'PET Jars', 
    href: '/products/pet-jar', 
    description: 'Wide-mouthed jars perfect for food storage, confectionery, and spices.',
    image: '/assets/products/HomeProdImg/HomePetJar.png'
  },
  { 
    name: 'HDPE Bottles', 
    href: '/products/hdpe-bottle', 
    description: 'High-strength, chemical-resistant bottles for industrial use.',
    image: '/assets/products/HomeProdImg/HomehdpeBtl.png'
  },
  { 
    name: 'HDPE Jars', 
    href: '/products/hdpe-jar', 
    description: 'Robust jars for powders, granules, and other industrial applications.',
    image: '/assets/products/HomeProdImg/5LHdpeJar(a).jpeg'
  },
];

export default function ProductsPage() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Product Categories
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Explore our diverse range of packaging solutions.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
          {categories.map((category) => (
            <Link key={category.name} href={category.href}>
              <div className="group h-full flex flex-col sm:flex-row bg-gray-50 rounded-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 ease-in-out overflow-hidden">
                <div className="relative w-full h-64 sm:h-auto sm:w-1/2">
                  <Image
                    src={category.image}
                    alt={category.name}
                    layout="fill"
                    objectFit="contain"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-center p-6 w-full sm:w-2/3">
                  <h3 className="text-xl font-semibold text-gray-900">{category.name}</h3>
                  <p className="mt-2 text-gray-600">{category.description}</p>
                  <span className="mt-4 text-indigo-600 font-semibold">View Products &rarr;</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
