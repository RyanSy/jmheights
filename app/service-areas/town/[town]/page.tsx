import { locationData } from '@/data/locations';
import { notFound } from 'next/navigation';
import ContactSection from '@/components/sections/ContactSection';

// 1. Update the Props type to reflect that params is now a Promise
interface PageProps {
  params: Promise<{ town: string }>;
}

// 2. Change the component to an async function
export default async function TownPage({ params }: PageProps) {
  // 3. Await the params before accessing the town slug
  const { town: townSlug } = await params;

  const allTowns = Object.values(locationData).flatMap(c => c.towns);
  
  // 4. Use the awaited slug to find the town data
  const town = allTowns.find(t => t.slug === townSlug);

  if (!town) return notFound();

  return (
    <main className="pt-24">
      <div className="bg-[#0B1D3A] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold font-display uppercase tracking-tight">
            Plumbing & HVAC Services in {town.name}, NJ
          </h1>
          <p className="mt-2 text-orange-400 font-medium">
            Proudly serving Zip Codes: {town.zipCodes.join(', ')}
          </p>
        </div>
      </div>

      <section className="py-12 container mx-auto px-4">
        <div className="prose lg:prose-xl max-w-none">
          <h2 className="text-[#0B1D3A]">Local Expertise in {town.name}</h2>
          <p>
            At JM Heights Cooling Corp., we understand the specific needs of residents near <strong>{town.landmarks}</strong>. 
          </p>
          <div className="whitespace-pre-line">
            {town.content}
          </div>
          <p className="mt-6">
            Whether you need an emergency furnace repair or a new water heater installation, 
            our technicians are familiar with the building codes and local requirements of {town.name}.
          </p>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}

// 5. generateStaticParams remains largely the same but ensures proper type mapping
export async function generateStaticParams() {
  const towns = Object.values(locationData).flatMap(c => 
    c.towns.map(t => ({ 
      town: t.slug 
    }))
  );

  return towns;
}