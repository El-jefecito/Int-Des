"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import PropertyData from "@/app/JsonData/Properties.json";

const PropertiesPage = () => {
  return (
    <>
      <div className="relative h-[75vh] overflow-hidden flex items-center justify-center">
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
        <h1 className="text-white text-[6rem] md:text-[10rem] font-bricolage z-20">
          Properties
        </h1>
      </div>
      <div className="px-[8%] lg:px-[12%] py-12">
        <h1 className="text-4xl font-bold font-bricolage mb-6">
          Available Properties
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PropertyData.map((property) => (
            <Link
              key={property.id}
              href={`/properties/${property.id}`}
              className="relative block h-[400px] rounded overflow-hidden group shadow-md"
            >
              <Image
                src={property.image}
                alt={property.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-x-0 bottom-0 h-[30%] bg-linear-to-t from-black to-transparent opacity-0 group-hover:opacity-100 trabsition-opacity duration-700 z-0" />
              <div className="flex justify-between items-center w-full absolute bottom-0 left-0 z-10 px-4 py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-700">
                <h4 className="text-white text-2xl font-bricolage font-bold">
                  {property.title}
                </h4>
                <p className="text-white text-xl font-bricolage">
                  {property.id}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default PropertiesPage;
