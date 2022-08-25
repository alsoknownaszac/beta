import React from "react";
import Header from "./partials/Header";
import Sidebar from "./partials/Sidebar";

// import { requireAuth } from "@libs/auth"
// import * as t from 'prop-types';

export default function DefaultLayout({ children }) {
  return (
    <div className="main_wrapper bg-[#023d8b94] h-screen flex ">
      <Sidebar />
      <section className="h-screen w-[calc(100%-306px)] left-[306px] inset-0  fixed">
        <div className="absolute top-[20px] h-[45px] pt-[1.2vh] px-[25px] w-fit bg-white rounded-t-[10px] font-bold text-[17px]">
          Dashboard
        </div>
        <main className="main_content bg-white h-[91vh] w-[calc(100%-6.5px)] mt-[8vh] border-t-[20px] border-b-[10px] border-white rounded-tl-none rounded-[10px] overflow-auto">
          <div className="w-[93%] relative m-auto pt-[10px] pb-[30px]">
            {children}
          </div>
        </main>
      </section>
    </div>
  );
}
