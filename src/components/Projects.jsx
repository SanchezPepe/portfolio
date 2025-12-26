import React from "react";

const Projects = ({ data }) => {
  return (
    <div className="col-span-1 md:col-span-2 lg:col-span-2 rounded-3xl bg-card-light dark:bg-card-dark p-6 sm:p-8 shadow-sm border border-gray-100 dark:border-gray-800">
      <div className="flex items-center gap-2 mb-6">
        <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/20 text-indigo-600">
          <span className="material-symbols-outlined">rocket_launch</span>
        </div>
        <h3 className="text-xl font-bold">Projects</h3>
      </div>
      <div className="space-y-4">
        {data.projects.map((project) => (
          <a
            key={project.id}
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative sm:w-32 h-32 sm:h-auto overflow-hidden shrink-0">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${project.image}')` }}
                ></div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-2xl">
                    open_in_new
                  </span>
                </div>
              </div>
              <div className="p-4 sm:p-3 sm:py-4 flex-1 flex flex-col justify-center">
                <h4 className="font-bold text-base text-gray-900 dark:text-white mb-1.5 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-3 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
