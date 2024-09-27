import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <>
      <section className="py-4 bg-white dark:bg-gray-950 md:mt-10 mt-5 lg:mt-0">
        <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 grid lg:grid-cols-2 lg:items-center gap-10">
          <div className="flex flex-col space-y-8 sm:space-y-10 lg:items-center text-center lg:text-left max-w-2xl md:max-w-3xl mx-auto">
            <h1 className=" font-semibold leading-tight text-teal-950 dark:text-white text-4xl sm:text-5xl lg:text-6xl">
              Well be happy to take care of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-tr from-pink-700 to-orange-800">
                your work.
              </span>
            </h1>
            <p className=" flex text-gray-700 dark:text-gray-300 tracking-tight md:font-normal max-w-xl mx-auto lg:max-w-none">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem molestiae soluta ipsa incidunt expedita rem!
              Suscipit molestiae voluptatem iure, eum alias nobis velit quidem
              reiciendis saepe nostrum
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full">
              <Link
                href="#"
                className="px-6 items-center h-12 rounded-3xl bg-pink-600 text-white duration-300 ease-linear flex justify-center w-full sm:w-auto"
              >
                Get started
              </Link>
              <Link
                href="#"
                className="px-6 items-center h-12 rounded-3xl text-pink-700 border border-gray-100 dark:border-gray-800 dark:text-white bg-gray-100 dark:bg-gray-900 duration-300 ease-linear flex justify-center w-full sm:w-auto"
              >
                Book a call
              </Link>
            </div>
            <div className="mt-5 flex items-center justify-center flex-wrap gap-4 lg:justify-start w-full">
              <Link href="#" target="_blank" rel="noreferer">
                <span className="sr-only">org name</span>
                <Image
                  width={600}
                  height={120}
                  src="/microsoft.avif"
                  alt="client name"
                  className="h-10 w-auto"
                />
              </Link>
              <Link href="#" target="_blank" rel="noreferer">
                <span className="sr-only">org name</span>
                <Image
                  width={600}
                  height={120}
                  src="/microsoft.avif"
                  alt="client name"
                  className="h-10 w-auto "
                />
              </Link>
              <Link href="#" target="_blank" rel="noreferer">
                <span className="sr-only">org name</span>
                <Image width={600}
                  height={120}
                  src="/microsoft.avif"
                  alt="client name"
                  className="h-10 w-auto"
                />
              </Link>
              <Link href="#" target="_blank" rel="noreferer">
                <span className="sr-only">org name</span>
                <Image
                  width={600}
                  height={120}
                  src="/microsoft.avif"
                  alt="client name"
                  className="h-10 w-auto"
                />
              </Link>
            </div>
          </div>
          <div className="flex aspect-square lg:aspect-auto lg:h-[35rem] relative">
            <div className="w-3/5 h-[80%] rounded-3xl overflow-clip border-8 border-gray-200 dark:border-gray-950 z-30">
              <Image
                src="/hero1.jpg"
                alt="buildind plan image"
                width={1300}
                height={1300}
                className="w-full h-full object-cover bg-blend-color-dodge z-30"
              />
            </div>
            <div className="absolute right-0 bottom-0 h-[calc(100%-50px)] w-4/5 rounded-3xl overflow-clip border-4 border-gray-200 dark:border-gray-800 z-10">
              <Image
                src="/carrelage.webp"
                alt="working-on-housing-project"
                height={1300}
                width={1300}
                className="z-10 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
