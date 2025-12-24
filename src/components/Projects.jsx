import React from 'react';

const Projects = ({ data }) => {
  return (
    <section className="scroll-mt-24" id="projects">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-[#111318] dark:text-white">
          Featured Projects
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.projects.map((project) => (
          <div
            key={project.id}
            className="group flex flex-col rounded-xl bg-white dark:bg-[#1e2736] border border-gray-100 dark:border-gray-800 overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
          >
            <div
              className="h-48 w-full bg-cover bg-center"
              data-alt={project.imageAlt}
              style={{
                backgroundImage: `url('${project.image}')`,
              }}
            ></div>
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-center justify-between mb-2">
                <h3
                  className="text-lg font-bold text-[#111318] dark:text-white"
                >
                  {project.title}
                </h3>
                <div className="flex gap-2">
                  <a
                    className="text-gray-400 hover:text-primary transition-colors"
                    href={project.liveUrl}
                  >
                    <span className="material-symbols-outlined text-xl">
                      open_in_new
                    </span>
                  </a>
                  <a
                    className="text-gray-400 hover:text-primary transition-colors"
                    href={project.githubUrl}
                  >
                    <span className="material-symbols-outlined text-xl">
                      code
                    </span>
                  </a>
                </div>
              </div>
              <p
                className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-1"
              >
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs font-medium px-2 py-1 rounded bg-primary/10 text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;