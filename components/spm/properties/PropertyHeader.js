import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";

export default function PropertyHeader(props) {
  return (
    <DefaultLayout>
      <div className="rounded-[10px] shadow-lg">
        <div className="h-[125px] w-full mb-[10px]">
          <img
            className="rounded-t-[10px] h-full w-full object-fill"
            src="/media/realestate2.png"
            alt="realestate2"
          />
        </div>
        <div className="p-[30px]">{props.children}</div>
      </div>
    </DefaultLayout>
  );
}
