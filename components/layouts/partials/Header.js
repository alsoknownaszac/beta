// import Script from "next/script"
import Image from "next/image";
import { FiLink, FiCalendar } from "react-icons/fi";

export default function Header() {
  return (
    <header className="fixed z-50 bg-[#0D028B]">
      <div className="header">
        <div className="nav_header">
          <div className="flex">
            <div className="flex mr-3">
              <div className="flex flex-col items-center justify-center cursor-pointer mr-2">
                <div className="icon_holder flex-shrink-0 items-center mb-2">
                  <div className="icon_holder-xs icon-pattern bg-white shadow-md border border-blue-500 rounded-full relative">
                    <div className="flex w-full h-full items-center text-blue-500 justify-center ">
                      <FiLink size="15" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center cursor-pointer">
                <div className="icon_holder flex-shrink-0 items-center mb-2">
                  <div className="icon_holder-xs icon-pattern bg-white shadow-md border border-blue-500 rounded-full relative">
                    <div className="flex w-full h-full items-center text-blue-500 justify-center ">
                      <FiCalendar size="15" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="navbar_dropdown space-x-2">
              <div className="header_profile_box">
                <Image
                  src="/images/avatar-1.jpg"
                  className="w-8 h-8 bg-blue-default p-3 rounded-full inline-block"
                  alt="avatar"
                  width="40"
                  height="40"
                />
                <span className="inline-block ml-3 mr-1">Uzor Mercy</span>
                <i className="fa fa-angle-down"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
