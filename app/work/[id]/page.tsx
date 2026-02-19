'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import { worksData } from '../../../data/work';
import Image from 'next/image';

export default function Page() {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const workId = parseInt(id || '', 10);
  const workItem = worksData.find((w) => w.workId === workId);

  if (!workItem) return <div className="text-center py-20 text-xl">Work not found</div>;

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 text-gray-900 dark:text-gray-100">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-center">
        {workItem.workName}
      </h1>

      {/* Main Image */}
      <div className="relative w-full h-[400px] md:h-[500px] mb-8 rounded-lg overflow-hidden shadow-lg">
        <Image
          src={workItem.workImage}
          alt={workItem.workName}
          fill
          className="object-cover"
        />
      </div>

      {/* Description */}
      <p className="text-lg md:text-xl mb-12 leading-relaxed text-justify">
        {workItem.workDescription}
      </p>

      {/* Gallery */}
      {workItem.workGallery && (
        <>
          <h2 className="text-2xl font-semibold mb-6">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {workItem.workGallery.map((img, index) => (
              <div
                key={index}
                className="relative w-full h-64 rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src={img}
                  alt={`${workItem.workName} image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}