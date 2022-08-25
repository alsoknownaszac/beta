import React from "react";
import {
  FiAlertCircle,
  FiChevronRight,
  FiExternalLink,
  FiHome,
  FiKey,
  FiMaximize2,
  FiUser,
  FiUsers,
} from "react-icons/fi";
import DefaultLayout from "../../layouts/DefaultLayout";

export default function Properties() {
  return (
    <DefaultLayout>
      <div className="shadow-lg border-[1px] p-4 rounded-[10px] mb-6 mt-2 text-[16px] grid grid-cols-6 gap-4">
        <div className="col-span-4">
          <div className="w-full rounded-lg pl-3 grid grid-cols-4 gap-3">
            <div className="grid-col-1 bg-white p-4 rounded-md">
              <div className="flex justify-between">
                <div>
                  <p className="text-muted">Rent Due Today </p>
                  <span className=" text-xl font-bold">5</span>
                </div>
                <div className="icon_holder flex-shrink-0 items-center">
                  <div className="icon_holder-sm icon-pattern  bg-primary-light rounded-full relative">
                    <div className="flex w-full h-full items-center text-white justify-center ">
                      <i data-feather="alert-circle"></i>
                      <FiAlertCircle size="18" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-col-1 bg-white p-4 rounded-md">
              <div className="flex justify-between">
                <div>
                  <p className="text-muted">Rent Overdue</p>
                  <span className="text-xl font-bold">10</span>
                </div>
                <div className="icon_holder flex-shrink-0 items-center">
                  <div className="icon_holder-sm  icon-pattern bg-green-500 rounded-full relative">
                    <div className="flex w-full h-full items-center text-white justify-center ">
                      <i data-feather="external-link"></i>
                      <FiExternalLink size="18" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-col-1 bg-white p-4 rounded-md">
              <div className="flex justify-between">
                <div>
                  <p className="text-muted">Moving In</p>
                  <span className=" text-xl font-bold">2</span>
                </div>
                <div className="icon_holder flex-shrink-0 items-center">
                  <div className="icon_holder-sm icon-pattern  bg-yellow-500 rounded-full relative">
                    <div className="flex w-full h-full items-center text-white justify-center ">
                      <i data-feather="key"></i>
                      <FiKey size="18" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-col-1 bg-white p-4 rounded-md">
              <div className="flex justify-between">
                <div>
                  <p className="text-muted">Moving Out</p>
                  <span className=" text-xl font-bold">2</span>
                </div>
                <div className="icon_holder flex-shrink-0 items-center">
                  <div className="icon_holder-sm icon-pattern  bg-red-500 rounded-full relative">
                    <div className="flex w-full h-full items-center text-white justify-center ">
                      <FiMaximize2 size="18" />
                      <i data-feather="maximize"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full rounded-lg pl-3 grid grid-cols-3 gap-3 pt-4 mt-4">
            <div className="grid-col-1 bg-white p-4 rounded-sm ">
              <div className="flex justify-between">
                <div>
                  <p className="text-muted">Total Clients</p>
                  <span className="text-xl font-bold">14</span>
                </div>
                <div className="icon_holder flex-shrink-0 items-center">
                  <div className="icon_holder-sm icon-pattern bg-primary-light rounded-full relative">
                    <div className="flex w-full h-full items-center text-white justify-center ">
                      <FiUser size="18" />
                      <i data-feather="user"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-col-1 bg-white p-4 rounded-md">
              <div className="flex justify-between">
                <div>
                  <p className="text-muted">Total Tenants</p>
                  <span className="text-xl font-bold">30</span>
                </div>
                <div className="icon_holder flex-shrink-0 items-center">
                  <div className="icon_holder-sm icon-pattern bg-indigo-700 rounded-full relative">
                    <div className="flex w-full h-full items-center text-white justify-center ">
                      <FiUsers size="18" />
                      <i data-feather="user"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-col-1 bg-white p-4 rounded-md">
              <div className="flex justify-between">
                <div>
                  <p className="text-muted">Total Properties</p>
                  <span className="text-xl font-bold">104</span>
                </div>
                <div className="icon_holder flex-shrink-0 items-center">
                  <div className="icon_holder-sm icon-pattern bg-black rounded-full relative">
                    <div className="flex w-full h-full items-center text-white justify-center ">
                      <FiHome size="18" />
                      <i data-feather="home"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 ml-3">
          <div className="bg-white rounded-md p-3 recentactivities">
            <h3 className="text-md font-bold pl-2">Rents</h3>
            <div className="pt-2 mt-3 pl-2">
              <ul>
                <li className="border-b-1 py-2">
                  <a href="#" className="">
                    <div>
                      <h5 className="font-medium text-2xl">
                        &#8358; 20,000,000.00
                      </h5>
                      <p className="text-muted">Due this month</p>
                    </div>
                  </a>
                </li>
                <li className="border-b-1 py-2">
                  <a href="#" className="">
                    <div>
                      <h5 className="font-medium text-2xl text-blue-700">
                        &#8358; 5,000,000.00
                      </h5>
                      <p className="text-muted">Recieved this month</p>
                    </div>
                  </a>
                </li>
                <li className="border-b-1 py-2">
                  <a href="#" className="">
                    <div>
                      <h5 className="font-medium text-2xl text-red-600">
                        &#8358; 10,000,000.00
                      </h5>
                      <p className="text-muted">Overdue</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="shadow-lg border-[1px] p-4 rounded-[10px] pt-6 mt-6 text-[16px] grid grid-cols-6 gap-4">
        <div className="col-span-2">
          <div className="bg-white rounded-md p-3 recentactivities">
            <div className="flex justify-between">
              <h3 className="text-md font-bold pl-2">Recent Sign up</h3>
              <a href="" className="flex justify-center items-center">
                {" "}
                <span className="text-xs">View all</span>
                <i data-feather="chevrons-right"></i>
                <FiChevronRight size="12" />
              </a>
            </div>
            <div className="pt-3 mt-3 pl-2">
              <ul>
                <li className="border-b-1 py-2">
                  <div className="flex">
                    <div className="mr-4">
                      <img
                        src="/images/avatar-3.jpg"
                        className="avatar-sm rounded-sm object-cover"
                        alt=""
                      />
                    </div>
                    <div className="flex mr-auto">
                      <div>
                        <h4 className="font-medium text-md">Kings Wealth </h4>
                        <p className="text-muted text-sm">20 Mar 2021</p>
                      </div>
                    </div>
                    <div className="mt-3">
                      <a
                        href="#"
                        className="mt-2 py-0.5 px-2 bg-blue-700 rounded-sm text-white"
                      >
                        view
                      </a>
                    </div>
                  </div>
                </li>
                <li className="border-b-1 py-2">
                  <div className="flex">
                    <div className="mr-4">
                      <img
                        src="/images/avatar-2.jpg"
                        className="avatar-sm rounded-sm object-cover"
                        alt=""
                      />
                    </div>
                    <div className="flex mr-auto">
                      <div>
                        <h4 className="font-medium text-md">Samuel Stans </h4>
                        <p className="text-muted text-sm">01 Jan 2021</p>
                      </div>
                    </div>
                    <div className="mt-3">
                      <a
                        href="#"
                        className="mt-2 py-0.5 px-2 bg-blue-700 rounded-sm text-white"
                      >
                        view
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="bg-white rounded-md p-4 recentactivities">
            <div className="flex justify-between">
              <h3 className="text-md font-bold pl-2">Recent Bookings</h3>
              <a href="" className="flex justify-center items-center">
                {" "}
                <span className="text-xs">View all</span>
                <FiChevronRight size="12" />
                <i data-feather="chevron-right"></i>
              </a>
            </div>
            <div className="pt-2 mt-3 pl-2">
              <ul>
                <li className="border-b-1 py-2">
                  <a href="#" className="flex justify-between">
                    <div>
                      <h5 className="font-medium">David Smith</h5>
                      <p className="text-muted">davidesmith@example.com</p>
                      <small>12 Nov, 2020</small>
                    </div>
                    <div className="mt-3">
                      <span className="bg-blue-700 text-xs text-white rounded-sm py-1 px-2">
                        Pending
                      </span>
                    </div>
                  </a>
                </li>
                <li className="border-b-1 py-2">
                  <a href="#" className="flex justify-between">
                    <div>
                      <h5 className="font-medium">James Halvit</h5>
                      <p className="text-muted">jameshalvit@example.com</p>
                      <small>03 Oct, 2020</small>
                    </div>
                    <div className="mt-3">
                      <span className="bg-green-500 text-xs text-white rounded-sm py-1 px-2">
                        Completed
                      </span>
                    </div>
                  </a>
                </li>
                <li className="border-b-1 py-2">
                  <a href="#" className="flex justify-between">
                    <div>
                      <h5 className="font-medium">David Wokoma</h5>
                      <p className="text-muted">davidwokoma@example.com</p>
                      <small>01 Oct, 2020</small>
                    </div>
                    <div className="mt-3">
                      <span className="bg-red-700 text-xs text-white rounded-sm py-1 px-2">
                        Cancelled
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="rounded-md p-3 bg-white">
            <h3 className="text-md font-bold pb-2 pl-2">Calendar</h3>
            {/* <Calendar
                                className="calendar"
                                /> */}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
