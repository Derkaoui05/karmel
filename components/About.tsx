import Image from 'next/image';

const highlights = [
  'Professional tile installation (walls & floors)',
  'Premium marble finishing and custom designs',
  'Interior and exterior projects',
  'Precision craftsmanship with clean execution',
  'Durable, elegant, and long-lasting results',
];

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="flex">
          <Image
            src="/about.jpg"
            alt="Tile and marble installation professionals working on a project"
            width={900}
            height={900}
            sizes="(min-width: 1024px) 42rem, (min-width: 768px) 50vw, 100vw"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        <div className="space-y-6 text-gray-700 dark:text-gray-300">
          <p className="text-sm font-semibold tracking-wide uppercase text-emerald-700 dark:text-emerald-500">
            About Us
          </p>

          <h2 className="text-gray-900 dark:text-white font-semibold text-2xl sm:text-3xl md:text-4xl leading-tight">
            Craftsmanship That Brings Your Spaces to Life
          </h2>

          <p>
            At <span className="font-semibold">Tiles & Marble Pros</span>, we specialize in high-quality tile and
            marble installation for residential and commercial spaces. Every project is handled with precision,
            durable materials, and attention to detail.
          </p>

          <p>
            From wall tiling and flooring to custom marble features, we deliver finishes that are both elegant and
            built to perform over time. Our goal is simple: clean work, reliable timelines, and results you are proud
            to show.
          </p>

          <ul className="space-y-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 w-5 h-5 text-xs flex items-center justify-center rounded-full bg-emerald-700 dark:bg-emerald-600 text-white">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}