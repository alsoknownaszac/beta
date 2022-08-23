import Image from "next/image";
import React from "react";
import {
  FaUserCircle,
  FaHome,
  FaHospitalUser,
  FaFileInvoiceDollar,
} from "react-icons/fa";
import { SiGooglemessages } from "react-icons/si";
import { TiGroup } from "react-icons/ti";
import { IoIosPaper } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { MdLaptopWindows, MdSettingsSuggest } from "react-icons/md";
import { RiBuildingFill, RiQuestionnaireFill } from "react-icons/ri";
import { HiDocumentReport } from "react-icons/hi";

export default function Sidebar() {
  return (
    <aside className="sidebar text-white w-[306px] pl-[15px] pt-[5vh] font-bold fixed">
      <div className="pl-[15px] mb-[17px]">
        <FaUserCircle size="30px" />
      </div>
      <div className="sidebar_main w-full h-[85vh] relative overflow-auto flex flex-col gap-[10px] ">
        <button className="px-[15px] py-[12px] flex center text-left rounded-tr-none rounded-br-none rounded-[10px] focus:text-[#131313] focus:bg-white text-[17px]">
          <FaHome size="19px" />
          <span className="ml-4"> Dashboard</span>
        </button>
        <button className="px-[15px] py-[12px] flex center  text-left rounded-tr-none rounded-br-none rounded-[10px] focus:text-[#131313] focus:bg-white text-[17px]">
          <SiGooglemessages size="20px" />
          <span className="ml-4">Messages</span>
        </button>
        <button className="px-[15px] py-[12px] flex center  text-left rounded-tr-none rounded-br-none rounded-[10px] focus:text-[#131313] focus:bg-white text-[17px]">
          <RiBuildingFill size="20px" />
          <span className="ml-4">Properties</span>
        </button>
        <button className="px-[15px] py-[12px] flex center  text-left rounded-tr-none rounded-br-none rounded-[10px] focus:text-[#131313] focus:bg-white text-[17px]">
          <FaHospitalUser size="20px" />
          <span className="ml-4">Tenants</span>
        </button>
        <button className="px-[15px] py-[12px] flex center  text-left rounded-tr-none rounded-br-none rounded-[10px] focus:text-[#131313] focus:bg-white text-[17px]">
          <TiGroup size="20px" />

          <span className="ml-4">Clients</span>
        </button>
        <button className="px-[15px] py-[12px] flex center  text-left rounded-tr-none rounded-br-none rounded-[10px] focus:text-[#131313] focus:bg-white text-[17px]">
          <FaFileInvoiceDollar size="20px" />

          <span className="ml-4">Payments</span>
        </button>
        <button className="px-[15px] py-[12px] flex center  text-left rounded-tr-none rounded-br-none rounded-[10px] focus:text-[#131313] focus:bg-white text-[17px]">
          <IoIosPaper size="20px" />
          <span className="ml-4">Complaints</span>
        </button>
        <button className="px-[15px] py-[12px] flex center  text-left rounded-tr-none rounded-br-none rounded-[10px] focus:text-[#131313] focus:bg-white text-[17px]">
          <MdLaptopWindows size="20px" />
          <span className="ml-4">Service Request</span>
        </button>
        <button className="px-[15px] py-[12px] flex center  text-left rounded-tr-none rounded-br-none rounded-[10px] focus:text-[#131313] focus:bg-white text-[17px]">
          <RiQuestionnaireFill size="20px" />
          <span className="ml-4">Enquires</span>
        </button>
        <button className="px-[15px] py-[12px] flex center  text-left rounded-tr-none rounded-br-none rounded-[10px] focus:text-[#131313] focus:bg-white text-[17px]">
          <HiDocumentReport size="20px" />

          <span className="ml-4">Reports</span>
        </button>
        <button className="px-[15px] py-[12px] flex center  text-left rounded-tr-none rounded-br-none rounded-[10px] focus:text-[#131313] focus:bg-white text-[17px]">
          <MdSettingsSuggest size="20px" />

          <span className="ml-4">Settings</span>
        </button>
        <button className="px-[15px] py-[12px] flex center  text-left rounded-tr-none rounded-br-none rounded-[10px] focus:text-[#131313] focus:bg-white text-[17px]">
          <IoLogOut size="20px" />
          <span className="ml-4">Logout</span>
        </button>
      </div>
    </aside>
  );
}
