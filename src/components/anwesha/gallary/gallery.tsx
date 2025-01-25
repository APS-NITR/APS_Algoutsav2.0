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
        src: "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        alt: "gallery-photo-1",
      },
      {
        src: "https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",
        alt: "gallery-photo-2",
      },
      {
        src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
        alt: "gallery-photo-3",
      },
    ],
    [
      {
        src: "https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        alt: "gallery-photo-4",
      },
      {
        src: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        alt: "gallery-photo-5",
      },
      {
        src: "https://docs.material-tailwind.com/img/team-3.jpg",
        alt: "gallery-photo-6",
      },
    ],
    [
      {
        src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
        alt: "gallery-photo-7",
      },
      {
        src: "https://docs.material-tailwind.com/img/team-3.jpg",
        alt: "gallery-photo-8",
      },
      {
        src: "https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        alt: "gallery-photo-9",
      },
    ],
    [
      {
        src: "https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        alt: "gallery-photo-10",
      },
      {
        src: "https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",
        alt: "gallery-photo-11",
      },
    ],
  ];

  return (
    <div id="gallery" className="flex flex-col items-center justify-center mt-28 mx-5">
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
    </div>
  );
};

export default Gallery;
