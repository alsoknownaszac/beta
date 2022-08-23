import { usePropertyDispatch, usePropertyStore } from "context/PropertyContext";
import { useEffect, useState } from "react";
import HousesList from "./HousesList";
import LandList from "./LandList";
import ShopList from "./ShopList";
import { Properties } from "@libs/api";

const PropertyList = () => {
  const dispatch = usePropertyDispatch();

  const [selectedTab, setSelectedTab] = useState("houses");

  const toggleTab = (tab) =>
    selectedTab !== tab ? setSelectedTab(tab) : selectedTab;

  const getProperties = async () => {
    const properties = await Properties.properties();
    dispatch({ type: "list", payload: properties });
  };

  useEffect(() => {
    getProperties();
  }, []);

  return (
    <>
      <div className="page_content">
        <div className="p-3">
          <h4 className="font-medium text-lg">Properties</h4>
          <div className="flex mt-3">
            <a
              className={`px-4 py-2 bg-blue-700 mr-1  cursor-pointer text-white ${
                selectedTab === "houses" ? "active" : ""
              }`}
              onClick={() => toggleTab("houses")}
            >
              House Properties
            </a>
            <a
              className={`px-4 py-2 bg-blue-700 mr-1  cursor-pointer text-white ${
                selectedTab === "lands" ? "active" : ""
              }`}
              onClick={() => toggleTab("lands")}
            >
              Lands
            </a>
            <a
              className={`px-4 py-2 bg-blue-700 mr-1  cursor-pointer text-white ${
                selectedTab === "stores" ? "active" : ""
              }`}
              onClick={() => toggleTab("stores")}
            >
              Stores
            </a>
          </div>
          <div className="md:container  bg-white">
            <div className="max-w-full">
              <div className="p-4">
                <div className="relative mt-1">
                  <input
                    type="text"
                    className="border border-gray-300 text-sm p-2.5 focus:ring-blue-800 w-80"
                    placeholder="Search For Items"
                  />
                </div>
              </div>
              <div className="overflow-x-scroll">
                {selectedTab === "houses" && <HousesList />}
                {selectedTab === "lands" && <LandList />}
                {selectedTab === "stores" && <ShopList />}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .active{
            color: blue;
            border-color: blue;
            border-top:1px;
            border-left:1px;
            border-right:1px;
            border-style: solid;
            background: white;
        }
      `}</style>
    </>
  );
};

export default PropertyList;
