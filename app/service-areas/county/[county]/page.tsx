import { locationData } from '@/data/locations';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ county: string }>;
}

export default async function CountyPage({ params }: PageProps) {
  const { county } = await params;
  const data = locationData[county as keyof typeof locationData];

  if (!data) return notFound();

  return (
    <main className="pt-24 pb-12">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-blue-900 mb-4">{data.name} Service Area</h1>
        <p className="text-xl text-gray-600 mb-8">{data.description}</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {data.towns.map((town) => (
            <Link 
              key={town.slug} 
              href={`/service-areas/${town.slug}`}
              className="p-4 border rounded-lg hover:bg-blue-50 transition"
            >
              {town.name}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return Object.keys(locationData).map((county) => ({ county }));
}