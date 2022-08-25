import React, { useState } from "react";
import Link from "next/link";
import { MdMoreVert } from "react-icons/md";
import BasicPopover from "../../reuseable/BasicPopover";
import DefaultLayout from "../../layouts/DefaultLayout";
import { Modal, ModalBody, ModalBtn } from "../../reuseable/BasicModal";

export default function Utilities() {
  const [invoiceVal, setInvoiceVal] = useState(0);
  const [open, setOpen] = useState({ modal: false });

  return (
    <DefaultLayout>
      <button className="text-[14px] flex ml-auto mb-2 font-semibold text-gray-600 border-[1px] shadow-md py-[8px] px-[18px] rounded-lg text-center bg-white">
        Create Invoice
      </button>
      <div className="text-[17px] font-semibold mb-2 pl-2">All Bills</div>

      <div className="rounded-t-[10px] w-full shadow-sm border-[1px] grid grid-cols-3 ">
        <button
          onClick={() => setInvoiceVal(0)}
          className={`py-[12px] rounded-tl-[10px] text-[16px] font-semibold text-gray-500 ${
            invoiceVal == 0 &&
            "focus:text-white focus:bg-gradient-to-r from-[#b0afe5] to-[#605eacbd]"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setInvoiceVal(1)}
          className={`py-[12px] text-[16px] font-semibold text-gray-500 ${
            invoiceVal == 1 &&
            "focus:text-white focus:bg-gradient-to-r from-[#b0afe5] to-[#605eacbd]"
          }`}
        >
          Settled
        </button>
        <button
          onClick={() => setInvoiceVal(2)}
          className={`py-[12px] rounded-tr-[10px] text-[16px] font-semibold text-gray-500 ${
            invoiceVal == 2 &&
            "focus:text-white focus:bg-gradient-to-r from-[#b0afe5] to-[#605eacbd]"
          }`}
        >
          Pending
        </button>
      </div>
      <ul>
        <li className="grid grid-cols-7 gap-[5px] font-bold rounded-t-[5px] bg-[rgba(196,_196,_196,_0.2)] text-[15px] p-[10px]">
          <div className="col-span-1">Tenant Name</div>
          <div className="col-span-1 text-center">Title</div>
          <div className="col-span-2 text-center">Description</div>
          <div className="col-span-1 text-center">Payment</div>
          <div className="col-span-1 text-center">Status</div>
          <div className="col-span-1 text-center">Date</div>
        </li>
        <li className="grid grid-cols-7 gap-[5px] rounded-t-[5px] text-[15px] p-[10px] py-[15px] relative border-b-2">
          <div className="col-span-1">John Doe</div>
          <div className="col-span-1 text-center">Electricity</div>
          <div className="col-span-2 text-center truncate">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ut
            vestibulum pretium fringilla erat mi et.
          </div>
          <div className="col-span-1 text-center">Bill</div>
          <div className="col-span-1 text-center">Paid</div>
          <div className="col-span-1 text-center">For Rent</div>
          <div className="absolute top-[15px] right-[2px]">
            <BasicPopover
              contentStyles="-translate-x-[35px]"
              btn={<MdMoreVert size="20px" />}
            >
              <div className="p-[5px] px-[15px] bg-white text-center text-[14px]">
                <ModalBtn open={open} setOpen={setOpen}>
                  <button className="px-2 py-1 mb-1 block">View</button>
                </ModalBtn>
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
            <Modal>
              <ModalBody className="p-[15px]" open={open} setOpen={setOpen}>
                <div className="rounded-[5px] shadow-sm border-[1px] h-[250px]">
                  <div className="p-[8px] ">contents here</div>
                </div>
                <button
                  onClick={() => {
                    setOpen({ ...open, modal: false });
                  }}
                  className="mt-8 font-semibold text-gray-600 border-[1px] shadow-lg py-[6px] px-[20px] rounded-lg text-center bg-white"
                >
                  Close
                </button>
              </ModalBody>
            </Modal>
          </div>
        </li>
      </ul>
    </DefaultLayout>
  );
}
