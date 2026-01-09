import React from "react";

const PortfolioHistory = ({ data }) => {
  const repoUrl = data.social_links.github + "/portfolio";

  return (
    <div className="rounded-3xl bg-card-light dark:bg-card-dark p-6 shadow-sm border border-gray-100 dark:border-gray-800">
      <div className="flex items-center gap-2 mb-4">
        <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/20 text-purple-600">
          <span className="material-symbols-outlined">history</span>
        </div>
        <h3 className="text-xl font-bold">Portfolio History</h3>
      </div>

      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
        A trip down memory lane through the different versions of this site.
      </p>

      <div className="space-y-4">
        {data.portfolioHistory.map((version, index) => (
          <div
            key={version.id}
            className="relative pl-6 pb-4 border-l-2 border-gray-200 dark:border-gray-700 last:pb-0"
          >
            {/* Timeline dot */}
            <div
              className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 border-white dark:border-card-dark ${
                index === 0
                  ? "bg-primary"
                  : "bg-gray-300 dark:bg-gray-600"
              }`}
            />

            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-gray-900 dark:text-white text-sm">
                    {version.name}
                  </h4>
                  {index === 0 && (
                    <span className="px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full">
                      Current
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {version.description}
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                  {version.date} · {version.tech}
                </p>
              </div>

              <a
                href={`${repoUrl}/tree/${version.commit}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white transition-colors shrink-0"
              >
                <span className="material-symbols-outlined text-[14px]">code</span>
                View Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioHistory;
