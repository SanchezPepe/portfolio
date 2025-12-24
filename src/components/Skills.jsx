import React from 'react';

const Skills = ({ data }) => {
  return (
    <div
      className="rounded-2xl bg-white dark:bg-[#1e2736] p-6 shadow-sm ring-1 ring-gray-100 dark:ring-gray-800"
      id="skills"
    >
      <h3
        className="flex items-center gap-2 text-xl font-bold text-[#111318] dark:text-white mb-6"
      >
        <span className="material-symbols-outlined text-primary">
          {data.skills.icon}
        </span>
        {data.skills.title}
      </h3>
      <div className="space-y-6">
        {data.skills.categories.map((category, index) => (
          <div key={index}>
            <h4
              className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3"
            >
              {category.name}
            </h4>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="inline-flex items-center rounded-md bg-[#f0f2f4] dark:bg-gray-800 px-2.5 py-1 text-sm font-medium text-[#111318] dark:text-gray-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;