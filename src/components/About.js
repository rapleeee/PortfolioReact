import React from 'react';
import js from "../assets/js.png";
import firebase from "../assets/firebase.webp";
import laravel from "../assets/laravel.png";
import Tailwind from "../assets/Tailwind.png";
import ReactLogo from "../assets/ReactLogo.webp";
import Bootstrap_logo from "../assets/Bootstrap_logo.svg";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-2">About Me</h2>
      <p className="text-lime-500 font-bold mb-2">
        A story of hardwork and perseverance
      </p>
      <p className="mb-2">
        I like creating things on the internet. I am interested in web
        development in 2023. I am interested in learning about HTML and CSS.
      </p>
      <p className="mb-4">
        I also have several projects that can be accessed by the public, namely
        <a href="https://sremporium.vercel.app/" className="text-lime-500">
          {" "}
          sr.emporium
        </a>
        ,{" "}
        <a href="https://bridgecourse.vercel.app/" className="text-lime-500">
          {" "}
          BridgeCourse
        </a>{" "}
        and apps digital financial service application I also have a personal vlog at tiktok to share some tips n tricks that may be
        useful for you. I'm also interested in making designs, usually I use
        Canva, Figma and photoshop to make website designs.. 
        <p className="mb-2">I created some projects and put them on my github account.</p>
        <p className="mb-2 font-bold">Here are some technologies I can use:</p>
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <div className="h-26 w-26 border border-slate-300 rounded-lg p-4 bg-gray-100 flex items-center justify-center">
          <img src={js} alt='javascript' className='h-24 w-24 object-contain'/>
        </div>
        <div className="h-26 w-26 border border-slate-300 rounded-lg p-4 bg-gray-100 flex items-center justify-center">
          <img src={firebase} alt='firebase' className='h-24 w-24 object-contain'/>
        </div>
        <div className="h-26 w-26 border border-slate-300 rounded-lg p-4 bg-gray-100 flex items-center justify-center">
          <img src={laravel} alt='laravel' className='h-24 w-24 object-contain'/>
        </div>
        <div className="h-26 w-26 border border-slate-300 rounded-lg p-4 bg-gray-100 flex items-center justify-center">
          <img src={Tailwind} alt='tailwind' className='h-24 w-24 object-contain'/>
        </div>
        <div className="h-26 w-26 border border-slate-300 rounded-lg p-4 bg-gray-100 flex items-center justify-center">
          <img src={ReactLogo} alt='react' className='h-24 w-24 object-contain'/>
        </div>
        <div className="h-26 w-26 border border-slate-300 rounded-lg p-4 bg-gray-100 flex items-center justify-center">
          <img src={Bootstrap_logo} alt='bootstrap' className='h-24 w-24 object-contain'/>
        </div>
      </div>
    </div>
  );
};

export default About;
