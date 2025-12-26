import React from "react";
import Icon from "./Icon";

const Footer = ({ data }) => {
  return (
    <footer className="mt-12 text-center text-sm text-gray-500 no-print">
      <p>
        © {new Date().getFullYear()} {data.footer.copyright}
      </p>
    </footer>
  );
};

export default Footer;
