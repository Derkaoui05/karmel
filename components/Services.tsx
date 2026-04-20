import Image from 'next/image';
import Link from 'next/link';

interface Service {
  id: number;
  cover: string;
  title: string;
  summary: string;
  href: string;
}

interface ServiceCardProps {
  cover: string;
  title: string;
  summary: string;
  href: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ cover, title, summary, href }) => {
  return (
    <article className="bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-900 rounded-xl overflow-hidden">
      <div className="bg-gray-200 dark:bg-gray-800 relative">
        <Image
          src={cover}
          alt={`${title} service cover`}
          width={1400}
          height={800}
          className="w-full aspect-video object-cover"
        />
      </div>

      <div className="p-5 space-y-4">
        <h3 className="text-gray-900 dark:text-white text-xl font-semibold">{title}</h3>
        <p className="text-gray-700 dark:text-gray-300 line-clamp-4">{summary}</p>

        <Link href={href} className="inline-flex items-center gap-x-2 text-blue-600 dark:text-blue-400 font-medium">
          View details
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
            <path
              fillRule="evenodd"
              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </article>
  );
};

const services: Service[] = [
  {
    id: 1,
    cover: '/carre_mural.jpg',
    title: 'Wall Tile Installation',
    summary:
      'Professional tile installation for bathrooms, showers, and kitchen backsplashes with clean alignment and durable finishes.',
    href: '/services/wall-tile-installation',
  },
  {
    id: 2,
    cover: '/carre_sol.webp',
    title: 'Floor Tile Installation',
    summary:
      'Indoor and outdoor floor tiling for kitchens, living spaces, terraces, and balconies, installed for long-term performance.',
    href: '/services/floor-tile-installation',
  },
  {
    id: 3,
    cover: '/pose_marbre.jpg',
    title: 'Marble Installation',
    summary:
      'Premium marble solutions for floors, stairs, countertops, and custom luxury details tailored to your style and space.',
    href: '/services/marble-installation',
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-14">
        <div className="text-center max-w-2xl mx-auto space-y-5">
          <span
            className="relative text-sky-700 dark:text-sky-500 px-3
              before:content-[''] before:inline-block before:w-6 before:h-0.5 before:bg-sky-700 dark:before:bg-sky-600 before:align-middle before:mr-3
              after:content-[''] after:inline-block after:w-6 after:h-0.5 after:bg-sky-700 dark:after:bg-sky-600 after:align-middle after:ml-3"
          >
            Our Services
          </span>

          <h2 className="text-3xl font-semibold text-blue-950 dark:text-gray-200 md:text-4xl xl:text-5xl leading-tight">
            What We Offer
          </h2>

          <p className="text-gray-600 dark:text-gray-400">
            Specialized tile and marble services delivered with precision, reliability, and premium materials.
          </p>

          <div className="flex justify-center mt-2">
            <Link
              href="/services"
              className="px-5 py-2.5 rounded-xl bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-blue-600 dark:text-gray-300 inline-flex items-center gap-x-3"
            >
              See all services
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;