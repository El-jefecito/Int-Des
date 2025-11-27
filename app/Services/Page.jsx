"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

// services
const Services = [
  {
    icon: "/service-icon-4.svg",
    title: "Furniture Selection",
    description:
      "Picking stylish, functional pieces to match space and purpose.",
  },
  {
    icon: "/service-icon-2.svg",
    title: "Color Consultation",
    description:
      "Choosing harmonious palettes that reflect mood, space, and personality",
  },
  {
    icon: "/service-icon-3.svg",
    title: "Lighting Design",
    description:
      "Enhancing ambiance and functionality with strategic lighting placements.",
  },
  {
    icon: "/service-icon-5.svg",
    title: "Wall Treatments",
    description:
      "Applying paint, wallpaper, or textures for visual interest enhancement.",
  },
];

// services 2
const services2 = [
  {
    icon: "/structure-design-icon.png",
    title: "structure Design",
    description: "Engineering safe, sustainable, and functional structures",
  },
  {
    icon: "/residential-area-icon.png",
    title: "Residential Space",
    description:
      "Creating cozy, personalized homes that reflect your lifestyle",
  },
  {
    icon: "/office-icon.png",
    title: "Commercial",
    description:
      "Designing dynamic business environments that inspire productivity",
  },
  {
    icon: "/landscape-icon.png",
    title: "Landscape",
    description:
      "Designing beautiful outdoor spaces that blend with nature and structure",
  },
  {
    icon: "/Renovation-icon.png",
    title: "Renovation",
    description:
      "Revamping old spaces into modern, purposeful, and stylish environment",
  },
];

// marqueeItems2
const marqueeItems2 = [
  {
    imgs: "/property-1.jpg",
    title: "Space Planning & Layout",
  },
  {
    imgs: "/property-2.jpg",
    title: "Color and Material Consultation",
  },
  {
    imgs: "/property-3.jpg",
    title: "Space Planning & Layout",
  },
  {
    imgs: "/property-4.jpg",
    title: "Commercial Interior Design",
  },
  {
    imgs: "/property-5.jpg",
    title: "Furniture and Decor Selection",
  },
];

const page = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
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
          Services
        </h1>
      </div>

      {/* services */}
      <section className="px-[8%] lg:px-[12%] py-12">
        {/* Heading */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
          <motion.div
            className="lg:w-2/3 mb-8 lg:mb-0"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h1 className="text-7xl font-bricolage font-bold">
              Interior Design Solutions
            </h1>
          </motion.div>

          <motion.div
            className="lg:w-1/3"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mt-3">Our Services</h3>
            <p className="mb-4 text-gray-700">
              Whether you are dreaming of a cozy home retreat or a bold, modern
              workspace, our experience
            </p>
            <a href="/Services">
              <button className="btn py-3 px-0 text-lg font-medium flex items-center">
                <span className="text-black">All Services</span>
                <i className="bi bi-arrow-up-right ms-2"></i>
              </button>
            </a>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
          {Services.map((service, index) => (
            <motion.div
              key={index}
              className="border border-black rounded-xl p-6 transition-all duration-300 hover:border-transparent shadow hover:shadow-lg hover:-translate-y-1 cursor-pointer"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <motion.div
                className="mb-4"
                whileHover={{ rotate: 15 }} // subtle tilt on hover
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={70}
                  height={70}
                  className="transition-transform duration-700 group-hover:rotate-360"
                />
              </motion.div>

              <h2 className="text-3xl font-bricolage relative inline-block mt-2 mb-2 after:block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-black hover:after:w-full after:transition-all after-duration-300">
                {service.title}
              </h2>
              <p className="text-gray-700 font-normal w-4/5">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Marquee 2 */}
      <div className="overflow-hidden whitespace-nowrap py-8">
        <div className="animate-marquee flex items-center gap-8">
          {marqueeItems2.map((item, index) => (
            <div key={index} className="flex items-center gap-10 mr-12">
              <div className="w-[150px] h-[50px] overflow-hidden rounded-full">
                <Image
                  src={item.imgs}
                  alt={item.title}
                  width={250}
                  height={100}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="min-w-[150px] h-[50px] border-2 border-gray-300 rounded-full flex items-center justify-center">
                <span className="text-black text-2xl font-bold uppercase px-4 text-center">
                  {item.title}
                </span>
              </div>
            </div>
          ))}

          {marqueeItems2.map((item, index) => (
            <div
              key={`clone-${index}`}
              className="flex items-center gap-10 mr-12"
            >
              <div className="w-[150px] h-[50px] overflow-hidden rounded-full">
                <Image
                  src={item.imgs}
                  alt={item.title}
                  width={250}
                  height={250}
                  className="object-cover"
                />
              </div>

              <div className="min-w-[150px] h-[50px] border-2 border-gray-300 rounded-full flex items-center justify-center">
                <span className="text-black text-2xl font-bold uppercase px-4 text-center">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* services2 */}
      <section className="px-[8%] lg:px-[12%] py-[12%] bg-gray-100">
        {/* Heading */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
          <motion.div
            className="lg:w-2/3 mb-8 lg:mb-0"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h1 className="text-7xl font-bricolage font-bold">
              Architecture <br /> Design Solutions
            </h1>
          </motion.div>

          <motion.div
            className="lg:w-1/3"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mt-3">Our Services</h3>
            <p className="mb-4 text-gray-700">
              Whether you are dreaming of a cozy home retreat or a bold, modern
              workspace, our experience
            </p>
            <a href="/Services">
              <button className="btn py-3 px-0 text-lg font-medium flex items-center">
                <span className="text-black">All Services</span>
                <i className="bi bi-arrow-up-right ms-2"></i>
              </button>
            </a>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
          {services2.map((service, index) => (
            <motion.div
              key={index}
              className="border border-black rounded-xl p-6 transition-all duration-300 hover:border-transparent shadow hover:shadow-lg hover:-translate-y-1 cursor-pointer"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <motion.div
                className="mb-4"
                whileHover={{ rotate: 15 }} // subtle tilt on hover
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={60}
                  height={60}
                  className="transition-transform duration-700 group-hover:rotate-360deg"
                />
              </motion.div>

              <h2 className="text-3xl font-bricolage relative inline-block mt-2 mb-2 after:block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-black hover:after:w-full after:transition-all after:duration-300">
                {service.title}
              </h2>
              <p className="text-gray-700 font-normal w-4/5">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default page;
