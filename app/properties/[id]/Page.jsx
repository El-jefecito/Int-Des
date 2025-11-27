"use client";

import PropertyData from "@/app/JsonData/Properties.json";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import React from "react";

export default function PropertyDetails({ params }) {
  const { id } = React.use(params);

  const property = PropertyData.find((item) => item.id === parseInt(id));
  if (!property) notFound();

  const relatedProperties = PropertyData.filter(
    (item) => item.id !== property.id && item.location === property.location
  );

  return (
    <>
      {/* Page Title */}
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
          {property.title}
        </h1>
      </div>
      {/* Property details */}
      <div className="px-[8%] lg:px-[12%] py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src={property.image}
              alt={property.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="p-8">
            <div className="flex justify-between items-start gap-2">
              <div>
                <h2 className="text-4xl font-bold text-gray-800 font-bricolage mb-2">
                  {property.title}
                </h2>
                <p className="text-lg text-gray-600 mb-1 leading-relaxed">
                  {property.desc}
                </p>
              </div>

              <span className="text-3xl pr-6 font-semibold text-shadow-gray-800">
                {property.price}
              </span>
            </div>

            {/* static info  */}
            <div className="mb-6 mt-3 space-y-1 text-gray-700 font-medium flex flex-wrap gap-x-5 gap-y-3">
              <p className="p-2 rounded border border-gray-800">
                <span className="font-semibold">Area:</span>
                2200 Sq. Ft.
              </p>
              <p className="p-2 rounded border border-gray-800">
                <span className="font-semibold">Location:</span>
                USA
              </p>
              <p className="p-2 rounded border border-gray-800">
                <span className="font-semibold">Designed by:</span>
                El jefecito
              </p>
              <p className="p-2 rounded border border-gray-800">
                <span className="font-semibold">Client:</span>
                Jay Smith
              </p>
            </div>

            <p className="mt-3 font-bricolage text-gray-700 ">
              A cozy and modern home designed for comfortable living, Properties
              3 combines practical layout with stylish details. Perfect for
              those seeking a peaceful and affordable residence
            </p>
            <p className="mt-3 font-bricolage text-gray-700 ">
              This charming property offers a bright and inviting space, ideal
              for a growing family or anyone looking for. Experience comfort and
              convenience in a beautiful setting.
            </p>
          </div>
        </div>
      </div>
      {/* Desc */}
      <div className="px-[8%] lg:px-[12%] py-16">
        <h1 className="text-6xl font-bricolage font-bold mb-10">Description</h1>
        <p className="text-bricolage text-lg mb-2">
          This 2200 sqft residence in Prabha Colony, Godhra, showcases a subtle
          and sophisticated approach to modern living. Designed with a
          minimalist mindset, the home balances functionality with elegance
          through clean geometry, soft neutral tones, and purposeful spatial
          planning
        </p>
        <p className="text-bricolage text-lg mb-2">
          A minimal yet impactful approach, tailored for healing and clarity.
        </p>
        <p className="text-bricolage text-lg mb-2">
          A compact yet impactful home that speaks of thoughtful design and
          refined simplicity.
        </p>
      </div>
      {/*Amenities  */}
      <div className="px-[8%] lg:px-[12%] py-16 rounded-xl shadow-sm bg-white">
        <h1 className="text-3xl md:text-4xl font-bold mb-10">Amenities</h1>

        {/* Amenities grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-center gap-3">
            <i className="bi bi-lightning-charge text-yellow-600 text-2xl"></i>
            <span className="font-medium">Power Back Up</span>
          </div>
          <div className="flex items-center gap-3">
            <i className="bi bi-wifi text-yellow-600 text-2xl"></i>
            <span className="font-medium">Internet/Wifi Connectivity</span>
          </div>
          <div className="flex items-center gap-3">
            <i className="bi bi-tools text-yellow-600 text-2xl"></i>
            <span className="font-medium">Maintenance Staff</span>
          </div>
          <div className="flex items-center gap-3">
            <i className="bi bi-building text-yellow-600 text-2xl"></i>
            <span className="font-medium">Vaastu Compliant</span>
          </div>
          <div className="flex items-center gap-3">
            <i className="bi bi-house text-yellow-600 text-2xl"></i>
            <span className="font-medium">Rentable Community Space</span>
          </div>
        </div>
      </div>
      ,
      <div className="px-[8%] lg:px-[12%] py-16 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Related Properties
        </h2>

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
          {relatedProperties.map((property) => (
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
      </div>
    </>
  );
}
