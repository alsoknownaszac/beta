import Link from "next/link";
import React, { useState } from "react";
import { MdArrowLeft, MdArrowRight, MdMoreVert } from "react-icons/md";
import BasicPopover from "../../reuseable/BasicPopover";
import PropertyHeader from "./propertyHeader";

export default function Properties({
  propertyType,
  propertyCategory,
  addProperty,
}) {
  const [propertyTypeVal, setPropertyTypeVal] = useState(0);
  const [propertyCategoryVal, setPropertyCategoryVal] = useState(0);
  return (
    <PropertyHeader>
      {propertyType && (
        <div className="rounded-t-[10px] w-full shadow-sm border-[1px] grid grid-cols-3 ">
          <button
            onClick={() => setPropertyTypeVal(0)}
            className={`py-[12px] rounded-tl-[10px] text-[16px] font-semibold text-gray-500 ${
              propertyTypeVal == 0 &&
              "focus:text-white focus:bg-gradient-to-r from-[#b0afe5] to-[#605eacbd]"
            }`}
          >
            For Sale
          </button>
          <button
            onClick={() => setPropertyTypeVal(1)}
            className={`py-[12px] text-[16px] font-semibold text-gray-500 ${
              propertyTypeVal == 1 &&
              "focus:text-white focus:bg-gradient-to-r from-[#b0afe5] to-[#605eacbd]"
            }`}
          >
            For Rent
          </button>
          <button
            onClick={() => setPropertyTypeVal(2)}
            className={`py-[12px] rounded-tr-[10px] text-[16px] font-semibold text-gray-500 ${
              propertyTypeVal == 2 &&
              "focus:text-white focus:bg-gradient-to-r from-[#b0afe5] to-[#605eacbd]"
            }`}
          >
            For Lease
          </button>
        </div>
      )}
      {propertyCategory && (
        <div className="rounded-t-[10px] w-full shadow-sm border-[1px] grid grid-cols-5 ">
          <button
            onClick={() => setPropertyCategoryVal(0)}
            className={`py-[12px] rounded-tl-[10px] text-[16px] font-semibold text-gray-500 ${
              propertyCategoryVal == 0 &&
              "focus:text-white focus:bg-gradient-to-r from-[#b0afe5] to-[#605eacbd]"
            }`}
          >
            Bungalow
          </button>
          <button
            onClick={() => setPropertyCategoryVal(1)}
            className={`py-[12px] text-[16px] font-semibold text-gray-500 ${
              propertyCategoryVal == 1 &&
              "focus:text-white focus:bg-gradient-to-r from-[#b0afe5] to-[#605eacbd]"
            }`}
          >
            Duplex
          </button>
          <button
            onClick={() => setPropertyCategoryVal(2)}
            className={`py-[12px] text-[16px] font-semibold text-gray-500 ${
              propertyCategoryVal == 2 &&
              "focus:text-white focus:bg-gradient-to-r from-[#b0afe5] to-[#605eacbd]"
            }`}
          >
            Self Contains
          </button>
          <button
            onClick={() => setPropertyCategoryVal(3)}
            className={`py-[12px] text-[16px] font-semibold text-gray-500 ${
              propertyCategoryVal == 3 &&
              "focus:text-white focus:bg-gradient-to-r from-[#b0afe5] to-[#605eacbd]"
            }`}
          >
            Boys Quarters
          </button>
          <button
            onClick={() => setPropertyCategoryVal(4)}
            className={`py-[12px] rounded-tr-[10px] text-[16px] font-semibold text-gray-500 ${
              propertyCategoryVal == 4 &&
              "focus:text-white focus:bg-gradient-to-r from-[#b0afe5] to-[#605eacbd]"
            }`}
          >
            Mini Mansion
          </button>
        </div>
      )}
      <ul className="mb-[35px]">
        <li className="grid grid-cols-12 gap-[5px] font-bold rounded-t-[5px] bg-[rgba(196,_196,_196,_0.2)] text-[15px] p-[10px]">
          <div className="col-span-2">Property No.</div>
          <div className="col-span-4 text-center">Description</div>
          <div className="col-span-2 text-center">Price</div>
          <div className="col-span-2 text-center">Status</div>
          <div className="col-span-2 text-center">Status</div>
        </li>
        <li className="grid grid-cols-12 gap-[5px] rounded-t-[5px] text-[15px] p-[10px] py-[15px] relative border-b-2">
          <div className="col-span-2">Rs8</div>
          <div className="col-span-4 text-center truncate">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ut
            vestibulum pretium fringilla erat mi et.
          </div>
          <div className="col-span-2 text-center">$ 5, 343,874</div>
          <div className="col-span-2 text-center">CEO</div>
          <div className="col-span-2 text-center">For Rent</div>
          <div className="absolute top-[15px] right-[4px]">
            <BasicPopover btn={<MdMoreVert size="20px" />}>
              <div className="p-[5px] px-[15px] bg-white text-center text-[14px]">
                <Link href="/spm/properties/001">
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
