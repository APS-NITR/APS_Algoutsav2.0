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
        src: "https://res.cloudinary.com/dycajggce/image/upload/v1738850663/au-website/tcni6tr5fzdtyu0u96yx.jpg",
        alt: "gallery-photo-3",
      },

      {
        src: "https://res.cloudinary.com/dycajggce/image/upload/v1738850661/au-website/beurqjtgrabdmzkvdi6g.jpg",
        alt: "gallery-photo-4",
      },
    ],
    [
      {
        src: "https://res.cloudinary.com/dycajggce/image/upload/v1738850662/au-website/vov4ai8zyy2umcfiwdxd.jpg",
        alt: "gallery-photo-1",
      },
      {
        src: "https://res.cloudinary.com/dycajggce/image/upload/v1738850664/au-website/rnpbetvwcliuwlebppzi.png",
        alt: "gallery-photo-2",
      },
      {
        src: "https://res.cloudinary.com/dycajggce/image/upload/v1738850661/au-website/x1hzkxuxjxscpfl6ofyj.jpg",
        alt: "gallery-photo-5",
      },
      {
        src: "https://res.cloudinary.com/dycajggce/image/upload/v1738850661/au-website/byg1di7yw6s3tc65ahav.jpg",
        alt: "gallery-photo-6",
      },
    ],
    [
      {
        src: "https://res.cloudinary.com/dycajggce/image/upload/v1738850663/au-website/xkfuz0gdqkbw9h306kwv.jpg",
        alt: "gallery-photo-7",
      },
      {
        src: "https://res.cloudinary.com/dycajggce/image/upload/v1738850664/au-website/p2zok4tuoug2lagt0ygi.jpg",
        alt: "gallery-photo-8",
      },
      {
        src: "https://res.cloudinary.com/dycajggce/image/upload/v1738850659/au-website/qgajgb7koemdtxoo01fs.jpg",
        alt: "gallery-photo-9",
      },
    ],
    [
      {
        src: "https://res.cloudinary.com/dycajggce/image/upload/v1738850659/au-website/co0w3ipuazdpeixyqxil.jpg",
        alt: "gallery-photo-10",
      },
      {
        src: "https://res.cloudinary.com/dycajggce/image/upload/v1738850659/au-website/jbvdtu5wt3shqayhfrz9.jpg",
        alt: "gallery-photo-11",
      },
      {
        src: "https://res.cloudinary.com/dycajggce/image/upload/v1738850659/au-website/r4phdawvvknys5kitnr7.jpg",
        alt: "gallery-photo-12",
      },
    ],
  ];

  return (
    <div id="gallery" className="flex flex-col items-center justify-center mt-28 md:mx-5">

      <div className="font-extrabold text-transparent text-4xl sm:text-5xl bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
        GALLERY
      </div>

      <div
        className="text-center rounded-xl shadow-lg my-10 p-6"
      // initial={{ opacity: 0, y: 50 }}
      // whileInView={{ opacity: 1, y: 0 }}
      // transition={{ duration: 1, delay: 0.1, ease: 'easeOut' }}
      // viewport={{ once: true }}
      >

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
    </div>
  );
};

export default Gallery;