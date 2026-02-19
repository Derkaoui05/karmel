'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import { worksData } from '../../../data/work';
import Image from 'next/image';

export default function Page() {
  const params = useParams();

  // Ensure id is a string
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const workId = parseInt(id || '', 10); // fallback to '' if undefined
  const workItem = worksData.find((w) => w.workId === workId);

  if (!workItem) return <div>Work not found</div>;

  return (
    <div className="p-24 text-black dark:text-white">
      <h1 className="text-3xl font-bold mb-4">{workItem.workName}</h1>
      <Image
        src={workItem.workImage}
        alt={workItem.workName}
        width={500}
        height={300}
        className="mb-4 rounded aspect-square"
      />
      <p className="mb-6">{workItem.workDescription}</p>

      {workItem.workGallery && (
        <div className="grid grid-cols-3 gap-4">
          {workItem.workGallery.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`${workItem.workName} image ${index + 1}`}
              width={300}
              height={200}
              className="rounded"
            />
          ))}
        </div>
      )}
    </div>
  );
}