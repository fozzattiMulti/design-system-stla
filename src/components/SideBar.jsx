import { useState } from "react";
import {
  MdTextFormat,
  MdHome,
  MdExtension,
  MdScreenShare,
  MdFormatColorFill,
  MdMenuOpen,
} from "react-icons/md";
import { NavLink } from "react-router-dom";
import LOGO from "../assets/logo.jpeg";

{
  /*const Menus = [
  { title: "Home", src: "/home", icon: <MdHome /> },
  { title: "Screens", src: "/screens", icon: <MdScreenShare /> },
  { title: "Components", src: "/components", icon: <MdExtension /> },
  { title: "Typografy ", src: "/typografy", icon: <MdTextFormat /> },
  { title: "Color Guide ", src: "/colorguide", icon: <MdFormatColorFill /> },

];*/
}

const SideBar = () => {
  const [open, setOpen] = useState(true);
  const toggleSidebar = () => {
    setOpen(!open);
  };
  return (
    <div className=" h-screen flex items-end justify-end fixed">
      <button
        className="fixed lg:hidden z-90 bottom-10 right-8 bg-blue w-10 h-10 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-blue-hover  duration-300"
        onClick={toggleSidebar}
      >
        <MdMenuOpen className="w-6" />
      </button>

      <div
        className={` ${
          open ? "w-48 px-2 " : "w-0 "
        } lg:w-72 bg-blue h-screen relative duration-500`}
      >
        <div className=" flex first-letter:justify-center items-center mt-3">
          <img
            className={`w-20 duration-500 ${
              open ? "block" : "hidden"
            } lg:block`}
            src={LOGO}
            alt="grupoMulti"
          />

       </div>
        <ul className="pt-6">
          <NavLink to="/home">
            <li
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-blue-hover text-white text-sm items-center gap-x-4`}
            >
              <MdHome />
              <span className={`flex-1 duration-500 ${open ? "block" : "hidden"} lg:block`}>
                Home
              </span>
            </li>
          </NavLink>
          <NavLink to="/screens">
            <li
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-blue-hover text-white text-sm items-center gap-x-4`}
            >
              <MdScreenShare />
              <span className={`flex-1 duration-500 ${open ? "block" : "hidden"} lg:block`}>
                Screens
              </span>
            </li>
          </NavLink>
          <NavLink to="/components">
            <li
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-blue-hover text-white text-sm items-center gap-x-4`}
            >
              <MdExtension />
              <span className={`flex-1 duration-500 ${open ? "block" : "hidden"} lg:block`}>
                Components
              </span>
            </li>
          </NavLink>
          <NavLink to="/typhografy">
            <li
              className={`flex duration-500 rounded-md p-2 cursor-pointer hover:bg-blue-hover text-white text-sm items-center gap-x-4`}
            >
              <MdTextFormat />
              <span className={`flex-1 duration-500 ${open ? "block" : "hidden"} lg:block`}>
                Typografy
              </span>
            </li>
          </NavLink>
          <NavLink to="/colorguide">
            <li
              className={`flex duration-500  rounded-md p-2 cursor-pointer hover:bg-blue-hover text-white text-sm items-center gap-x-4`}
            >
              <MdFormatColorFill />
              <span className={`flex-1 ${open ? "block" : "hidden"} lg:block`}>
                Color Guide
              </span>
            </li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
