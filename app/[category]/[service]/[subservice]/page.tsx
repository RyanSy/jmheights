import { getServiceData } from '@/lib/services';
import ServiceTemplate from '@/components/templates/ServiceTemplate';

export default async function SubServicePage({ params }: { params: { category: string, service: string, subservice: string } }) {
  const data = await getServiceData(params.subservice);
  
  return (
    <ServiceTemplate 
      title={data.title}
      content={data.content}
      parentPath={`/${params.category}/${params.service}`}
    />
  );
}