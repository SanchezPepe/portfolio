import React from "react";
import heroImage from "../assets/portrait.jpeg";
import Icon from './Icon';

const Hero = ({ data }) => {
  return (
    <section className="relative bg-white dark:bg-[#101622] pt-12 pb-16 lg:pt-20 lg:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_at_center,#000_70%,transparent_100%)]"></div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-6 lg:max-w-2xl">
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl font-black leading-tight tracking-tight text-[#111318] dark:text-white sm:text-5xl lg:text-6xl">
                {data.personal.tagline}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                  {data.personal.taglineHighlight}
                </span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 sm:text-xl leading-relaxed max-w-xl">
                {data.personal.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
              {data.hero.buttons.map((button, index) => (
                <a
                  key={index}
                  className={`flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-base font-bold transition-all shadow-md ${
                    button.type === "primary"
                      ? "bg-primary text-white hover:bg-blue-700"
                      : "bg-[#f0f2f4] dark:bg-gray-800 text-[#111318] dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                  href={button.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name={button.icon} className="h-5 w-5" />
                  {button.text}
                </a>
              ))}
            </div>
          </div>
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative size-64 sm:size-80 lg:size-96 rounded-2xl overflow-hidden ring-4 ring-white dark:ring-gray-800 shadow-2xl rotate-3 transition-transform hover:rotate-0 duration-500">
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
              <img
                alt={data.personal.imageAlt}
                className="h-full w-full object-cover"
                src={heroImage}
              />
            </div>
            {/* Decorative blob */}
            <div className="absolute -bottom-6 -right-6 -z-10 h-64 w-64 rounded-full bg-primary/30 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
