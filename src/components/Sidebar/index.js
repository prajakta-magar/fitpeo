import React, { useState } from "react";
import { IoIosCloudy, IoMdHome } from "react-icons/io";
import { BsFileBarGraph, BsClipboardCheck, BsBagCheck } from "react-icons/bs";
import { CiWallet } from "react-icons/ci";
import { LiaSignOutAltSolid } from "react-icons/lia";

const Sidebar = () => {
  const [activeIcon, setActiveIcon] = useState("home");

  const icons = [
    { id: "home", component: IoMdHome },
    { id: "graph", component: BsFileBarGraph },
    { id: "checklist", component: BsClipboardCheck },
    { id: "wallet", component: CiWallet },
    { id: "bag", component: BsBagCheck },
  ];

  return (
    <div className="flex flex-col bg-gray-800 h-screen p-4 justify-between">
      <div className="flex flex-col items-center gap-8">
        <IoIosCloudy color="skyblue" size={40} />
        {icons.map((icon) => {
          const IconComponent = icon.component;
          return (
            <IconComponent
              key={icon.id}
              color={activeIcon === icon.id ? "blue" : "white"}
              size={25}
              onClick={() => setActiveIcon(icon.id)}
              className="cursor-pointer"
            />
          );
        })}
      </div>
      <div className="flex flex-col items-center">
        <LiaSignOutAltSolid color="white" size={25} />
      </div>
    </div>
  );
};

export default Sidebar;
