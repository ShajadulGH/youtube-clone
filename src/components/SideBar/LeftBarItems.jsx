import React from "react";

const LeftBarItems = ({ toggleMenu, text, icon, action, selectedCategory }) => {
  return (
    <div
      onClick={action}
      className={`flex h-10 px-3 text-white items-center gap-5 text-sm hover:bg-white/[0.15] rounded-full cursor-pointer ${
        selectedCategory === text ? "bg-white/[0.15]" : ""
      }`}
    >
      <span className={`text-lg ${!toggleMenu && "ml-[-3px]"} `}>{icon}</span>
      {toggleMenu && (text === "New" ? "Home" : text)}
      {}
    </div>
  );
};

export default LeftBarItems;
