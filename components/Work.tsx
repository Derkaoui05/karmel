import { ArrowUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { worksData } from '../data/work';

const Work = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-5">
          <span className="pl-5 relative before:absolute before:w-4 before:h-0.5 before:rounded-md before:left-0 before:top-1/2 before:bg-sky-700 dark:before:bg-sky-600 text-sky-700 dark:text-sky-500">
            Our Work
          </span>

          <h2 className="text-3xl font-semibold text-blue-950 dark:text-gray-200 md:text-4xl xl:text-5xl leading-tight">
            Explore Our Recent Projects
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {worksData.map((work) => (
            <div key={work.workId} className="relative aspect-[5/3.8] rounded-xl overflow-hidden">
              <Image src={work.workImage} alt={work.workName} fill className="object-cover" />

              {/* Permanent Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end p-6 text-white">
                <h3 className="font-semibold text-xl">{work.workName}</h3>

                <p className="text-sm mt-2 line-clamp-2 text-gray-200">{work.workDescription}</p>

                <Link
                  href={`/work/${work.workId}`}
                  className="mt-3 flex text-sm font-medium hover:underline underline-offset-4"
                >
                  View Details{' '}
                  <ArrowUp className="ml-1 rotate-45" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
