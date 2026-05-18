import { getServiceData } from '@/lib/services';
import ServiceTemplate from '@/components/templates/ServiceTemplate';

interface PageProps {
  params: Promise<{
    category: string;
    service: string;
    subservice: string;
  }>;
}

export const runtime = 'edge';

export default async function SubServicePage({ params }: PageProps) {
  const { category, service, subservice } = await params;
  const data = getServiceData(subservice);

  return (
    <ServiceTemplate
      title={data.title}
      content={data.content}
      parentPath={`/${category}/${service}`}
    />
  );
}
