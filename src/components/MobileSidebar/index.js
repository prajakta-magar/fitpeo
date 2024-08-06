import React, { useEffect, useRef } from "react";
import { IoMdHome } from "react-icons/io";
import { BsFileBarGraph } from "react-icons/bs";
import { BsClipboardCheck } from "react-icons/bs";
import { CiWallet } from "react-icons/ci";
import { BsBagCheck } from "react-icons/bs";
import { LiaSignOutAltSolid } from "react-icons/lia";
import { IoIosCloudy } from "react-icons/io";

const MobileSidebar = ( {onClose} ) => {

  const sidebarRef = useRef();
  useEffect(() => {
    const handleClickOutsideSidebar = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        onClose() // Close the sidebar when clicking outside
      }
    };

    document.addEventListener("mousedown", handleClickOutsideSidebar);

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideSidebar);
    };
  }, [onClose]);

  return (
    <>
      {/* Mobile sidebar */}
        <div
          className="h-full fixed top-0 bottom-0 lg:hidden"
          ref={sidebarRef}
          style={{ zIndex: 9999 }}
        >
          <div className="flex flex-col bg-gray-800 h-screen p-6 justify-between">
            <div className="flex flex-col items-center gap-8">
              <IoIosCloudy color="skyblue" size={40} />
              <IoMdHome color="white" size={25} />
              <BsFileBarGraph color="white" size={25} />
              <BsClipboardCheck color="white" size={25} />
              <CiWallet color="white" size={25} />
              <BsBagCheck color="white" size={25} />
            </div>
            <div className="flex flex-col items-center">
              <LiaSignOutAltSolid color="white" size={25} />
            </div>
          </div>
        </div>
     
      {/* Overlay to cover the rest of the content */}
        <div
          className="fixed top-0 left-0 w-full h-full bg-slate-400 opacity-40"
          style={{ zIndex: 9998, pointerEvents: "auto" }}
          onClick={onClose}
        />
    </>
  );
};

export default MobileSidebar;
