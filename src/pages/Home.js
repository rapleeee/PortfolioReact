import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import profilePic from "../assets/profilePic.jpg";


const Home = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar />
      <div className="flex flex-col lg:flex-row items-center mt-20 lg:mt-40">
        {/* Hide this div on small screens */}
        <div className="hidden lg:block mx-4 lg:ml-80 lg:mr-20 text-3xl font-bold text-left">
          <p className="text-2xl font-normal">Hi Buddy,</p>
          <p>I'm Rafli</p>
          <p className="text-lime-500">FrontendDev</p>
          <a
            href="#contact"
            className="mt-4 inline-block border border-slate-300 hover:border-slate-400 bg-lime-500 text-slate-100 rounded-lg text-base p-2"
          >
            Contact Me
          </a>
        </div>
        <img
          src={profilePic}
          alt="Profile"
          className="md:w-62 md:h-80 rounded-full mb-4 lg:mb-0 lg:mx-4"
        />
        <div className="mx-4 lg:ml-20 lg:mr-40 text-3xl font-bold text-left">
          <p className="text-xl font-light">Welcome to my space,</p>
          <p className="text-lime-500">Based in Bekasi</p>
          <p className="text-lg font-medium">
            Have been focused on learning programming since 2023 when I started studying in University. If you want to ask something about me, click the contact session.
          </p>
          <div className="mt-4 flex space-x-4">
            <a
              href="/assets/RafliMaulana-resume.pdf"
              download="RafliMaulana-resume.pdf"
              className=" inline-block border border-slate-300 hover:border-slate-400 bg-lime-500 text-slate-100 rounded-lg text-base p-2"
            >
              Download CV
            </a>
            <a
              href="#portfolio"
              className="inline-block border border-slate-300 hover:border-slate-400 bg-lime-500 text-slate-100 rounded-lg text-base p-2"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </div>

      <div id="about" className="mt-16">
        <About />
      </div>
      <div id="portfolio" className="mt-16">
        <Portfolio />
      </div>
      <div id="contact" className="mt-16">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
