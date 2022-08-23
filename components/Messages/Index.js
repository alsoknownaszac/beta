import { HashRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import MessageDetails from "@/components/Messages/MessageDetails";
import Inbox from "@/components/Messages/Inbox";
import Sent from "@/components/Messages/Sent";
import Draft from "@/components/Messages/Draft";
import Trash from "@/components/Messages/Trash";
import React from "react";

export default function Index() {
  const links = React.useRef([
    {
      label: "Inbox",
      slug: "/inbox",
    },
    {
      label: "Sent",
      slug: "/sent",
    },
    {
      label: "Draft",
      slug: "/draft",
    },
    {
      label: "Trash",
      slug: "/trash",
    },
  ]).current;

  return (
    <>
      <HashRouter>
        <div className="md:container md:mx-auto pt-6 mt-6 grid grid-cols-4 gap-4">
          <div className="col-span-1">
            <MessagesNav links={links} />
          </div>
          <div className="col-span-3">
            <Routes>
              <Route path="/inbox" element={<Inbox />} />
              <Route path="/sent" element={<Sent />} />
              <Route path="/draft" element={<Draft />} />
              <Route path="trash" element={<Trash />} />
              <Route
                path="/:messages/:reference"
                element={<MessageDetails />}
              />
            </Routes>
          </div>
        </div>
      </HashRouter>
    </>
  );
}

const MessagesNav = ({ links }) => {
  const { pathname } = useLocation();

  return (
    <div className="bg-white rounded-md p-3">
      <ul className="">
        {links.map((item, idx) => (
          <Link key={idx} to={item.slug}>
            <li
              className={`py-2 my-2  pl-5 cursor-pointer border-b capitalize ${
                pathname === item.slug ? "active" : ""
              }`}
            >
              {item.label}
            </li>
          </Link>
        ))}
      </ul>
      <style jsx>{`
        .active {
          background: #0d028b;
          color: white;
          border-radius: 2px;
        }
        .show {
          display: block !important;
        }
      `}</style>
    </div>
  );
};
