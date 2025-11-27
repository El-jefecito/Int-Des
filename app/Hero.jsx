"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import PropertyData from "@/app/JsonData/Properties.json";
import { motion } from "framer-motion";
// content

// hero
const HeroSlides = [
  {
    bgImage: "/Hero-1.webp",
    span: "Space Planning",
    title: "Unique \nCreations",
    paragraphs: [
      // "At Tobi Associates, we specialize in crafting thoughtful architectural layouts and interior designs that enhance the way you live and work. Every project reflects our commitment to both form and function",
      "Lets create timeless, purposeful spaces - where aesthetic beauty meets intelligent",
    ],
    buttonText: "About Us",
    buttonLink: "/about",
  },
  {
    bgImage: "/Hero-2.webp",
    span: "Space Planning",
    title: "Unique \nCreations",
    paragraphs: [
      // "Welcome to Tobi Associates, where exceptional designs meets tailored solutions. We create furniture that complements your space with style and purpose.",
      "Every piece is selected to enhance both aesthetics and functionality, reflecting your unique taste and lifestyle",
    ],
    buttonText: "Portfolio",
    buttonLink: "/projects",
  },
  {
    bgImage: "/Hero-3.webp",
    span: "Lighting Solutions",
    title: "Elegant \nLiving",
    paragraphs: [
      // "Welcome to Tobi Associates, where creativity meets functionality. We illuminate spaces with thoughtfully designed lighting that enhances mood and purpose.",
      "Our lightning solutions transform ordinary rooms into masterpieces that reflect your unique style and way of living.",
    ],
    buttonText: "Blog",
    buttonLink: "/blog",
  },
  {
    bgImage: "/Hero-4.webp",
    span: "Color Harmony",
    title: "Function \nBeauty",
    paragraphs: [
      // "Welcome to Tobi Associates, where your vision comes to life through thoughtfull color palettes and innovative design.",
      "We believe the right colors create balance, mood, and meaning in every space.",
    ],
    buttonText: "Services",
    buttonLink: "/services",
  },
];

const marqueeItems = [
  "Space Planning & Layout",
  "Color & Material Consultation",
  "Renovation",
  "Commercial Interior Design",
  "Furniture & Decor Selection",
  "Structure Design",
  "Residential Space",
  "Residential Space",
  "Space Planning & Layout",
  "Color & Material Consultation",
  "Renovation",
  "Commercial Interior Design",
  "Furniture & Decor Selection",
  "Structure Design",
  "Residential Space",
  "Residential Space",
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

// About tabs
const tabs = [
  {
    label: "History",
    key: "his",
  },
  { label: "Mission", key: "mis" },
  { label: "Vision", key: "vis" },
];

const tabContent = {
  his: [
    "At InTDec Associates Interior Design, we believe every space should tell a meaningful story...",
    "With years of industry experience and a passion for innovation, we specialize in both residential and commercial",
    "From initial concepts to final execution, we manage every stage of the process with precision and creation",
  ],
  mis: [
    "Our mission at iNTDec is to design personalized, functional, and inspiring spaces...",
    "we focus on building lasting client relationships and approach every project with attention to detail...",
  ],
  vis: [
    "Our vision is to be a leading force in interior and architectural design...",
    "We strive to shape living and working environments that reflect individual aspirations...",
  ],
};

// Design Process
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

// Testimonials
const testimonials = [
  {
    name: "Riya Shan",
    location: "Mumbai, Maharashtra",
    image: "/User.jpg",
    quote: "We hired them for our home's complete interior",
  },
  {
    name: "Tom Washington",
    location: "New York, USA",
    image: "/User.jpg",
    quote:
      "Their team transformed our office into a space thats both functional and visually impressive. The design flow was flawless and well thought out",
  },
  {
    name: "Jude Bellingham",
    location: "Machester, England",
    image: "/User.jpg",
    quote:
      "we wanted a modern kitchen and minimal living room. They truly understood our taste and delivered beyond expectations. Super satisfied with their work",
  },
  {
    name: "Ben Williams",
    location: "NewJersey, USA",
    image: "/User.jpg",
    quote:
      "The design consultation, color selection, and final look of our home was top-notch. They were easy to work with and always responsive.",
  },
];

// social images
const socialImages = [
  "/social-slide-1.jpg",
  "/social-slide-2.jpg",
  "/social-slide-3.jpg",
  "/social-slide-4.jpg",
  "/social-slide-5.jpg",
];

const Hero = () => {
  const [activeTab, setActiveTab] = useState("his");

  return (
    <>
      {/* hero */}
      <div className="w-full h-screen relative">
        <Swiper
          modules={[Navigation]}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="h-full"
        >
          {HeroSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative w-full h-screen flex justify-center items-center text-white px-6"
                style={{
                  backgroundImage: `url(${slide.bgImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* overlay */}
                <div className="absolute inset-0 bg-black/70 z-0 flex items-center justify-center px-5">
                  {/* content */}
                  <div className="hero-content relative z-10 max-w-4xl text-start space-y-6">
                    <span className="text-xl font-medium uppercase">
                      {slide.span}
                    </span>
                    <h1 className="text-6xl md:text-8xl font-bold font-bricolage whitespace-pre-line">
                      {slide.title}
                    </h1>
                    <div className="flex flex-col md:flex-row gap-4 text-lg justify-center">
                      {slide.paragraphs.map((para, i) => (
                        <p key={i} className="max-w-xl">
                          {para}
                        </p>
                      ))}
                    </div>

                    <Link href={slide.buttonLink}>
                      <button className="mt-4 cursor-pointer text-sm rounded px-4 py-2 border border-white text-white uppercase tracking-wide hover:bg-white hover:text-black transition-all">
                        {slide.buttonText}{" "}
                        <i className="bi bi-arrow-right ml-2"></i>{" "}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Navigation buttons */}
          <div className="swiper-button-next swiper-btn pr-8 swiper-next left-4 top-[80%] absolute z-20">
            <i className="ri-arrow-right-wide-line"></i>
          </div>
          <div className="swiper-button-prev swiper-btn swiper-prev left-4 top-[90%] absolute z-20">
            <i className="ri-arrow-left-wide-line"></i>
          </div>
        </Swiper>
      </div>
      {/* Marquee */}
      <div className="overflow-hidden whitespace-nowrap my-10 relative">
        <div className="animate-marquee flex w-max gap-8">
          {marqueeItems.map((item, index) => (
            <div
              key={index}
              className="min-w-[250px] h-[50px] border-2 border-gray-300 rounded-full flex items-center justify-center text-black text-2xl font-bold uppercase px-5"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      {/* about */}
      <section className="px-8 lg:-[12%] py-12">
        {/* Top section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          <div className="lg:w-2/3">
            <h2 className="text-[4rem] leading-16 lg:text-[6rem] lg:leading-24 font-bold font-bricolage tracking-[.2rem]">
              Interior & Architecture Design Solutions
            </h2>
          </div>
          <div className="lg:w-1/2">
            <h3 className="uppercase tracking-wider font-semibold border-b pb-2 mb-6 text-sm w-fit">
              About Us
            </h3>
            <p className="text-base mb-4 text-gray-700">
              At this Associates. we are committed to transforming spaces
              through creative vision, elegant design, and solutions that truly
              reflect your lifestyle.
            </p>
            <a
              href="/about"
              className="inline-flex items-center text-black font-medium hover:underline text-lg"
            >
              Company Info <span>↗️</span>
            </a>
          </div>
        </div>

        {/* main section */}
        <div className="mt-12 flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/2 w-full">
            <Swiper
              modules={[Navigation, EffectCards, Autoplay]}
              loop={true}
              effect="cards"
              grabCursor={true}
              autoplay={{ delay: 1500 }}
              navigation={{
                nextEl: ".swiper-about-next",
                prevEl: ".swiper-about-prev",
              }}
              className="rounded"
              style={{ padding: "30px" }}
            >
              {[
                "interior-image-01.jpg",
                "interior-image-02.jpg",
                "interior-image-05.jpg",
              ].map((src, index) => (
                <SwiperSlide>
                  <img
                    src={src}
                    alt={`slide ${index + 1}`}
                    className="w-full h-[580px] object-cover rounded"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Tabs content */}
          <div className="lg:w-1/2 w-full px-0 lg:px-10 pt-10">
            <div className="flex gap-6 border-b mb-6">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  className={`relative pb-2 text-lg font-medium transition-colors cursor-pointer ${
                    activeTab === tab.key
                      ? 'text-black after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-black'
                      : "text-gray-400 hover:text-black"
                  }`}
                  onClick={() => setActiveTab(tab.key)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* tab content */}
            <div className="space-y-4 text-gray-700">
              {tabContent[activeTab].map((para, index) => (
                <p key={index} className="text-base leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Design Process */}
      <section className="bg-gray-100 px-[8%] lg:px-[12%] py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h1 className="text-8xl font-bricolage-font font-semibold">
                Our Design Process
              </h1>
            </div>
            <div className="lg:h-1/3">
              <h3 className="uppercase tracking-wider font-semibold border-b pb-2 mb-6 text-sm w-fit">
                Process
              </h3>
              <p className="text-lg max-w-md">
                Discover how our thoughtful process transforms ideas into
                personalized, function and beautifully styled spaces.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols pt-10">
            {processSteps.map(({ id, imgSrc, title, description }) => (
              <div key={id} className="w-full relative mb-10">
                <div className="flex flex-col items-center cursor-pointer relative group">
                  {/* Circle with image and number */}
                  <div className="w-[170px] h-[170px] rounded-full shadow-lg flex items-center justify-center relative hover:-translate-y-1.5 transition-transform duration-300">
                    <img
                      src={imgSrc}
                      alt={`Process ste ${id}`}
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
                  {/*  Description*/}
                  <p className="text-center text-base max-w-[70%] mx-auto">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Services */}
      <section className="px-[8%] lg:-[12%] py-12">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
          <div className="lg:w-2/3 mb-8 lg:mb-0">
            <h1 className="text-7xl font-bricolage font-bold">
              Interior Design Solutions
            </h1>
          </div>
          <div className="lg:w-1/3">
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
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
          {Services.map((service, index) => (
            <div
              key={index}
              className="border border-black rounded-xl p-6 transition-all duration-300 hover:border-transparent shadow hover:shadow-lg hover:-translate-y-1 cursor-pointer"
            >
              <Image
                src={service.icon}
                alt={service.title}
                width={70}
                height={70}
                className="mb-4 transition-transform duration-700 group-hover:rotate-360"
              />
              <h2 className="text-3xl font-bricolage relative inline-block mt-2 mb-2 after:block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-black hover:after:w-full after:transition-all after-duration-300">
                {service.title}
              </h2>
              <p className="text-gray-700 font-normal w-4/5">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* properties */}
      <section className="px-[8%] lg:px-[12%] py-16 relative">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
          <div className="lg:w-2/3 mb-8 lg:mb-0">
            <h1 className="text-7xl font-bricolage font-bold">
              Our Properties
            </h1>
          </div>
          <div className="lg:w-1/3">
            <h3 className="text-2xl font-semibold mt-3">Our Properties</h3>
            <p className="mb-4 text-gray-700">
              We build our projects with your dreams and ideas. Touch modern
              concepts and designs with IntDes Associates.
            </p>
            <a href="/properties">
              <button className="btn py-3 px-0 text-lg font-medium flex items-center">
                <span className="text-black">View More</span>
                <i className="bi bi-arrow-up-right ms-2"></i>
              </button>
            </a>
          </div>
        </div>

        <Swiper
          loop={true}
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".swiper-project-next",
            prevEl: ".swiper-project-prev",
          }}
          autoplay={{
            delay: 1500,
          }}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="relative"
        >
          {PropertyData.map((property) => (
            <SwiperSlide key={property.id}>
              <Link href={`properties/${property.id}`}>
                <div className="relative h-[450px] rounded overflow-hidden group">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* overlay gradient */}
                  <div className="absolute inset-x-0 bottom-0 h-[30%] bg-linear-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0" />
                  {/* Title and Price */}
                  <div className="flex justify-between items-center w-full absolute bottom-0 left-0 z-10 px-4 py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-700">
                    <h4 className="text-white text-2xl font-bricolage font-bold">
                      {property.title}
                    </h4>
                    <p className="text-white text-xl font-bricolage">
                      ${property.price}
                    </p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Swiper Navigation buttons */}

        {/* Swiper Navigation buttons */}

        <div className="absolute top-[32%] left-[10%] right-4 ml-9 -translate-y-1/2 hidden lg:flex items-center gap-12 z-10">
          <div className="swiper-project-prev cursor-pointer text-2xl text-black">
            <i className="bi bi-arrow-left"></i>
          </div>
          <div className="swiper-project-next cursor-pointer text-2xl text-black">
            <i className="bi bi-arrow-right"></i>
          </div>
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
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
          <div className="lg:w-2/3 mb-8 lg:mb-0">
            <h1 className="text-7xl font-bricolage font-bold">
              Architecture <br /> Design Solutions
            </h1>
          </div>
          <div className="lg:w-1/3">
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
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
          {services2.map((service, index) => (
            <div
              key={index}
              className="border border-black rounded-xl p-6 transition-all duration-300 hover:border-transparent shadow hover:shadow-lg hover:-translate-y-1 cursor-pointer"
            >
              <Image
                src={service.icon}
                alt={service.title}
                width={60}
                height={60}
                className="mb-4 transition-transform duration-700 group-hover:rotate-360deg"
              />
              <h2 className="text-3xl font-bricolage relative inline-block mt-2 mb-2 after:block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-black hover:after:w-full after:transition-all after:duration-300">
                {service.title}
              </h2>
              <p className="text-gray-700 font-normal w-4/5">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* Gallery */}
      <section className="px-[8%] lg:px-[12%] py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-8xl font-bricolage font-bold mb-10">Gallery</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <a
                key={index}
                href={item.img}
                data-lightbox={item.lightbox}
                data-title={item.title}
                className="group relative block overflow-hidden rounded-md"
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
              </a>
            ))}
          </div>
        </div>
      </section>
      {/* video banner */},
      <div className="relative w-full h-[500px] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/video-bg.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-center px-4 z-10">
          <h2 className="text-5xl md:text-6xl font-bricolage font-bold text-white">
            Ready For An Upgrade? Lets Talk
          </h2>
          <button className="mt-10 px-6 py-3 cursor-pointer bg-white text-black font-semibold rounded hover:bg-gray-200 transition hover:translate-y-1">
            Contact Us
          </button>
        </div>
      </div>
      {/* Testimonial */}
      <section className="px-[8%] lg:px-[12%] py-20 bg-white">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12 gap-8">
          <div className="lg:w-1/2">
            <h1 className="text-7xl font-bricolage font-bold">
              Client <br /> Testimonials
            </h1>
          </div>
          <div className="lg:w-2/5">
            <h3 className="text-xl font-semibold mb-2">Testimonials</h3>
            <p className="text-gray-600">
              Discover how our thoughful process transforms ideas into
              personalized, functional, and beautifully styled spaces.
            </p>
          </div>
        </div>

        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-100 p-6 md:p-8 rounded-xl shadow-md h-full flex flex-col"
              >
                <img
                  src="/qoute.svg"
                  alt="quote"
                  className="w-8 h-8 md:w-10 md:h-10 object-contain mb-4 opacity-25"
                />

                <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6 flex-grow">
                  {testimonial.quote}
                </p>

                <div className="flex items-center mt-auto">
                  <img
                    src={testimonial.image}
                    alt="testimonial"
                    className="w-14 h-14 md:w-20 md:h-20 rounded-full object-cover"
                  />

                  <div className="ml-4">
                    <h2 className="font-semibold text-base md:text-lg">
                      {testimonial.name}
                    </h2>
                    <p className="text-sm text-gray-500">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      {/* social images */}
      <div className="w-full h-[500px]">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={2}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="w-full h-full"
        >
          {socialImages.map((src, i) => (
            <SwiperSlide key={i}>
              <motion.div
                className="w-full h-full"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                whileHover={{
                  rotateX: 6,
                  rotateY: -6,
                  scale: 1.03,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 1.25 }}
                style={{
                  perspective: 1000,
                }}
              >
                <motion.img
                  src={src}
                  alt={`social slide ${i + 1}`}
                  className="w-full h-full object-cover rounded-xl"
                  animate={{
                    filter: ["blur(0px)", "blur(3px)", "blur(0px)"],
                  }}
                  transition={{
                    duration: 0.6,
                    repeat: 0,
                    ease: "easeIn",
                  }}
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Hero;
