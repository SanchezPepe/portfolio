import React from 'react';
import DarkModeToggle from './DarkModeToggle';

const Header = ({ isDark, toggleDarkMode, data }) => {
  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-[#f0f2f4] dark:border-gray-800 bg-white/90 dark:bg-[#101622]/90 backdrop-blur-md no-print"
    >
      <div
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <div className="flex items-center gap-3">
          <div
            className="flex size-8 items-center justify-center rounded-lg bg-primary text-white"
          >
            <span className="text-lg font-bold">{data.personal.initials}</span>
          </div>
          <h2
            className="text-lg font-bold leading-tight tracking-[-0.015em] text-[#111318] dark:text-white"
          >
            {data.personal.name}
          </h2>
        </div>
        <nav className="hidden md:flex flex-1 justify-center gap-8">
          {data.navigation.map((item, index) => (
            <a
              key={index}
              className="text-sm font-medium hover:text-primary transition-colors text-[#111318] dark:text-gray-300"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <DarkModeToggle isDark={isDark} onToggle={toggleDarkMode} />
          <button
            className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/30"
          >
            <span className="material-symbols-outlined text-[20px]">download</span>
            <span className="hidden sm:inline">Download CV</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;