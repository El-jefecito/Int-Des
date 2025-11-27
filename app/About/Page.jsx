"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const processSteps = [
  {
    id: 1,
    imgSrc: "/process-icon-1.svg",
    title: "Consultation and initial meeting",
    description:
      "The architecture company meets with the client to discuss thier needs, budget, and timeline.",
  },
  {
    id: 2,
    imgSrc: "/process-icon-2.svg",
    title: "Concept design",
    description:
      "Based on the client's requirements, the architecture company creates a concept design that outlines",
  },
  {
    id: 3,
    imgSrc: "/process-icon-3.svg",
    title: "Design development",
    description:
      "Once the client approves the concept design, the architecture company begins to develop detailed",
  },
  {
    id: 4,
    imgSrc: "/process-icon-4.svg",
    title: "Permitting and approvals",
    description:
      "Before construction can begin, the architecture company must obtain the necessary permits",
  },
];

const galleryItems = [
  {
    img: "/property-1.jpg",
    title: "Gallery 1",
  },
  {
    img: "/property-2.jpg",
    title: "Gallery 2",
  },
  {
    img: "/property-3.jpg",
    title: "Gallery 3",
  },
  {
    img: "/property-4.jpg",
    title: "Gallery 4",
  },
  {
    img: "/property-5.jpg",
    title: "Gallery 5",
  },
  {
    img: "/property-6.jpg",
    title: "Gallery 6",
  },
];

const page = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <>
      {/* Page title */}
      <div className="relative h-[60vh] overflow-hidden flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/page-title.mp4" type="video/mp4" />
        </video>

        <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-10" />
        <h1 className="text-white text-[3rem] md:text-[5rem] font-bricolage z-20">
          About Us
        </h1>
      </div>

      {/* about us */}
      <div className="bg-white py-10">
        {/* Top section */}
        <div className="container mx-auto mb-10 px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <motion.div
              className="lg:w-2/3 mb-6 lg:mb-0"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <h1 className="text-3xl lg:text-8xl font-bold text-gray-800">
                Interior & Exterior Solutions
              </h1>
            </motion.div>

            <motion.div
              className="lg:w-1/3"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-gray-700">About Us</h3>
              <p className="mt-2 text-gray-600">
                Designing Dreams, Crafting Spaces - Where Vision Meets Elegance.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Vision section */}
        <div className="container mx-auto px-4 mb-12">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <motion.div
              className="lg:w-1/2 mb-6 lg:mb-0 overflow-hidden rounded-lg"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <Image
                src="/ab-vision-image1.jpeg"
                alt="vision"
                width={800}
                height={500}
                className="w-full h-[500px] object-cover"
              />
            </motion.div>

            <motion.div
              className="lg:w-1/2 lg:pl-12"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <p className="mb-4 text-gray-700 leading-relaxed">
                <span className="text-gray-800 font-bold">Our</span> vision is
                to become a leader in transforming spaces through innovative and
                thoughtful design. We aim to create environments that not only
                meet the aesthetic and functional needs of our clients but also
                inspire creativity, foster well-being, and enhance the overall
                quality of life.
              </p>
              <p className="text-gray-800 leading-relaxed">
                We envision a world where every space — whether residential,
                commercial, or public — reflects the individuality and
                aspirations of those who occupy it, combining timeless design
                with modern elegance. Through passion, collaboration, and
                excellence, we aspire to shape interiors that leave a lasting
                impression and positively impact the communities we serve.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Mission section */}
        <div className="container mx-auto px-4 mb-12">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <motion.div
              className="lg:w-1/2 lg:pl-12"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <p className="mb-4 text-gray-700 leading-relaxed">
                At <strong>IntDec</strong>, our mission is to craft inspiring,
                functional, and personalized spaces that elevate the way our
                clients live, work, and experience their surroundings. We are
                committed to delivering exceptional design solutions that blend
                creativity with practicality, transforming every environment
                into a reflection of the client’s unique vision and style.
              </p>
              <p className="text-gray-800 leading-relaxed">
                We strive to build lasting relationships with our clients,
                ensuring each project is executed with attention to detail,
                innovation, and impeccable craftsmanship. Our goal is to create
                spaces that inspire, enrich, and enhance the everyday lives of
                those who inhabit them.
              </p>
            </motion.div>

            <motion.div
              className="lg:w-1/2 mb-6 lg:mb-0 overflow-hidden rounded-lg"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <Image
                src="/ab-vision-image2.jpeg"
                alt="vision"
                width={800}
                height={500}
                className="w-full h-[500px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
      {/* design process */}
      <section className="bg-gray-100 px-[8%] lg:px-[12%] py-16">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
            <motion.div
              className="lg:w-1/2 mb-10 lg:mb-0"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <h1 className="text-8xl font-bricolage-font font-semibold">
                Our Design Process
              </h1>
            </motion.div>

            <motion.div
              className="lg:h-1/3"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <h3 className="uppercase tracking-wider font-semibold border-b pb-2 mb-6 text-sm w-fit">
                Process
              </h3>
              <p className="text-lg max-w-md">
                Discover how our thoughtful process transforms ideas into
                personalized, functional, and beautifully styled spaces.
              </p>
            </motion.div>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols pt-10">
            {processSteps.map(({ id, imgSrc, title, description }, index) => (
              <motion.div
                key={id}
                className="w-full relative mb-10"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="flex flex-col items-center cursor-pointer relative group">
                  {/* Circle with image and number */}
                  <div className="w-[170px] h-[170px] rounded-full shadow-lg flex items-center justify-center relative hover:-translate-y-1.5 transition-transform duration-300">
                    <img
                      src={imgSrc}
                      alt={`Process step ${id}`}
                      className="w-[70px] h-[70px] transition-transform duration-500 ease-out group-hover:-rotate-y-360"
                    />
                    <span className="absolute -top-3 right-10 bg-black text-white w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold select-none">
                      {id}.
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="font-bricolage text-xl mt-6 mb-4 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-black after-w-0 group-hover:after:w-full after:transition-width after:duration-300">
                    {title}
                  </h2>

                  {/* Description */}
                  <p className="text-center text-base max-w-[70%] mx-auto">
                    {description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-[8%] lg:px-[12%] py-16">
        <div className="container mx-auto px-4">
          <motion.h1
            className="text-8xl font-bricolage font-bold mb-10"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            Gallery
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.img}
                data-lightbox={item.lightbox}
                data-title={item.title}
                className="group relative block overflow-hidden rounded-md"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <div className="relative w-full h-[400px]">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="absolute bottom-0 left-0 w-full p-4 bg-linear-to-t from-black to-transparent z-10 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                  <h4 className="text-white text-3xl font-bricolage">
                    {item.title}
                  </h4>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
