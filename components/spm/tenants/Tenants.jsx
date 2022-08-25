import React from "react";
import Link from "next/link";
import { MdArrowLeft, MdArrowRight, MdMoreVert } from "react-icons/md";
import BasicPopover from "../../reuseable/BasicPopover";
import PropertyHeader from "../properties/propertyHeader";

export default function Tenants({ addProperty }) {
  return (
    <PropertyHeader>
      <ul className="mb-[35px]">
        <li className="grid grid-cols-12 gap-[5px] font-bold rounded-t-[5px] bg-[rgba(196,_196,_196,_0.2)] text-[15px] p-[10px]">
          <div className="col-span-2">Property No.</div>
          <div className="col-span-2 text-center">Tenant Name</div>
          <div className="col-span-4 text-center">Description</div>
          <div className="col-span-2 text-center">Status</div>
          <div className="col-span-2 text-center">Property Mgr.</div>
        </li>
        <li className="grid grid-cols-12 gap-[5px] rounded-t-[5px] text-[15px] p-[10px] py-[15px] relative border-b-2">
          <div className="col-span-2">Rs8</div>
          <div className="col-span-2 text-center">Mr Ikenga Charles</div>
          <div className="col-span-4 text-center truncate">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ut
            vestibulum pretium fringilla erat mi et.
          </div>
          <div className="col-span-2 text-center">Lorem</div>
          <div className="col-span-2 text-center">John Fred</div>
          <div className="absolute top-[15px] right-[4px]">
            <BasicPopover btn={<MdMoreVert size="20px" />}>
              <div className="p-[5px] px-[15px] bg-white text-center text-[14px]">
                <Link href="/spm/tenants/001">
                  <button className="px-2 py-1 mb-1 block">View</button>
                </Link>
                <hr />
                <Link href="">
                  <button className="px-2 py-1 mb-1 block">Edit</button>
                </Link>
                <hr />
                <Link href="">
                  <button className="px-2 py-1 mb-1 block">Delete</button>
                </Link>
              </div>
            </BasicPopover>
          </div>
        </li>
      </ul>
      <div className="flex justify-between items-center mt-[30px] text-[14px]">
        {addProperty && (
          <button className="font-semibold text-gray-600 border-[1px] border-[gray-600] shadow-lg py-[10px] px-[20px] rounded-lg text-center bg-white">
            Add Property
          </button>
        )}
        <div className="flex ml-auto gap-[14px] font-[700] text-[14px]">
          <div className="leading-[30px] text-center bg-[#5445fcb7] text-[#FFFFFF]">
            <MdArrowLeft size="30px" />
          </div>
          <div className="w-[30px] h-[30px] leading-[30px] text-center bg-[#5445fcb7] text-[#FFFFFF]">
            1
          </div>
          <div className="w-[30px] h-[30px] leading-[30px] text-center bg-[#5445fcb7] text-[#FFFFFF]">
            2
          </div>
          <div className="w-[30px] h-[30px] leading-[30px] text-center bg-[#5445fcb7] text-[#FFFFFF]">
            3
          </div>
          <div className="w-[30px] h-[30px] leading-[30px] text-center bg-[#5445fcb7] text-[#FFFFFF]">
            4
          </div>
          <div className="w-[30px] h-[30px] leading-[30px] text-center bg-[#5445fcb7] text-[#FFFFFF]">
            5
          </div>
          <div className="w-[30px] h-[30px] leading-[30px] text-center bg-[#5445fcb7] text-[#FFFFFF]">
            <MdArrowRight size="30px" />
          </div>
        </div>
      </div>
    </PropertyHeader>
  );
}
