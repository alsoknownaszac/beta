import React from "react";
import { MdMoreVert } from "react-icons/md";
import BasicPopover from "../../reuseable/BasicPopover";
import PropertyHeader from "./propertyHeader";

export default function Properties() {
  return (
    <PropertyHeader>
      <ul>
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
                <a className="px-2 py-1 mb-1 block" href="/spm/properties/001">
                  View
                </a>
                <hr />
                <a className="px-2 py-1 my-1 block" href="">
                  Edit
                </a>
                <hr />
                <a className="px-2 py-1 my-1 block" href="">
                  Delete
                </a>
              </div>
            </BasicPopover>
          </div>
        </li>
      </ul>
    </PropertyHeader>
  );
}
