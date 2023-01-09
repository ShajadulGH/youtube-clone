import React, { Fragment } from "react";
import LeftBarItems from "../SideBar/LeftBarItems";
import { useContext } from "react";
import { categories } from "../../utils/sidebar-items";
import Context from "../../context/context";
const LeftBar = () => {
  const { toggleMenu, setSelectedCategory, selectedCategory } =
    useContext(Context);
  const onClickAction = (type, name) => {
    switch (type) {
      case "home":
        return setSelectedCategory(name);
      case "category":
        return setSelectedCategory(name);
      default:
        break;
    }
  };
  return (
    <div
      className={` md:block w-[240px] h-full overflow-y-auto py-4 absolute md:relative bg-black translate-x-[-240px] md:translate-x-[0px] md:w-[80px] transition-all ${
        toggleMenu ? "translate-x-0 md:w-[240px] " : ""
      }`}
    >
      <div className=" flex flex-col px-5">
        {categories.map((item) => (
          <Fragment>
            <LeftBarItems
              text={item.name}
              icon={item.icon}
              action={() => onClickAction(item.type, item.name)}
              selectedCategory={selectedCategory}
              toggleMenu={toggleMenu}
            />
            {item.divider && <hr className=" my-3 border-white/[0.1]" />}
          </Fragment>
        ))}
      </div>
    </div>
  );
};
export default LeftBar;
