import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { BiHomeAlt, BiUser, BiCode, BiBarChartAlt2 } from "react-icons/bi";
import { BsGithub, BsLinkedin, BsInstagram, BsCardImage } from "react-icons/bs";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const headerHeight = 25; // Tinggi header dalam piksel
  const linkClasses = (section) =>
    `flex items-center gap-2 px-2 py-2 cursor-pointer transition-all duration-300 ${
      activeSection === section ? "text-primary font-semibold" : "text-black"
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-3 max-w-[1200px] px-3">
        <div
          className="text-gradient font-secondary"
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
          data-aos-duration="400"
          data-aos-delay="300"
        >
          <a href="/">
            <h1 className="text-[30px] leading-none font-bold">FADHILAH</h1>
            <h4 className="font-normal leading-none">ARDHI</h4>
          </a>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="lg:hidden text-xl"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-full left-0 right-0 bg-white shadow-md lg:static lg:block lg:shadow-none`}
        >
          <div className="flex flex-col lg:flex-row lg:space-x-6 text-black p-4 lg:p-0">
            <Link
              to="home"
              className={linkClasses("home")}
              offset={-headerHeight}
              smooth={true}
              spy={true}
              onClick={() => {
                setActiveSection("home");
                setIsOpen(false);
              }}
              aria-label="Go to home section"
            >
              <BiHomeAlt className="text-xl" /> Home
            </Link>
            <Link
              to="profile"
              className={linkClasses("profile")}
              offset={-headerHeight}
              smooth={true}
              spy={true}
              onClick={() => {
                setActiveSection("profile");
                setIsOpen(false);
              }}
              aria-label="Go to profile section"
            >
              <BiUser className="text-xl" /> Profile
            </Link>
            <Link
              to="skill"
              className={linkClasses("skill")}
              offset={-headerHeight}
              smooth={true}
              spy={true}
              onClick={() => {
                setActiveSection("skill");
                setIsOpen(false);
              }}
              aria-label="Go to skills section"
            >
              <BiBarChartAlt2 className="text-xl" /> Skills
            </Link>
            <Link
              to="portfolio"
              className={linkClasses("portfolio")}
              offset={-headerHeight}
              smooth={true}
              spy={true}
              onClick={() => {
                setActiveSection("portfolio");
                setIsOpen(false);
              }}
              aria-label="Go to portfolio section"
            >
              <BiCode className="text-xl" /> Portfolio
            </Link>
            <Link
              to="Gallery"
              className={linkClasses("Gallery")}
              offset={-headerHeight}
              smooth={true}
              spy={true}
              onClick={() => {
                setActiveSection("Gallery");
                setIsOpen(false);
              }}
              aria-label="Go to portfolio section"
            >
              <BsCardImage className="text-xl" /> Gallery
            </Link>
          </div>
        </nav>

        {/* Social Media Links */}
        <div
          className="hidden lg:flex items-center space-x-3"
          data-aos="fade-left"
          data-aos-easing="ease-in-sine"
          data-aos-duration="400"
          data-aos-delay="300"
        >
          <a href="https://github.com/fdhlah30">
            <BsGithub />
          </a>
          <a href="https://www.linkedin.com/in/fadhilah-ardhiansyah">
            <BsLinkedin />
          </a>
          <a href="https://www.instagram.com/fdhlah30">
            <BsInstagram />
          </a>
        </div>
      </div>
    </header>
  );
}
