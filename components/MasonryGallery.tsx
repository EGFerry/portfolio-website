// components/MasonryGallery.tsx

'use client'; // This directive must be the first line

import React from 'react';
import Masonry from 'react-masonry-css';
import Image from 'next/image'; // Recommended for optimized images in Next.js

// Define the structure of a single gallery item
interface GalleryItem {
  id: number;
  image: string;
  title: string;
}

// Define the props for the MasonryGallery component
interface MasonryGalleryProps {
  items: GalleryItem[];
}

const MasonryGallery: React.FC<MasonryGalleryProps> = ({ items }) => {
  const breakpointColumnsObj = {
    default: 3,
    700: 2,
    500: 1
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {items.map((item: GalleryItem) => (
        <div key={item.id} className="mb-4">
          {/* Using Next.js Image component for optimized loading */}
          <Image
            src={item.image}
            alt={item.title}
            width={500} // Adjust as needed
            height={500} // Adjust as needed
            
          />
        </div>
      ))}
    </Masonry>
  );
};

export default MasonryGallery;