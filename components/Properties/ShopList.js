import { usePropertyStore } from "context/PropertyContext";
import { useMemo, useRef } from "react";
import { naira } from "@libs/formatCurrency";

const ShopList = () => {
  const store = usePropertyStore();
  const columns = useRef([
    "Title",
    "Address",
    "Price",
    "Toilet",
    "TSqft",
    "Year Built",
    "Any Occupant",
    "Property Condition",
  ]).current;

  const stores = useMemo(
    () => store.properties.filter((current) => current.type.name === "Store"),
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
          {stores.map((item) => (
            <tr key={item.id}>
              <td className="py-4 px-6 text-sm font-medium whitespace-nowrap">
                {item.title}
              </td>
              <td className="py-4 px-6 text-sm font-medium whitespace-nowrap">
                {item.address}
              </td>
              <td className="py-4 px-6 text-sm font-medium whitespace-nowrap">
                {naira(item.price)}
              </td>
              <td className="py-4 px-6 text-sm font-medium whitespace-nowrap">
                {item.toilet}
              </td>
              <td className="py-4 px-6 text-sm font-medium whitespace-nowrap">
                {item.sq_ft}
              </td>
              <td className="py-4 px-6 text-sm font-medium whitespace-nowrap">
                {item.constructed_at}
              </td>
              <td className="py-4 px-6 text-sm font-medium whitespace-nowrap">
                {" "}
                <span className="bg-red-200 px-2 py-1 rounded-sm">
                  {item.total_occupants.length < 0 ? "No Tenant" : "Yes Tenant"}
                </span>
              </td>
              <td className="py-4 px-6 text-sm font-medium whitespace-nowrap">
                <span className="bg-green-300 px-2 py-1 rounded-sm">
                  {item.condition ? item.condition.name : "Unknown"}
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

export default ShopList;
