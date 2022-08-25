import React from "react";
import Link from "next/link";
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
import { useRouter } from "next/router";

export default function Sidebar() {
  const router = useRouter();

  let url = router.asPath.split("/")[2];
  console.log(url);

  return (
    <aside className="sidebar text-white w-[306px] pl-[15px] pt-[5vh] font-bold fixed">
      <div className="pl-[15px] mb-[17px]">
        <FaUserCircle size="30px" />
      </div>
      <div className="sidebar_main w-full h-[85vh] relative overflow-auto flex flex-col gap-[10px] ">
        <Link href="/spm/dashboard">
          <button
            className={`px-[15px] py-[12px] flex center text-left rounded-tr-none rounded-br-none rounded-[10px] ${
              url === "dashboard" ? "bg-white text-[#131313]" : ""
            } text-[17px]`}
          >
            <FaHome size="19px" />
            <span className="ml-4">Dashboard</span>
          </button>
        </Link>
        <Link href="/spm/messages">
          <button
            className={`px-[15px] py-[12px] flex center text-left rounded-tr-none rounded-br-none rounded-[10px] ${
              url === "messages" ? "bg-white text-[#131313]" : ""
            } text-[17px]`}
          >
            <SiGooglemessages size="20px" />
            <span className="ml-4">Messages</span>
          </button>
        </Link>
        <Link href="/spm/properties">
          <button
            className={`px-[15px] py-[12px] flex center text-left rounded-tr-none rounded-br-none rounded-[10px] ${
              url === "properties" ? "bg-white text-[#131313]" : ""
            } text-[17px]`}
          >
            <RiBuildingFill size="20px" />
            <span className="ml-4">Properties</span>
          </button>
        </Link>
        {url === "properties" && (
          <div className="my-[4px] pr-4">
            <Link href="/spm/properties">
              <button className="block w-full text-end pr-10 border-b-[1px] border-white font-normal focus:font-bold py-[8px]">
                All Properties
              </button>
            </Link>
            <Link href="/spm/properties/type">
              <button className="block w-full text-end pr-10 border-b-[1px] border-white font-normal focus:font-bold py-[8px]">
                Property Type
              </button>
            </Link>
            <Link href="/spm/properties/categories">
              <button className="block w-full text-end pr-10 border-b-[1px] border-white font-normal focus:font-bold py-[8px]">
                Property Category
              </button>
            </Link>
            <Link href="/spm/properties/vacant">
              <button className="block w-full text-end pr-10 border-b-[1px] border-white font-normal focus:font-bold py-[8px]">
                Vacant Property
              </button>
            </Link>
            <Link href="/spm/properties/occupied">
              <button className="block w-full text-end pr-10 border-b-[1px] border-white font-normal focus:font-bold py-[8px]">
                Occupied Property
              </button>
            </Link>
            <Link href="/spm/properties/recent">
              <button className="block w-full text-end pr-10 border-b-[1px] border-white font-normal focus:font-bold py-[8px]">
                Recently Added
              </button>
            </Link>
          </div>
        )}
        <Link href="/spm/tenants">
          <button
            className={`px-[15px] py-[12px] flex center text-left rounded-tr-none rounded-br-none rounded-[10px] ${
              url === "tenants" ? "bg-white text-[#131313]" : ""
            } text-[17px]`}
          >
            <FaHospitalUser size="20px" />
            <span className="ml-4">Tenants</span>
          </button>
        </Link>
        <Link href="/spm/clients">
          <button
            className={`px-[15px] py-[12px] flex center text-left rounded-tr-none rounded-br-none rounded-[10px] ${
              url === "clients" ? "bg-white text-[#131313]" : ""
            } text-[17px]`}
          >
            <TiGroup size="20px" />

            <span className="ml-4">Clients</span>
          </button>
        </Link>
        <Link href="/spm/payments">
          <button
            className={`px-[15px] py-[12px] flex center text-left rounded-tr-none rounded-br-none rounded-[10px] ${
              url === "payments" ? "bg-white text-[#131313]" : ""
            } text-[17px]`}
          >
            <FaFileInvoiceDollar size="20px" />

            <span className="ml-4">Payments</span>
          </button>
        </Link>
        {url === "payments" && (
          <div className="my-[4px] pr-4">
            <Link href="/spm/payments">
              <button className="block w-full text-end pr-10 border-b-[1px] border-white font-normal focus:font-bold py-[8px]">
                Invoice
              </button>
            </Link>
            <Link href="/spm/payments/bills">
              <button className="block w-full text-end pr-10 border-b-[1px] border-white font-normal focus:font-bold py-[8px]">
                Bills
              </button>
            </Link>
            <Link href="/spm/payments/utilities">
              <button className="block w-full text-end pr-10 border-b-[1px] border-white font-normal focus:font-bold py-[8px]">
                Utilities
              </button>
            </Link>
          </div>
        )}
        <Link href="/spm/complaints">
          <button
            className={`px-[15px] py-[12px] flex center text-left rounded-tr-none rounded-br-none rounded-[10px] ${
              url === "complaints" ? "bg-white text-[#131313]" : ""
            } text-[17px]`}
          >
            <IoIosPaper size="20px" />
            <span className="ml-4">Complaints</span>
          </button>
        </Link>
        <Link href="/spm/service-request">
          <button
            className={`px-[15px] py-[12px] flex center text-left rounded-tr-none rounded-br-none rounded-[10px] ${
              url === "service-request" ? "bg-white text-[#131313]" : ""
            } text-[17px]`}
          >
            <MdLaptopWindows size="20px" />
            <span className="ml-4">Service Request</span>
          </button>
        </Link>
        <Link href="/spm/enquires">
          <button
            className={`px-[15px] py-[12px] flex center text-left rounded-tr-none rounded-br-none rounded-[10px] ${
              url === "enquires" ? "bg-white text-[#131313]" : ""
            } text-[17px]`}
          >
            <RiQuestionnaireFill size="20px" />
            <span className="ml-4">Enquires</span>
          </button>
        </Link>
        <Link href="/spm/reports">
          <button
            className={`px-[15px] py-[12px] flex center text-left rounded-tr-none rounded-br-none rounded-[10px] ${
              url === "reports" ? "bg-white text-[#131313]" : ""
            } text-[17px]`}
          >
            <HiDocumentReport size="20px" />

            <span className="ml-4">Reports</span>
          </button>
        </Link>
        <Link href="/spm/settings">
          <button
            className={`px-[15px] py-[12px] flex center text-left rounded-tr-none rounded-br-none rounded-[10px] ${
              url === "settings" ? "bg-white text-[#131313]" : ""
            } text-[17px]`}
          >
            <MdSettingsSuggest size="20px" />

            <span className="ml-4">Settings</span>
          </button>
        </Link>
        <Link href="/spm/log">
          <button
            className={`px-[15px] py-[12px] flex center text-left rounded-tr-none rounded-br-none rounded-[10px] focus:bg-white focus:text-[#131313] text-[17px]`}
          >
            <IoLogOut size="20px" />
            <span className="ml-4">Logout</span>
          </button>
        </Link>
      </div>
    </aside>
  );
}
