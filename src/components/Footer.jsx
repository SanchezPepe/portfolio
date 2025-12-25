import React from "react";
import Icon from './Icon';

const Footer = ({ data }) => {
  return (
    <footer className="mt-auto border-t border-[#f0f2f4] dark:border-gray-800 bg-white dark:bg-[#101622] py-8 no-print">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {data.footer.copyright} - © {new Date().getFullYear()}
        </p>
        <div className="flex items-center gap-6">
          {data.footer.social.map((social) => (
            <a
              key={social.name}
              className="text-gray-400 hover:text-primary transition-colors"
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">{social.name}</span>
              <Icon name={social.icon} className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
