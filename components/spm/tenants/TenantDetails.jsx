import Link from "next/link";
import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { MdMoreVert } from "react-icons/md";
import BasicPopover from "../../reuseable/BasicPopover";
import PropertyHeader from "../properties/propertyHeader";

export default function TenantDetails() {
  return (
    <PropertyHeader>
      <Card className="mb-[35px]" header="Property Manager">
        <div className="flex gap-[9%] justify-between items-center py-[10px] px-[3%]">
          <div className="w-3/5 flex items-center gap-[50px] border-r-2 border-black ">
            <div className="rounded-full flex justify-center ">
              <FaUserAlt size="100px" />
            </div>
            <div>
              <h1 className="font-semibold text-[20px] mb-[10px]">
                IKEDI MANUEL
              </h1>
              <p>NO. of Properties : 15</p>
              <p>NO. of Tenants : 13</p>
            </div>
          </div>
          <div className="w-2/5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh risus
            velit nunc, et. Eget sapien in tortor vitae, nibh. Dui eget
            adipiscing arcu dictum sed. Lacus quis sit ante mauris ultrices. Eu,
            nunc, sit gravida pulvinar. Maecenas mauris auctor platea gravida id
            enim.
          </div>
        </div>
      </Card>

      <Card options className="mb-[35px]" header="Property Description">
        <p className="mb-[10px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et id at
          turpis id adipiscing. Massa ac, pharetra, auctor morbi vestibulum.
          Diam amet, a, quam scelerisque nisl amet, tempor dictum nisi.
          Porttitor eu amet, pharetra at venenatis ultrices. Morbi nec vulputate
          dolor tempor sit odio. Eget libero euismod tortor rhoncus nunc,
          vulputate. Arcu consequat, ut et enim. Dictumst arcu amet et est. Id
          et sed sed porta etiam id. Fermentum sed gravida scelerisque tellus
          aenean lorem fermentum potenti fermentum. Lobortis vestibulum orci
          velit nec vestibulum. Adipiscing aliquam tortor at lacus, quis tortor.
          Sit at enim ac metus ut fames.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et id at
          turpis id adipiscing. Massa ac, pharetra, auctor morbi vestibulum.
          Diam amet, a, quam scelerisque nisl amet, tempor dictum nisi.
          Porttitor eu amet, pharetra at venenatis ultrices. Morbi nec vulputate
          dolor tempor sit odio. Eget libero euismod tortor rhoncus nunc,
          vulputate. Arcu consequat, ut et enim. Dictumst arcu amet et est. Id
          et sed sed porta etiam id. Fermentum sed gravida scelerisque tellus
          aenean lorem fermentum potenti fermentum. Lobortis vestibulum orci
          velit nec vestibulum. Adipiscing aliquam tortor at lacus, quis tortor.
          Sit at enim ac metus ut fames.
        </p>
      </Card>
      <Card options className="mb-[35px]" header="Property Details">
        <div className="grid grid-cols-3 grid-rows-4 gap-x-8 gap-y-3">
          <div>- Type: flat, Low-Rise (1-3) </div>
          <div>- Year Built: 1991 - Square Footage: 2635 </div>
          <div>- Square Footage: Condominium </div>
          <div>- Property Type: Condo/TIC/Loft</div>

          <div>- HDADues: 375 HDA </div>
          <div>
            - Fees: Water, Electricity, Garbage, Maintenance, Security Service,
            insurance
          </div>
          <div>- HDA: Yes</div>

          <div>- Marble Countertops </div>
          <div> - Wood Finishings </div>
          <div>- Laundry Room </div>
          <div>- Remodeled Kithen</div>
        </div>
      </Card>
      <Card options className="mb-[35px]" header="Amenities + Features">
        <div className="grid grid-cols-3 grid-rows-4 gap-x-8 gap-y-3">
          <div>- Type: flat, Low-Rise (1-3) </div>
          <div>- Year Built: 1991 - Square Footage: 2635 </div>
          <div>- Square Footage: Condominium </div>
          <div>- Property Type: Condo/TIC/Loft</div>

          <div>- HDADues: 375 HDA </div>
          <div>
            - Fees: Water, Electricity, Garbage, Maintenance, Security Service,
            insurance
          </div>
          <div>- HDA: Yes</div>

          <div>- Marble Countertops </div>
          <div> - Wood Finishings </div>
          <div>- Laundry Room </div>
          <div>- Remodeled Kithen</div>
        </div>
      </Card>
      <button className="font-semibold text-gray-600 border-[1px] shadow-lg py-[10px] px-[20px] rounded-lg text-center bg-white">
        Delete Property
      </button>
    </PropertyHeader>
  );
}

function Card(props) {
  const { className, header, options } = props;
  return (
    <div
      className={`bg-[#ebebeb] p-[10px] px-[15px] rounded-[5px] ${className}`}
    >
      <header className="w-full flex justify-between py-[8px] border-b-[1px] border-gray-400 text-[18px] font-semibold text-gray-700 mb-[10px]">
        {header}
        {options && (
          <div>
            <BasicPopover btn={<MdMoreVert size="20px" />}>
              <div className="p-[5px] px-[15px] bg-white text-center text-[14px]">
                <Link href="">
                  <span className="px-2 py-1 mb-1 block">View</span>
                </Link>
                <hr />
                <Link href="">
                  <span className="px-2 py-1 mb-1 block">Edit</span>
                </Link>
                <hr />
                <Link href="">
                  <span className="px-2 py-1 mb-1 block">Delete</span>
                </Link>
              </div>
            </BasicPopover>
          </div>
        )}
      </header>
      {props.children}
    </div>
  );
}
