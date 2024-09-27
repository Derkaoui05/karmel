import Image from "next/image";

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
            We help drive your business forward faster
          </h1>
          <p>
            Welcome to{" "}
            <span className="font-semibold">Tiles & Marble Pros</span>, your
            trusted experts in laying premium tiles and marble flooring. With
            years of experience, we take pride in delivering top-notch
            craftsmanship, precision, and attention to detail in every project
            we undertake.
          </p>
          <p>
            Our services include custom tile layouts, intricate marble patterns,
            and a wide selection of materials to meet your unique style
            preferences and needs. Contact us today to transform your space with
            timeless elegance and durability.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-x-4">
              <span className="w-5 h-5 text-sm flex items-center justify-center rounded-full bg-emerald-700 dark:bg-emerald-600 text-white">
                ✓
              </span>
              Web site Analysis
            </li>
            <li className="flex items-center gap-x-4">
              <span className="w-5 h-5 text-sm flex items-center justify-center rounded-full bg-emerald-700 dark:bg-emerald-600 text-white">
                ✓
              </span>
              Free optimazation.
            </li>
            <li className="flex items-center gap-x-4">
              <span className="w-5 h-5 text-sm flex items-center justify-center rounded-full bg-emerald-700 dark:bg-emerald-600 text-white">
                ✓
              </span>
              Content Optimization.
            </li>
            <li className="flex items-center gap-x-4">
              <span className="w-5 h-5 text-sm flex items-center justify-center rounded-full bg-emerald-700 dark:bg-emerald-600 text-white">
                ✓
              </span>
              Web site Analysis
            </li>
            <li className="flex items-center gap-x-4">
              <span className="w-5 h-5 text-sm flex items-center justify-center rounded-full bg-emerald-700 dark:bg-emerald-600 text-white">
                ✓
              </span>
              Free optimazation.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
