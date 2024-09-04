import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div>
      <div className="bg-[#F8FBFB]  dark:bg-[#1D1D1D] h-20 flex justify-center items-center rounded-b-2xl">
        <h2 className="text-sm">
          © {year} All Rights Reserved By Md Rasel Molla
        </h2>
      </div>
    </div>
  );
}

export default Footer
