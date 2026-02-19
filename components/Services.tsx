import Image from 'next/image';
import Link from 'next/link';

interface Post {
  id: number;
  cover: string;
  title: string;
  sumary: string;
}

interface BlogCardProps {
  cover: string;
  title: string;
  sumary: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ cover, title, sumary }) => {
  return (
    <div className="bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-900 px-px rounded-xl">
      <div className="rounded-[11px] bg-gray-200 dark:bg-gray-800 relative">
        <Image
          src={cover}
          alt="article cover"
          width={1400}
          height={800}
          className="rounded-[7px] w-full aspect-video object-cover"
        />
      </div>
      <div className="mt-14 px-5 pb-5 space-y-4">
        <h1 className="text-gray-900 dark:text-white text-xl font-semibold">{title}</h1>
        <p className="text-gray-700 dark:text-gray-300 line-clamp-4">{sumary}</p>
        <Link href="#" className="flex items-center gap-x-2 text-blue-600 dark:text-blue-400">
          Read more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};
const posts: Post[] = [
  {
    id: 1,
    cover: '/carre_mural.jpg',
    title: 'Wall Tile Installation',
    sumary:
      'Bathroom wall tiles: Specializing in tile installation on bathroom walls, including showers and bathtubs. Kitchen backsplashes: Installation of mosaic tiles or decorative tiles on kitchen backsplashes.',
  },
  {
    id: 2,
    cover: '/carre_sol.webp',
    title: 'Laying Floor Tiles',
    sumary:
      'Indoor floor tiling: Laying tiles on indoor floors in areas such as kitchens, living rooms, and hallways. Outdoor floor tiling: Specializing in laying tiles on terraces, balconies, and other outdoor spaces.',
  },
  {
    id: 3,
    cover: '/pose_marbre.jpg',
    title: 'Marble Installation',
    sumary:
      'Marble flooring: Installation of marble tiles on floors, often used in entrance halls, living rooms, and luxury bathrooms. Marble countertops: Installation of marble slabs on kitchen and bathroom countertops. Marble for stairs: Installation of marble steps and risers for indoor or outdoor stairs. Luxury Tiles and Marble High-end marble installation: Installation of high-quality marble for luxury projects, often in high-end residences or hotels. Custom and designer tiles: Design and installation of custom tiles with unique patterns or rare materials.',
  },
];
const Services: React.FC = () => {
  return (
    <section className="py-20">
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
          <div className="flex justify-center mt-2">
            <Link
              href="#"
              className="px-5 py-2.5 rounded-xl bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-blue-600 dark:text-gray-300 flex items-center gap-x-3"
            >
              See More
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
          {posts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;
