import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <p className="text-center">
        &copy; {new Date().getFullYear()} Your Website Name
      </p>
    </footer>
  );
};

export default Footer;
