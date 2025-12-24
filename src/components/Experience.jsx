import React from 'react';

const Experience = ({ data }) => {
  return (
    <section className="scroll-mt-24" id="experience">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-[#111318] dark:text-white">
          Work Experience
        </h2>
      </div>
      <div
        className="relative border-l-2 border-gray-200 dark:border-gray-800 ml-3 space-y-12"
      >
        {data.experience.map((exp) => (
          <div key={exp.id} className="relative pl-8 sm:pl-12 group">
            <div
              className="absolute -left-[9px] top-0 flex size-4 items-center justify-center rounded-full bg-white dark:bg-[#101622] ring-4 ring-white dark:ring-[#101622]"
            >
              <div
                className={`size-2 rounded-full ${
                  exp.current
                    ? 'bg-primary'
                    : 'bg-gray-300 dark:bg-gray-600 group-hover:bg-primary'
                } transition-colors`}
              ></div>
            </div>
            <div
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2"
            >
              <h3
                className="text-xl font-bold text-[#111318] dark:text-white group-hover:text-primary transition-colors"
              >
                {exp.title}
              </h3>
              <span
                className="text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full w-fit"
              >
                {exp.period}
              </span>
            </div>
            <div
              className="text-base font-semibold text-gray-700 dark:text-gray-300 mb-4"
            >
              {exp.company}
            </div>
            <p
              className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed"
            >
              {exp.description}
            </p>
            {exp.highlights.length > 0 && (
              <ul
                className="list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-400 marker:text-primary"
              >
                {exp.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;