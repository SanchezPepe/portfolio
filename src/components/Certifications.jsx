import React from "react";

const Certifications = ({ data }) => {
  return (
    <>
      {data.certifications.map((cert) => {
        const CertWrapper = cert.link ? 'a' : 'div';
        const wrapperProps = cert.link ? {
          href: cert.link,
          target: "_blank",
          rel: "noopener noreferrer"
        } : {};

        return (
          <CertWrapper
            key={cert.id}
            {...wrapperProps}
            className="col-span-1 md:col-span-1 lg:col-span-1 rounded-3xl bg-card-light dark:bg-card-dark p-6 sm:p-8 shadow-sm border border-gray-100 dark:border-gray-800 hover:border-primary/30 transition-colors flex flex-col justify-center"
          >
            <div className="flex items-center gap-4">
              <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${cert.iconBgColor} ${cert.iconColor} shadow-sm`}>
                <span className="material-symbols-outlined text-[24px]">
                  {cert.icon}
                </span>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1">
                  {cert.title}
                </h4>
                <p className="text-xs text-gray-500">
                  {cert.issuer}
                </p>
                <p className="text-xs text-gray-400 mt-0.5">
                  {cert.date}
                </p>
              </div>
            </div>
          </CertWrapper>
        );
      })}
    </>
  );
};

export default Certifications;
