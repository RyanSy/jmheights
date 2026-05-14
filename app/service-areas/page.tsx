import Link from 'next/link';
import { locationData } from '@/data/locations';

export default function ServiceAreasPage() {
  return (
    <div className="container mx-auto py-20">
      <h1 className="text-3xl font-bold mb-10 text-center">Our Service Areas</h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        {Object.entries(locationData).map(([county, countyData]) => (
          <div key={county} className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold capitalize mb-4 border-b pb-2">
              {county.replace('-', ' ')}
            </h2>
            <ul className="grid grid-cols-2 gap-2">
              {countyData.towns.map((town: { slug: string; name: string }) => (
                <li key={town.slug}>
                  <Link href={`/service-areas/${town.slug}`} className="text-blue-600 hover:underline">
                    {town.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}