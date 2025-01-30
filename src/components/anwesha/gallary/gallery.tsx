import React from "react";
import { motion } from "framer-motion";

type GalleryImage = {
  src: string;
  alt: string;
};

const Gallery: React.FC = () => {
  const images: GalleryImage[][] = [
    [
      {
        src: "/images/IMG_4301.png",
        alt: "gallery-photo-3",
      },
     
      {
        src: "/images/IMG_4305.png",
        alt: "gallery-photo-4",
      },
    ],
    [
      {
        src: "/images/ayush-18.jpg",
        alt: "gallery-photo-1",
      },
      {
        src: "/images/IMG_4275.png",
        alt: "gallery-photo-2",
      },
      {
        src: "/images/IMG_20240316_175249.jpg",
        alt: "gallery-photo-5",
      },
      {
        src: "/images/IMG_20240317_161953.jpg",
        alt: "gallery-photo-6",
      },
    ],
    [
      {
        src: "/images/IMG_20240317_173611.jpg",
        alt: "gallery-photo-7",
      },
      {
        src: "/images/kshitiz-13.jpg",
        alt: "gallery-photo-8",
      },
      {
        src: "/images/IMG_20240317_191943.jpg",
        alt: "gallery-photo-9",
      },
    ],
    [
      {
        src: "/images/IMG_20240317_191640.jpg",
        alt: "gallery-photo-10",
      },
      {
        src: "/images/IMG_4315.jpg",
        alt: "gallery-photo-11",
      },
      {
        src: "/images/kshitiz-6.jpg",
        alt: "gallery-photo-11",
      },
    ],
  ];

  return (
    <div id="gallery" className="flex flex-col items-center justify-center mt-28 mx-5">
      <motion.div
          className="text-center rounded-xl p-10 shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
          viewport={{ once: true }}  
        >
      <h1 className="mb-10 text-4xl font-bold tracking-tight text-white">Gallery</h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mx-auto" style={{ width: "80%" }}>
        {images.map((column, colIndex) => (
          <div key={colIndex} className="grid gap-4">
            {column.map((image, imgIndex) => (
              <motion.div
                key={imgIndex}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: imgIndex * 0.2 + colIndex * 0.1,
                  ease: "easeOut",
                }}
                className="overflow-hidden"
              >
                <motion.img
                  className="h-auto max-w-full rounded-lg object-cover object-center"
                  src={image.src}
                  alt={image.alt}
                  whileHover={{
                    scale: 1.05,
                    rotate: 2,
                    transition: { duration: 0.3 },
                  }}
                />
              </motion.div>
            ))}
          </div>
        ))}
      </div>
      </motion.div>
    </div>
  );
};

export default Gallery;
