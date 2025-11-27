"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Nav = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/About" },
    { name: "Services", href: "/Services" },
    { name: "Properties", href: "/properties" },
    { name: "Contact", href: "/Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isSticky
          ? "bg-white shadow-md"
          : "bg-transparent border-b border-gray-400"
      }`}
    >
      <div className="flex justify-between items-center px-[8%] lg:px-[12%] py-3">
        <Link
          href="/"
          className={`text-5xl font-bold font-bricolage logo ${
            isSticky ? "text-black" : "text-white"
          }`}
        >
          Ves<span className="text-orange-500 font-bricolage">tra</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center space-x-6 font-bricolage">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-base font-medium transition-all hover:bg-gray-200 hover:text-black relative px-3 py-2 rounded ${
                isSticky ? "text-black" : "text-white"
              } ${
                pathname === link.href
                  ? "bg-gray-200 text-black active-links"
                  : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* {social icons} */}
        <div className="hidden lg:flex space-x-4">
          <a href="#">
            <i
              className={`bi bi-facebook text-xl ${
                isSticky ? "text-black" : "text-white"
              }`}
            ></i>
          </a>
          <a href="#">
            <i
              className={`bi bi-instagram text-xl ${
                isSticky ? "text-black" : "text-white"
              }`}
            ></i>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className={`lg:hidden text-2xl ${
            isSticky ? "text-black" : "text-white"
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className="ri-menu-2-fill"></i>
        </button>
      </div>

      {/* side menu */}
      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            className="lg:hidden bg-white text-black p-6 side-menu"
            initial={{ y: -12, opacity: 0 }} // start slightly above the nav
            animate={{ y: 0, opacity: 1 }} // slide DOWN into view
            exit={{ y: -12, opacity: 0 }} // slide UP back into nav
            transition={{
              duration: 0.22,
              ease: "easeInOut",
              when: "beforeChildren", // start container then children on open
            }}
            style={{ overflow: "visible", transformOrigin: "top center" }}
          >
            <motion.ul
              className="space-y-4 menu"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                visible: {
                  transition: { staggerChildren: 0.13, delayChildren: 0.2 },
                },
                exit: {
                  transition: { staggerChildren: 0.04, staggerDirection: -1 },
                },
              }}
            >
              {navLinks.map((link) => (
                <motion.li
                  key={link.name}
                  variants={{
                    hidden: { y: -8, opacity: 0 },
                    visible: {
                      y: 0,
                      opacity: 1,
                      transition: { duration: 0.16 },
                    },
                    exit: { y: -8, opacity: 0, transition: { duration: 0.12 } },
                  }}
                  className=""
                  transition={{}}
                >
                  <Link
                    href={link.href}
                    className="block text-base"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
