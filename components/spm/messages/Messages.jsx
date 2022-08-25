import React, { useState } from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";
import { IoAttach } from "react-icons/io5";
import { FaCameraRetro } from "react-icons/fa";
import { Modal, ModalBody, ModalBtn } from "../../reuseable/BasicModal";

export default function Messages() {
  const [messageType, setMessageType] = useState(0);
  const [open, setOpen] = useState({ modal: false });

  return (
    <DefaultLayout>
      <div className="shadow-xl rounded-[10px]">
        <div className="rounded-t-[10px] w-full grid grid-cols-5 border-[1px]">
          <button
            onClick={() => setMessageType(0)}
            className={`py-[12px] flex justify-center rounded-tl-[10px] text-[16px] font-semibold text-gray-500 ${
              messageType == 0 &&
              "focus:text-white focus:bg-gradient-to-r from-[#b0afe5] to-[#605eacbd]"
            }`}
          >
            <div className="flex items-center gap-[5px]">
              All Messages
              <div className="w-[22px] h-[22px] font-semibold leading-[22px] text-center text-[15px] rounded-full bg-red-500 text-white">
                3
              </div>
            </div>
          </button>
          <button
            onClick={() => setMessageType(1)}
            className={`py-[12px] flex justify-center text-[16px] font-semibold text-gray-500 ${
              messageType == 1 &&
              "focus:text-white focus:bg-gradient-to-r from-[#b0afe5] to-[#605eacbd]"
            }`}
          >
            <div className="flex items-center gap-[5px]">
              Inbox
              {/* <div className="w-[22px] h-[22px] font-semibold leading-[22px] text-center text-[15px] rounded-full bg-red-500 text-white">
                3
              </div> */}
            </div>
          </button>
          <button
            onClick={() => setMessageType(2)}
            className={`py-[12px] flex justify-center text-[16px] font-semibold text-gray-500 ${
              messageType == 2 &&
              "focus:text-white focus:bg-gradient-to-r from-[#b0afe5] to-[#605eacbd]"
            }`}
          >
            <div className="flex items-center gap-[5px]">
              Outbox
              {/* <div className="w-[22px] h-[22px] font-semibold leading-[22px] text-center text-[15px] rounded-full bg-red-500 text-white">
                3
              </div> */}
            </div>
          </button>
          <button
            onClick={() => setMessageType(3)}
            className={`py-[12px] flex justify-center text-[16px] font-semibold text-gray-500 ${
              messageType == 3 &&
              "focus:text-white focus:bg-gradient-to-r from-[#b0afe5] to-[#605eacbd]"
            }`}
          >
            <div className="flex items-center gap-[5px]">
              Draft
              {/* <div className="w-[22px] h-[22px] font-semibold leading-[22px] text-center text-[15px] rounded-full bg-red-500 text-white">
                3
              </div> */}
            </div>
          </button>
          <button
            onClick={() => setMessageType(4)}
            className={`py-[12px] flex justify-center rounded-tr-[10px] text-[16px] font-semibold text-gray-500 ${
              messageType == 4 &&
              "focus:text-white focus:bg-gradient-to-r from-[#b0afe5] to-[#605eacbd]"
            }`}
          >
            <div className="flex items-center gap-[5px]">
              Trash
              {/* <div className="w-[22px] h-[22px] font-semibold leading-[22px] text-center text-[15px] rounded-full bg-red-500 text-white">
                3
              </div> */}
            </div>
          </button>
        </div>
        <div className="px-[3%] pb-[20px] rounded-b-[10px]">
          <Modal>
            <ModalBtn open={open} setOpen={setOpen}>
              <div className="border-b-2 py-[12px] mb-[5px]">
                <h3 className="mb-[2.5px] font-[700] text-[18px]">
                  Next Neighbour’s music too loud
                </h3>
                <p className="mb-[3px] text-[16px] truncate">
                  A cras semper auctor neque. In nisl nisi scelerisque eu
                  ultrices vitae auctor. Fermentum odio eu feugiat...
                </p>
                <p className="font-[400] text-[14px] text-end">- K. Gruba</p>
              </div>
            </ModalBtn>
            <ModalBody className="p-[15px]" open={open} setOpen={setOpen}>
              <div className="font-bold text-[18px] mb-4">
                Title : Next Neighbour’s music too loud
              </div>
              <div className="rounded-[5px] shadow-sm border-[1px]">
                <div className="p-[8px]">
                  <div className="message-card bg-violet-200 text-white mr-auto mb-3 p-2 border-[1px] shadow-inner rounded-[5px] w-[70%]">
                    A cras semper auctor neque. In nisl nisi scelerisque eu
                    ultrices vitae auctor. Fermentu m odio eu feugiat...
                  </div>
                  <div className="message-card bg-orange-200 text-white ml-auto mb-3 p-2 border-[1px] shadow-inner rounded-[5px] w-[70%]">
                    A cras semper auctor neque. In nisl nisi scelerisque eu
                    ultrices vitae auctor. Fermentu m odio eu feugiat...
                  </div>
                  <div className="message-card bg-violet-200 text-white mr-auto mb-3 p-2 border-[1px] shadow-inner rounded-[5px] w-[70%]">
                    A cras semper auctor neque. In nisl nisi scelerisque eu
                    ultrices vitae auctor. Fermentu m odio eu feugiat...
                  </div>
                </div>
                <div className="m-[10px] p-[3px] pl-[15px] rounded-[30px] border-[1px] border-[#DFDFE0] flex items-center">
                  <div className="flex items-center w-full">
                    <div className="flex items-center gap-[8px] mr-[15px]">
                      <IoAttach size="20px" />
                      <FaCameraRetro size="18px" />
                    </div>
                    <input
                      className="px-[8px] bg-transparent outline-none text-[16px] w-[80%]"
                      placeholder="Enter your email"
                      type="text"
                    />
                  </div>
                  <button className="rounded-[30px] py-[8px] px-[29px] bg-[#E3EBFD] text-[#4475F2] text-[14px] font-[700]">
                    Submit
                  </button>
                </div>
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
          <Modal>
            <ModalBtn open={open} setOpen={setOpen}>
              <div className="border-b-2 py-[12px] mb-[5px]">
                <h3 className="mb-[2.5px] font-[700] text-[18px]">
                  Next Neighbour’s music too loud
                </h3>
                <p className="mb-[3px] text-[16px] truncate">
                  A cras semper auctor neque. In nisl nisi scelerisque eu
                  ultrices vitae auctor. Fermentum odio eu feugiat...
                </p>
                <p className="font-[400] text-[14px] text-end">- K. Gruba</p>
              </div>
            </ModalBtn>
            <ModalBody className="p-[15px]" open={open} setOpen={setOpen}>
              <div className="font-bold text-[18px] mb-4">
                Title : Next Neighbour’s music too loud
              </div>
              <div className="rounded-[5px] shadow-sm border-[1px]">
                <div className="p-[8px]">
                  <div className="message-card bg-violet-200 text-white mr-auto mb-3 p-2 border-[1px] shadow-inner rounded-[5px] w-[70%]">
                    A cras semper auctor neque. In nisl nisi scelerisque eu
                    ultrices vitae auctor. Fermentu m odio eu feugiat...
                  </div>
                  <div className="message-card bg-orange-200 text-white ml-auto mb-3 p-2 border-[1px] shadow-inner rounded-[5px] w-[70%]">
                    A cras semper auctor neque. In nisl nisi scelerisque eu
                    ultrices vitae auctor. Fermentu m odio eu feugiat...
                  </div>
                  <div className="message-card bg-violet-200 text-white mr-auto mb-3 p-2 border-[1px] shadow-inner rounded-[5px] w-[70%]">
                    A cras semper auctor neque. In nisl nisi scelerisque eu
                    ultrices vitae auctor. Fermentu m odio eu feugiat...
                  </div>
                </div>
                <div className="m-[10px] p-[3px] pl-[15px] rounded-[30px] border-[1px] border-[#DFDFE0] flex items-center">
                  <div className="flex items-center w-full">
                    <div className="flex items-center gap-[8px] mr-[15px]">
                      <IoAttach className="cursor-pointer" size="20px" />
                      <FaCameraRetro className="cursor-pointer" size="18px" />
                    </div>
                    <input
                      className="px-[8px] bg-transparent outline-none text-[16px] w-[80%]"
                      placeholder="Enter your email"
                      type="text"
                    />
                  </div>
                  <button className="rounded-[30px] py-[8px] px-[29px] bg-[#E3EBFD] text-[#4475F2] text-[14px] font-[700]">
                    Submit
                  </button>
                </div>
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
          <div className="flex justify-between items-center mt-[30px] text-[14px]">
            <button className="font-semibold text-gray-600 border-[1px] border-[gray-600] shadow-lg py-[10px] px-[20px] rounded-lg text-center bg-white">
              Create Message
            </button>
            <div className="flex gap-[14px] font-[700] text-[14px]">
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
        </div>
      </div>
    </DefaultLayout>
  );
}
