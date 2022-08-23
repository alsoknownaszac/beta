import { usePropertyStore } from "context/PropertyContext";
import { useMemo, useRef } from "react";
import { naira } from "@libs/formatCurrency";

const LandList = () => {
  const store = usePropertyStore();
  const columns = useRef([
    "Title",
    "Address",
    "Price",
    "TSqft",
    "C Of O",
    "Any Occupant",
    "Property Condition",
  ]).current;

  const lands = useMemo(
    () => store.properties.filter((current) => current.type.name === "Land"),
    [store.properties]
  );

  return (
    <>
      <table className="divide-y divide-gray-200 w-full">
        <thead className="bg-gray-200">
          <tr>
            {columns.map((col) => (
              <th
                scope="col"
                key={col}
                className="py-3 px-6 text-sm font-medium text-left"
              >
                {col}
              </th>
            ))}
            <th
              scope="col"
              className="py-3 px-6 text-sm font-medium text-left"
            ></th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {lands.map((land) => (
            <tr key={land.id}>
              <td className="py-4 px-6 text-sm font-medium whitespace-nowrap">
                {land.title}
              </td>
              <td className="py-4 px-6 text-sm font-medium whitespace-nowrap">
                Lorem Address
              </td>
              <td className="py-4 px-6 text-sm font-medium whitespace-nowrap">
                {naira(land.price)}
              </td>
              <td className="py-4 px-6 text-sm font-medium whitespace-nowrap">
                2000
              </td>
              <td className="py-4 px-6 text-sm font-medium whitespace-nowrap">
                Available
              </td>
              <td className="py-4 px-6 text-sm font-medium whitespace-nowrap">
                {" "}
                <span className="bg-red-200 px-2 py-1 rounded-sm">
                  Yes Tenant
                </span>
              </td>
              <td className="py-4 px-6 text-sm font-medium whitespace-nowrap">
                <span className="bg-green-300 px-2 py-1 rounded-sm">
                  Completed
                </span>
              </td>
              <td className="py-4 px-6 text-sm font-medium whitespace-nowrap">
                <div className="flex">
                  <a
                    href=""
                    className="py-1 px-2 text-white bg-blue-800 text-sm font-normal rounded-sm"
                  >
                    View
                  </a>
                  <a
                    href=""
                    className="py-1 px-2 text-white bg-red-300 text-sm font-normal rounded-sm mx-1"
                  >
                    Edit
                  </a>
                  <a
                    href=""
                    className="py-1 px-2 text-white bg-red-800 text-sm font-normal rounded-sm"
                  >
                    Delete
                  </a>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default LandList;
