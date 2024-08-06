import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { FaRegEnvelope } from "react-icons/fa";
import { LuSettings } from "react-icons/lu";
import { IoNotificationsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoIosMenu } from "react-icons/io";
import MobileSidebar from "../MobileSidebar";

const Navbar = () => {
  const icons = [
    {
      icon: <FaRegEnvelope color="white" size={18} />,
    },
    {
      icon: <LuSettings color="white" size={18} />,
    },
    {
      icon: <IoNotificationsOutline color="white" size={18} />,
    },
    {
      icon: <CgProfile color="white" size={18} />,
    },
  ];
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };
  return (
    <>
      <div className="hidden lg:block">
        <div className="flex w-full h-20 py-1 px-5 items-center justify-between bg-gray-800">
          <div className="flex content-center bg-gray-700 items-center border border-gray-600 rounded-md lg:w-[30%] xl:w-[25%] xxl:w-[20%] h-10">
            <div className="m-1 w-6">
              <BsSearch size={18} color="white" />
            </div>
            <div className="h-10">
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent border-none focus:outline-none w-full h-10 placeholder-white"
              />
            </div>
          </div>
          <div className="flex gap-6">
            {icons.map((i, index) => {
              return (
                <div className="bg-gray-400 p-2 rounded-full">{i.icon}</div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="block lg:hidden">
        <div className="flex w-full h-20 py-1 px-5 items-center justify-between bg-gray-800">
          <div className="cursor-pointer flex" onClick={toggleSidebar}>
            <IoIosMenu size={25} color="white" />
            <div className="text-white ml-1 md:ml-5">Dashboard</div>
          </div>
          <div className="flex gap-4">
            <BsSearch size={18} color="white" />
            {icons.map((i, index) => {
              return <div className="">{i.icon}</div>;
            })}
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        {isSidebarVisible && (
          <MobileSidebar onClose={() => setSidebarVisible(false)} />
        )}
      </div>
    </>
  );
};

export default Navbar;
