import React from "react";

const page = () => {
  return (
    <>
      <div>
        {/* {page title} */}
        <div className="relative flex justify-center items-center h-[75vh] overflow-hidden">
          <h1 className="absolute text-white font-bricolage text-7xl font-bold z-50">
            Contact Us
          </h1>
          <video
            src=""
            muted
            loop
            autoPlay
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src="/page-title.mp4" type="video/mp4" />
          </video>
          <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-10" />
        </div>

        {/* contact section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-10">
              {/* left side */}
              <div className="lg:w-1/2 space-y-6">
                <h1 className="text 6xl font-bricolage font-bold">Lets Talk</h1>
                <h2 className="text-xl text-gray-700">
                  Lets start transforming your space-reach out and bring your
                  vision to life today.
                </h2>
                <div className="space-y-4">
                  <h6 className="uppercase text-lg tracking-widest border-b pb-4">
                    Call Us
                  </h6>
                  <h3 className="text-3xl font-light">
                    <a href="" className="text-black no-underline">
                      +2348155045934
                    </a>
                  </h3>
                  <div className="flex gap-4">
                    <a href="#">
                      <i className="bi bi-facebook text-2xl text-black"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-instagram text-2xl text-black"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* right side */}
              <div className="lg:w-2/5">
                <form className="space-y-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    className="w-full border-b border-gray-300 focus:border-black outline-none py-2"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="w-full border-b border-gray-300 focus:border-black outline-none py-2"
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phoe"
                    required
                    className="w-full border-b border-gray-300 focus:border-black outline-none py-2"
                  />
                  <textarea
                    rows="6"
                    name="message"
                    required
                    placeholder="Your Message"
                    className="w-full border-b border-gray-300 focus:border-black outline-none py-2"
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-black text-white py-2 px-6 rounded-md text-lg"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* contact banner */}
        <section className="bg-black px-[8%] lg:px-[12%] py-12">
          <div className="overflow-hidden">
            <div className="bg-white rounded flex flex-col md:flex-row gap-6 p-10 items-center shadow-md">
              {/* image */}
              <div className="w-full md:w-2/5 h-[400px]">
                <img
                  src="/contact-banner.jpg"
                  alt="contact-banner"
                  className="w-full h-full object-cover rounded-2xl"
                ></img>
              </div>

              {/* info */}
              <div className="w-full md:w-3/5">
                <h1 className="text-4xl md:text-6xl font-bold">
                  Your Dream Starts Here
                </h1>
                <p className="text-gray-500 mt-4">
                  All queries are replied within 24hrs.
                </p>
              </div>
            </div>

            {/* google map */}
            <div className="mt-10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.435728711743!2d3.197725775039766!3d6.466355293525314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8696500590b1%3A0xf27b47e41fad6dab!2sLagos%20State%20University!5e0!3m2!1sen!2sng!4v1764265350450!5m2!1sen!2sng"
                width="100%"
                height="650"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className="rounded-[10px]"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default page;
