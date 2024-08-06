import React from "react";
import ProgressCircle from "../Progress";
import { IoIosArrowForward } from "react-icons/io";
import { ImTarget } from "react-icons/im";
import { BiSolidDish } from "react-icons/bi";
import { FaBurger } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { FaStar } from "react-icons/fa";
import { FaSortUp } from "react-icons/fa";

const DashboardContent = () => {
  const items = [
    {
      icon: <ImTarget color="orange" size={30} />,
      name: "Goals",
    },
    {
      icon: <FaBurger color="blue" size={30} />,
      name: "Popular Dishes",
    },
    {
      icon: <BiSolidDish color="skyblue" size={30} />,
      name: "Menus",
    },
  ];
  const feedback = [
    {
      icon: <CgProfile size={25} color="white" />,
      name: "Jenny Wilson",
      content:
        "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.",
      rating: 4,
    },
    {
      icon: <CgProfile size={25} color="white" />,
      name: "Dianne Russell",
      content:
        "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service",
      rating: 4,
    },
    {
      icon: <CgProfile size={25} color="white" />,
      name: "Devon Lane",
      content: "Normally wings are wings. but theirs are lean meaty and tender",
      rating: 4,
    },
  ];
  return (
    <>
      <div className="text-white p-1 lg:p-6 font-semibold" style={{ visibility: 'hidden' }}>Dashboard</div>
      <div className="grid grid-cols-1 gap-4 px-6 py-3">
        <div className="bg-gray-800 flex p-3 gap-6 rounded-2xl justify-between lg:h-32 h-full">
          <div className="flex flex-col">
            <h3 className="text-white text-[12px]">Net Profit</h3>
            <div className="text-white font-bold text-[32px]">$6759.25</div>
            <div className="flex items-center">
              <div>
              <FaSortUp color="green"/>
              </div>
              <div className="text-green-800 text-[14px]">3%</div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            {/* <img src={circle} alt="circle"/> */}
            <ProgressCircle />
            <h6 className="text-white text-[8px]">
              *The values here have been rounded off
            </h6>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-2 px-6 py-3">
        <div className="bg-gray-800 flex flex-col p-6 gap-12 rounded-2xl lg:h-[250px] h-full">
          {items.map((item, index) => {
            return (
              <>
                <div className="flex justify-between items-center">
                  <div className="flex gap-4 text-center">
                    <div> {item.icon}</div>
                    <div className="text-white">{item.name}</div>
                  </div>
                  <div className="">
                    <IoIosArrowForward color="white" />
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-2 px-6 py-3">
        <div class="overflow-auto bg-gray-800 rounded-2xl h-72 lg:h-[450px]">
          <div className="text-white font-medium p-6">Customer's Feedback</div>
          {feedback.map((f, index) => {
            return (
              <>
                <div className="flex items-center gap-2 px-6 py-1">
                  <div>{f.icon}</div>
                  <div className="text-white">{f.name}</div>
                </div>
                <div className="px-6 py-3 flex gap-2">
                  {Array.from({ length: 5 }, (_, i) => (
                    <FaStar
                      key={i}
                      color={i < f.rating ? "yellow" : "gray"}
                      size={20} // Adjust size as needed
                    />
                  ))}
                </div>
                <p className="text-gray-500 text-[12px] px-6 border-b border-gray-700 pb-2">
                  {f.content}
                </p>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DashboardContent;
