import React from "react";
import Icon from './Icon';

const Contact = ({ data }) => {
  return (
    <div
      className="rounded-2xl bg-white dark:bg-[#1e2736] p-6 shadow-sm ring-1 ring-gray-100 dark:ring-gray-800"
      id="contact"
    >
      <h3 className="flex items-center gap-2 text-xl font-bold text-[#111318] dark:text-white mb-6">
        <Icon name={data.contact.icon} className="text-primary" />
        {data.contact.title}
      </h3>
      <ul className="space-y-4">
        {data.contact.items.map((item) => (
          <li key={item.id}>
            <a
              className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors group"
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex size-10 items-center justify-center rounded-full bg-[#f0f2f4] dark:bg-gray-800 group-hover:bg-primary/10 transition-colors">
                <Icon name={item.icon} className="text-lg group-hover:text-primary" />
              </div>
              <span className="font-medium">{item.text}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contact;
