import { usePropertyStore } from "context/PropertyContext";
import { useMemo, useRef } from "react";
import { naira } from "@libs/formatCurrency";

const HousesList = () => {
  const store = usePropertyStore();
  const columns = useRef([
    "Title",
    "Address",
    "Price",
    "Baths",
    "Beds",
    "Garage",
    "TSqft",
    "Year Built",
    "Any Occupant",
    "Property Condition",
  ]).current;

  const properties = useMemo(
    () =>
      store.properties.filter(
        (current) =>
          !["Store", "Land", "Warehouse", "Hall"].includes(current.type.name)
      ),
    [store.properties]
  );

  return (
    <>
      <table className="divide-y divide-gray-200 w-full">
        <thead className="bg-gray-200">
          <tr>
            {columns.map((col) => {
              return (
                <th
                  key={col}
                  scope="col"
                  className="py-3 px-6 text-sm font-medium text-left"
                >
                  {col}
                </th>
              );
            })}
            <th
              scope="col"
              className="py-3 px-6 text-sm font-medium text-left"
            ></th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {properties.map((property) => (
            <tr key={property.id}>
              <td className="py-4 px-6 text-sm font-medium whitespace-nowrap">
                {property.title}
              </td>
              <td className="py-4 px-6 text-sm font-medium whitespace-nowrap">
                {property.address}
              </td>
              <td className="py-4 px-6 text-sm font-medium whitespace-nowrap">
                {naira(property.price)}
              </td>
              <td className="py-4 px-6 text-sm font-medium whitespace-nowrap">
                {property.bath}
              </td>
              <td className="py-4 px-6 text-sm font-medium whitespace-nowrap">
                {property.bed}
              </td>
              <td className="py-4 px-6 text-sm font-medium whitespace-nowrap">
                {property.garage}
              </td>
              <td className="py-4 px-6 text-sm font-medium whitespace-nowrap">
                {property.sq_ft}
              </td>
              <td className="py-4 px-6 text-sm font-medium whitespace-nowrap">
                {property.constructed_at}
              </td>
              <td className="py-4 px-6 text-sm font-medium whitespace-nowrap">
                {" "}
                <span className="bg-red-200 px-2 py-1 rounded-sm">
                  {property.total_occupants.length < 0
                    ? "No Tenant"
                    : "Yes Tenant"}
                </span>
              </td>
              <td className="py-4 px-6 text-sm font-medium whitespace-nowrap">
                <span className="bg-green-300 px-2 py-1 rounded-sm">
                  {property.condition ? property.condition.name : "Unknown"}
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

export default HousesList;
