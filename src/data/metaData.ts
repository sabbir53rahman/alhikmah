import { Metadata } from 'next';

export function generateMetadata(path: string): Metadata {
  const pathSegments = path
    .split('/')
    .filter(Boolean)
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1));

  const title = pathSegments.length > 0 
    ? `${pathSegments.join(' | ')} | ব্লগ সমূহ`
    : 'ব্লগ সমূহ';

  const description = pathSegments.length > 0
    ? `Explore ${pathSegments.join(' ')} on our blog`
    : 'Explore our collection of insightful blog posts';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}