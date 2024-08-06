import React from "react";
import { BsBasketFill } from "react-icons/bs";
import { BsFillBagCheckFill } from "react-icons/bs";
import { BsBagXFill } from "react-icons/bs";
import { FaSackDollar } from "react-icons/fa6";
import { FaSortDown, FaSortUp } from "react-icons/fa";
import CustomBarChart from "../CustomBarChart";
import DashboardContent from "../DashboardContent";

const Dashboard = () => {
  const info = [
    {
      id: 1,
      icon: <BsBasketFill color="blue" size={25} />,
      description: "Total Orders",
      total: "70",
      percent: "3%",
    },
    {
      id: 2,
      icon: <BsFillBagCheckFill color="green" size={25} />,
      description: "Total Delivered",
      total: "75",
      percent: "3%",
    },
    {
      id: 3,
      icon: <BsBagXFill color="red" size={25} />,
      description: "Total Cancelled",
      total: "05",
      percent: "3%",
    },
    {
      id: 4,
      icon: <FaSackDollar color="pink" size={25} />,
      description: "Total Revenue",
      total: "$12K",
      percent: "3%",
    },
  ];
  const tableInfo = [
    {
      headers: ["Customer", "Order No.", "Amount", "Status"],
      rows: [
        {
          Customer: "Wade Warren",
          Order: "15478256",
          Amount: "$124.00",
          Status: "Delivered",
        },
        {
          Customer: "Jane Cooper",
          Order: "48965786",
          Amount: "$365.02",
          Status: "Delivered",
        },
        {
          Customer: "Guy Hawkins",
          Order: "78958215",
          Amount: "$45.88",
          Status: "Cancelled",
        },
        {
          Customer: "Kristin Watson",
          Order: "20965732",
          Amount: "$65.00",
          Status: "Pending",
        },
        {
          Customer: "Cody Fisher",
          Order: "95715620",
          Amount: "$545.00",
          Status: "Delivered",
        },
        {
          Customer: "Savannah Nyugen",
          Order: "78514568",
          Amount: "$128.20",
          Status: "Delivered",
        },
      ],
    },
  ];

  return (
    <>
      <div className="bg-black">
        <div className="grid grid-cols-6">
          <div className="col-span-6 lg:col-span-4">
            <div className="text-white p-6 font-semibold">Dashboard</div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 px-6 py-3">
              {info.map((e, index) => {
                const colorClass =
                  index % 2 === 0 ? "text-red-500" : "text-green-400";
                // Determine icon direction based on index (even or odd)
                const icon =
                  index % 2 === 0 ? (
                    <FaSortDown
                      color={index % 2 === 0 ? "red" : "green"}
                      size={20}
                    />
                  ) : (
                    <FaSortUp
                      color={index % 2 === 0 ? "red" : "green"}
                      size={20}
                    />
                  );
                return (
                  <div className="bg-gray-800 flex flex-col p-3 gap-3 rounded-2xl lg:h-32 h-full">
                    <div key={e.id}>
                      <div className="">
                        {e.icon}
                        <div className="text-white text-[12px]">
                          {e.description}
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-[32px] font-[600] text-white">
                          {e.total}
                        </div>
                        <div className="flex items-center">
                          {icon}

                          <div
                            className={`text-[20px] font-[600] ${colorClass}`}
                          >
                            {e.percent}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="grid grid-cols-1 px-6 py-3">
              <div className="bg-gray-800 flex flex-col p-6 gap-3 rounded-2xl w-full lg:h-[250px] h-full">
                <div className="flex justify-between items-center">
                  <div className="text-white font-medium">Activity</div>
                  <div className="flex text-white items-center rounded-lg text-[12px] bg-gray-500 px-2 py-1">
                    Weekly
                    <FaSortDown color="white" />
                  </div>
                </div>
                <div className="w-full">
                  <CustomBarChart />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 px-6 py-3">
              <div class="overflow-auto bg-gray-800 rounded-2xl h-72 lg:h-[450px]">
                <div className="text-white font-medium p-6">Recent Orders</div>
                {tableInfo.map((table, index) => {
                  return (
                    <table class="w-full text-sm text-left text-white">
                      <thead class="text-xs text-white uppercase font-bold">
                        <tr>
                          {table.headers.map((header, headerIndex) => (
                            <th scope="col" class="px-6 py-3">
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {table.rows.map((row, rowIndex) => {
                          const isDelivered = row.Status === "Delivered";
                          const textColor = isDelivered
                            ? "text-green-500"
                            : "text-red-500";
                          const bgColor = isDelivered
                            ? "bg-green-200"
                            : "bg-red-200";
                          return (
                            <tr
                              key={rowIndex}
                              className="border-b border-gray-700"
                            >
                              <td className="px-6 py-4 whitespace-nowrap">
                                {row.Customer}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                {row.Order}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                {row.Amount}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div
                                  className={`inline-flex items-center justify-center p-2 ${bgColor} ${textColor} rounded-2xl`}
                                >
                                  {row.Status}
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-span-6 lg:col-span-2">
            <DashboardContent />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
