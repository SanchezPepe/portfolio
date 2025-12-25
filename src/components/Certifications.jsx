import React from "react";

const Certifications = ({ data }) => {
  return (
    <section className="scroll-mt-24" id="certifications">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-[#111318] dark:text-white">
          Education &amp; Certifications
        </h2>
      </div>
      <div className="space-y-4">
        {data.certifications.map((cert) =>
          cert.link ? (
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              key={cert.id}
              className="flex items-start gap-4 rounded-xl bg-white dark:bg-[#1e2736] p-5 shadow-sm border border-gray-100 dark:border-gray-800 transition-colors hover:border-primary/30"
            >
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${cert.iconBgColor} ${cert.iconColor}`}
              >
                <span className="material-symbols-outlined">{cert.icon}</span>
              </div>
              <div>
                <h4 className="text-base font-bold text-[#111318] dark:text-white">
                  {cert.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {cert.issuer} • {cert.date}
                </p>
              </div>
            </a>
          ) : (
            <div
              key={cert.id}
              className="flex items-start gap-4 rounded-xl bg-white dark:bg-[#1e2736] p-5 shadow-sm border border-gray-100 dark:border-gray-800 transition-colors hover:border-primary/30"
            >
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${cert.iconBgColor} ${cert.iconColor}`}
              >
                <span className="material-symbols-outlined">{cert.icon}</span>
              </div>
              <div>
                <h4 className="text-base font-bold text-[#111318] dark:text-white">
                  {cert.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {cert.issuer} • {cert.date}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Certifications;
