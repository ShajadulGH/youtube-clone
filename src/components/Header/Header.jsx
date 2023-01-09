import React, { useContext, useRef } from "react";
import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { CgClose } from "react-icons/cg";
import Context from "../../context/context";
import { Link } from "react-router-dom";
import YoutubeLogo from "../../images/yt-logo.png";
import YoutubeLogoMobile from "../../images//yt-logo-mobile.png";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
const Header = () => {
  const { toggleMenu, setToggleMenu, setSelectedCategory } =
    useContext(Context);
  const searchRef = useRef();
  const searchHandler = (e) => {
    if (
      searchRef.current.value.trim().length !== 0 &&
      (e.key === "Enter" || e === "search")
    ) {
      setSelectedCategory(searchRef.current.value);
      searchRef.current.value = "";
    }
  };
  const toggleHandler = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <div className="bg-black text-white h-14 flex justify-between items-center px-4 sticky">
      {/* Menu and Logo */}
      <div className=" flex h-5 items-center  ">
        {/* Menu */}
        <div
          className=" md:mr-4 sm:mr-2 hover:bg-[#272727] rounded-full h-10 w-10 flex justify-center items-center cursor-pointer "
          onClick={toggleHandler}
        >
          {toggleMenu && <CgClose className=" w-5 h-5" />}
          {!toggleMenu && <SlMenu className=" w-5 h-5" />}
        </div>
        {/* Logo */}
        <Link to="/" className="flex h-5">
          <img className="hidden md:block " src={YoutubeLogo} alt="Logo" />
          <img
            className="md:hidden sm:block"
            src={YoutubeLogoMobile}
            alt="Logo"
          />
        </Link>
      </div>
      {/* Search Bar */}
      <div className="flex items-center rounded-full ">
        <div className="group flex h-8 md:h-10 md:ml-10 md:pl-5 border border-[#303030] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0">
          <div className="w-10 items-center justify-center hidden group-focus-within:md:flex">
            <IoIosSearch />
          </div>
          <input
            onKeyUp={searchHandler}
            ref={searchRef}
            type="text"
            className=" bg-transparent outline-none text-white pr-5 pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]"
          />
        </div>
        <button
          onClick={() => searchHandler("search")}
          className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-[#303030] rounded-r-3xl bg-white/0.1"
        >
          <IoIosSearch />
        </button>
      </div>
      {/* Profile, Notification, video */}
      <div className=" flex items-center">
        <div className=" hidden md:flex ">
          <div className="className= md:mr-4 sm:mr-2 hover:bg-[#272727] rounded-full h-10 w-10 flex justify-center items-center cursor-pointer ">
            <RiVideoAddLine className="text-white text-xl cursor-pointer" />
          </div>
          <div className="className= md:mr-4 sm:mr-2 hover:bg-[#272727] rounded-full h-10 w-10 flex justify-center items-center cursor-pointer ">
            <FiBell className="text-white text-xl cursor-pointer" />
          </div>
        </div>
        <div className=" ">
          <img
            className=" h-8 w-8 rounded-full md:ml-4"
            src="https://xsgames.co/randomusers/assets/avatars/male/16.jpg"
            alt="shajadul"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
