import Image from 'next/image';

export default function About() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col md:flex-row gap-16">
        <div className="flex group md:flex-1">
          <Image
            src="/about.jpg"
            alt="About Image"
            width={300}
            height={300}
            className="w-full md:h-full zoom-in-90 object-cover rounded-lg"
          />
        </div>
        <div className="md:w-1/2 space-y-12 text-gray-700 dark:text-gray-300">
          <h1 className="text-gray-900 dark:text-white font-semibold text-2xl sm:text-3xl md:text-4xl">
            Craftsmanship That Brings Your Spaces to Life
          </h1>
          <p>
            Welcome to <span className="font-semibold">Tiles & Marble Pros</span>, specialists in
            professional tile and marble installation. With years of hands-on experience, we deliver
            precision, durability, and refined finishes tailored to each project.
          </p>

          <p>
            From residential homes to commercial spaces, we handle everything from floor tiling and
            wall installations to custom marble designs. Our commitment to quality materials,
            attention to detail, and clean execution ensures results that are both elegant and built
            to last.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-x-4">
              <span className="w-5 h-5 text-sm flex items-center justify-center rounded-full bg-emerald-700 dark:bg-emerald-600 text-white">
                ✓
              </span>
              Professional Tile Installation (Walls & Floors)
            </li>

            <li className="flex items-center gap-x-4">
              <span className="w-5 h-5 text-sm flex items-center justify-center rounded-full bg-emerald-700 dark:bg-emerald-600 text-white">
                ✓
              </span>
              Premium Marble Finishing & Custom Designs
            </li>

            <li className="flex items-center gap-x-4">
              <span className="w-5 h-5 text-sm flex items-center justify-center rounded-full bg-emerald-700 dark:bg-emerald-600 text-white">
                ✓
              </span>
              Interior & Exterior Projects
            </li>

            <li className="flex items-center gap-x-4">
              <span className="w-5 h-5 text-sm flex items-center justify-center rounded-full bg-emerald-700 dark:bg-emerald-600 text-white">
                ✓
              </span>
              Precision Craftsmanship & Clean Execution
            </li>

            <li className="flex items-center gap-x-4">
              <span className="w-5 h-5 text-sm flex items-center justify-center rounded-full bg-emerald-700 dark:bg-emerald-600 text-white">
                ✓
              </span>
              Durable, Elegant & Long-Lasting Results
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
