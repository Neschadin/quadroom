import { PageAboutUs } from '@/src/pages';
import { mockData } from './mock-data';

// fetch simulation
const getData = async () => Promise.resolve(mockData);

export default async function AboutUs() {
  const data = await getData();

  return <PageAboutUs data={data} />;
}
