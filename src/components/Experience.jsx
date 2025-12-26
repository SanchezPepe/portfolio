import React from "react";

const Experience = ({ data }) => {
  // Calculate years of experience from earliest position
  const calculateYearsOfExperience = () => {
    const months = {
      'January': 0, 'February': 1, 'March': 2, 'April': 3,
      'May': 4, 'June': 5, 'July': 6, 'August': 7,
      'September': 8, 'October': 9, 'November': 10, 'December': 11
    };

    let earliestDate = new Date();

    data.experience.forEach(exp => {
      const parts = exp.period.split(' - ')[0].split(' ');
      const month = months[parts[0]];
      const year = parseInt(parts[1]);
      const startDate = new Date(year, month);
      if (startDate < earliestDate) {
        earliestDate = startDate;
      }
    });

    const now = new Date();
    const years = Math.floor((now - earliestDate) / (1000 * 60 * 60 * 24 * 365));
    return years;
  };

  const yearsOfExperience = calculateYearsOfExperience();

  return (
    <div className="h-full rounded-3xl bg-card-light dark:bg-card-dark p-6 sm:p-8 shadow-sm border border-gray-100 dark:border-gray-800">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/20 text-primary">
            <span className="material-symbols-outlined">work_history</span>
          </div>
          <h3 className="text-xl font-bold">Experience</h3>
        </div>
        <span className="text-xs font-medium px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-500">
          {yearsOfExperience}+ Years
        </span>
      </div>
      <div className="relative border-l-2 border-gray-100 dark:border-gray-800 ml-3 space-y-10">
        {data.experience.map((exp, index) => (
          <div key={exp.id} className="relative pl-8 group">
            <div className={`absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-4 border-white dark:border-[#161b22] ${
              exp.current
                ? "bg-primary shadow-sm"
                : "bg-gray-300 dark:bg-gray-600 group-hover:bg-primary transition-colors"
            }`}></div>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
              <h4 className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                {exp.title}
              </h4>
              <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 px-2 py-1 rounded">
                {exp.period}
              </span>
            </div>
            <p className="font-semibold text-sm text-gray-600 dark:text-gray-300 mb-2">
              {exp.company}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
