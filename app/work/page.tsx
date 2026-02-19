'use client';
import React from 'react';
import { worksData } from '@/data/work';
import Image from 'next/image';
import Link from 'next/link';

export default function Work() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24 text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Our Works
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
          Discover our premium marble, tile, and flooring projects. Each project is crafted with precision and elegance.
        </p>
      </div>

      {/* Works Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {worksData.map((work) => (
          <Link key={work.workId} href={`/work/${work.workId}`}>
            <div className="group cursor-pointer overflow-hidden rounded-lg shadow-lg bg-white dark:bg-gray-800 transition-transform hover:scale-105">
              <div className="relative w-full h-64">
                <Image
                  src={work.workImage}
                  alt={work.workName}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{work.workName}</h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
                  {work.workDescription}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-24 text-center">
        <h2 className="text-3xl font-bold mb-4">Want to work with us?</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Contact us today and let’s create your dream space with our expert craftsmanship.
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-4 bg-black text-white dark:bg-white dark:text-black rounded-lg font-semibold hover:opacity-90 transition-opacity"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}