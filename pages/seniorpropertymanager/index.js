import Head from "next/head";
import Image from "next/image";
import {
  FiAlertCircle,
  FiExternalLink,
  FiKey,
  FiMaximize2,
  FiUser,
  FiUsers,
  FiHome,
  FiChevronRight,
  FiCalendar,
  FiLink,
} from "react-icons/fi";

export default function Dashboard({ user }) {
  return (
    <DefaultLayout>
      <Head>
        <title>Dashboard | Genious PMS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="page_content">
        <div className="p-3">
          <h4>Dashboard</h4>
        </div>
        <div className="md:container md:mx-auto mb-6 grid grid-cols-6 gap-4">
          <div className="col-span-4">
            <div className="w-full rounded-lg pl-3 grid grid-cols-4 gap-3">
              <div className="grid-col-1 bg-white p-4 rounded-md">
                <div className="flex justify-between">
                  <div>
                    <p className="text-muted">Rent Due Today </p>
                    <span className=" text-xl font-bold">5</span>
                  </div>
                  <div className="icon_holder flex-shrink-0 items-center">
                    <div className="icon_holder-sm icon-pattern  bg-primary-light rounded-full relative">
                      <div className="flex w-full h-full items-center text-white justify-center ">
                        <i data-feather="alert-circle"></i>
                        <FiAlertCircle size="18" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid-col-1 bg-white p-4 rounded-md">
                <div className="flex justify-between">
                  <div>
                    <p className="text-muted">Rent Overdue</p>
                    <span className="text-xl font-bold">10</span>
                  </div>
                  <div className="icon_holder flex-shrink-0 items-center">
                    <div className="icon_holder-sm  icon-pattern bg-green-500 rounded-full relative">
                      <div className="flex w-full h-full items-center text-white justify-center ">
                        <i data-feather="external-link"></i>
                        <FiExternalLink size="18" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid-col-1 bg-white p-4 rounded-md">
                <div className="flex justify-between">
                  <div>
                    <p className="text-muted">Moving In</p>
                    <span className=" text-xl font-bold">2</span>
                  </div>
                  <div className="icon_holder flex-shrink-0 items-center">
                    <div className="icon_holder-sm icon-pattern  bg-yellow-500 rounded-full relative">
                      <div className="flex w-full h-full items-center text-white justify-center ">
                        <i data-feather="key"></i>
                        <FiKey size="18" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid-col-1 bg-white p-4 rounded-md">
                <div className="flex justify-between">
                  <div>
                    <p className="text-muted">Moving Out</p>
                    <span className=" text-xl font-bold">2</span>
                  </div>
                  <div className="icon_holder flex-shrink-0 items-center">
                    <div className="icon_holder-sm icon-pattern  bg-red-500 rounded-full relative">
                      <div className="flex w-full h-full items-center text-white justify-center ">
                        <FiMaximize2 size="18" />
                        <i data-feather="maximize"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full rounded-lg pl-3 grid grid-cols-3 gap-3 pt-4 mt-4">
              <div className="grid-col-1 bg-white p-4 rounded-sm ">
                <div className="flex justify-between">
                  <div>
                    <p className="text-muted">Total Clients</p>
                    <span className="text-xl font-bold">14</span>
                  </div>
                  <div className="icon_holder flex-shrink-0 items-center">
                    <div className="icon_holder-sm icon-pattern bg-primary-light rounded-full relative">
                      <div className="flex w-full h-full items-center text-white justify-center ">
                        <FiUser size="18" />
                        <i data-feather="user"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid-col-1 bg-white p-4 rounded-md">
                <div className="flex justify-between">
                  <div>
                    <p className="text-muted">Total Tenants</p>
                    <span className="text-xl font-bold">30</span>
                  </div>
                  <div className="icon_holder flex-shrink-0 items-center">
                    <div className="icon_holder-sm icon-pattern bg-indigo-700 rounded-full relative">
                      <div className="flex w-full h-full items-center text-white justify-center ">
                        <FiUsers size="18" />
                        <i data-feather="user"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid-col-1 bg-white p-4 rounded-md">
                <div className="flex justify-between">
                  <div>
                    <p className="text-muted">Total Properties</p>
                    <span className="text-xl font-bold">104</span>
                  </div>
                  <div className="icon_holder flex-shrink-0 items-center">
                    <div className="icon_holder-sm icon-pattern bg-black rounded-full relative">
                      <div className="flex w-full h-full items-center text-white justify-center ">
                        <FiHome size="18" />
                        <i data-feather="home"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 ml-3">
            <div className="bg-white rounded-md p-3 recentactivities">
              <h3 className="text-md font-bold pl-2">Rents</h3>
              <div className="pt-2 mt-3 pl-2">
                <ul>
                  <li className="border-b-1 py-2">
                    <a href="#" className="">
                      <div>
                        <h5 className="font-medium text-2xl">
                          &#8358; 20,000,000.00
                        </h5>
                        <p className="text-muted">Due this month</p>
                      </div>
                    </a>
                  </li>
                  <li className="border-b-1 py-2">
                    <a href="#" className="">
                      <div>
                        <h5 className="font-medium text-2xl text-blue-700">
                          &#8358; 5,000,000.00
                        </h5>
                        <p className="text-muted">Recieved this month</p>
                      </div>
                    </a>
                  </li>
                  <li className="border-b-1 py-2">
                    <a href="#" className="">
                      <div>
                        <h5 className="font-medium text-2xl text-red-600">
                          &#8358; 10,000,000.00
                        </h5>
                        <p className="text-muted">Overdue</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="md:container md:mx-auto pt-6 mt-6 grid grid-cols-6 gap-4">
          <div className="col-span-2">
            <div className="bg-white rounded-md p-3 recentactivities">
              <div className="flex justify-between">
                <h3 className="text-md font-bold pl-2">Recent Sign up</h3>
                <a href="" className="flex justify-center items-center">
                  {" "}
                  <span className="text-xs">View all</span>
                  <i data-feather="chevrons-right"></i>
                  <FiChevronRight size="12" />
                </a>
              </div>
              <div className="pt-3 mt-3 pl-2">
                <ul>
                  <li className="border-b-1 py-2">
                    <div className="flex">
                      <div className="mr-4">
                        <img
                          src="/images/avatar-3.jpg"
                          className="avatar-sm rounded-sm object-cover"
                          alt=""
                        />
                      </div>
                      <div className="flex mr-auto">
                        <div>
                          <h4 className="font-medium text-md">Kings Wealth </h4>
                          <p className="text-muted text-sm">20 Mar 2021</p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <a
                          href="#"
                          className="mt-2 py-0.5 px-2 bg-blue-700 rounded-sm text-white"
                        >
                          view
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="border-b-1 py-2">
                    <div className="flex">
                      <div className="mr-4">
                        <img
                          src="/images/avatar-2.jpg"
                          className="avatar-sm rounded-sm object-cover"
                          alt=""
                        />
                      </div>
                      <div className="flex mr-auto">
                        <div>
                          <h4 className="font-medium text-md">Samuel Stans </h4>
                          <p className="text-muted text-sm">01 Jan 2021</p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <a
                          href="#"
                          className="mt-2 py-0.5 px-2 bg-blue-700 rounded-sm text-white"
                        >
                          view
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="bg-white rounded-md p-4 recentactivities">
              <div className="flex justify-between">
                <h3 className="text-md font-bold pl-2">Recent Bookings</h3>
                <a href="" className="flex justify-center items-center">
                  {" "}
                  <span className="text-xs">View all</span>
                  <FiChevronRight size="12" />
                  <i data-feather="chevron-right"></i>
                </a>
              </div>
              <div className="pt-2 mt-3 pl-2">
                <ul>
                  <li className="border-b-1 py-2">
                    <a href="#" className="flex justify-between">
                      <div>
                        <h5 className="font-medium">David Smith</h5>
                        <p className="text-muted">davidesmith@example.com</p>
                        <small>12 Nov, 2020</small>
                      </div>
                      <div className="mt-3">
                        <span className="bg-blue-700 text-xs text-white rounded-sm py-1 px-2">
                          Pending
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="border-b-1 py-2">
                    <a href="#" className="flex justify-between">
                      <div>
                        <h5 className="font-medium">James Halvit</h5>
                        <p className="text-muted">jameshalvit@example.com</p>
                        <small>03 Oct, 2020</small>
                      </div>
                      <div className="mt-3">
                        <span className="bg-green-500 text-xs text-white rounded-sm py-1 px-2">
                          Completed
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="border-b-1 py-2">
                    <a href="#" className="flex justify-between">
                      <div>
                        <h5 className="font-medium">David Wokoma</h5>
                        <p className="text-muted">davidwokoma@example.com</p>
                        <small>01 Oct, 2020</small>
                      </div>
                      <div className="mt-3">
                        <span className="bg-red-700 text-xs text-white rounded-sm py-1 px-2">
                          Cancelled
                        </span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="rounded-md p-3 bg-white">
              <h3 className="text-md font-bold pb-2 pl-2">Calendar</h3>
              {/* <Calendar
                                className="calendar"
                                /> */}
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

function DefaultLayout({ children }) {
  return (
    <div className="main_wrapper">
      <Header />
      <Sidebar />
      <section className="main_content">{children}</section>
    </div>
  );
}

function Header() {
  return (
    <header className="fixed z-50 bg-blue-default ">
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

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="navbar_brand_box">
        <a href="" className="logo  logo-dark">
          <span className="logo-lg">
            <Image
              src="/images/logo.svg"
              className="logo_img"
              alt="Logo"
              width="100%"
              height="40"
            />
          </span>
        </a>
      </div>
      <div data-sidebar="init" className="sidebar_menu_scroll">
        <div className="sidebar_wrapper m-0 ">
          <div className="simple_bar_height_auto_observer"></div>
          <div className="sidebar_mask">
            <div className="sidebar_offset">
              <div className="sidebar_content_wrapper h-full overscroll-none overflow-hidden">
                <div className="sidebar_content">
                  <div id="sidebar_menu" className="m-active">
                    <ul id="side_menu">
                      <li>
                        <a href="#/dashboard">
                          <Image
                            src="/svg/icons/property.svg"
                            alt="dashboard"
                            width="18"
                            height="18"
                          />
                          <span className="ml-2"> Dashboard</span>
                        </a>
                      </li>
                      <li>
                        <a href="#/dashboard">
                          <Image
                            src="/svg/icons/message.svg"
                            alt="dashboard"
                            width="18"
                            height="18"
                          />
                          <span className="ml-2">Messages</span>
                        </a>
                      </li>
                      <li>
                        <a href="#/dashboard">
                          <Image
                            src="/svg/icons/property.svg"
                            alt="dashboard"
                            width="18"
                            height="18"
                          />
                          <span className="ml-2">Properties</span>
                        </a>
                      </li>
                      <li>
                        <a href="#/dashboard">
                          <Image
                            src="/svg/icons/tenants.svg"
                            alt="dashboard"
                            width="18"
                            height="18"
                          />
                          <span className="ml-2">Tenants</span>
                        </a>
                      </li>
                      <li>
                        <a href="#/dashboard">
                          <Image
                            src="/svg/icons/clients.svg"
                            alt="dashboard"
                            width="18"
                            height="18"
                          />

                          <span className="ml-2">Clients</span>
                        </a>
                      </li>
                      <li>
                        <a href="#/dashboard">
                          <Image
                            src="/svg/icons/invoice.svg"
                            alt="dashboard"
                            width="18"
                            height="18"
                          />

                          <span className="ml-2">Payments</span>
                        </a>
                      </li>
                      <li>
                        <a href="#/dashboard">
                          <Image
                            src="/svg/icons/complaint.svg"
                            alt="dashboard"
                            width="18"
                            height="18"
                          />
                          <span className="ml-2">Complaints</span>
                        </a>
                      </li>
                      <li>
                        <a href="#/dashboard">
                          <Image
                            src="/svg/icons/requestService.svg"
                            alt="dashboard"
                            width="18"
                            height="18"
                          />
                          <span className="ml-2">Service Request</span>
                        </a>
                      </li>
                      <li>
                        <a href="#/dashboard">
                          <Image
                            src="/svg/icons/enquiry.svg"
                            alt="dashboard"
                            width="18"
                            height="18"
                          />
                          <span className="ml-2">Enquires</span>
                        </a>
                      </li>
                      <li>
                        <a href="#/dashboard">
                          <Image
                            src="/svg/icons/faq.svg"
                            alt="dashboard"
                            width="18"
                            height="18"
                          />
                          <span className="ml-2">Reports</span>
                        </a>
                      </li>
                      <li>
                        <a href="#/dashboard">
                          <Image
                            src="/svg/icons/settings.svg"
                            alt="dashboard"
                            width="18"
                            height="18"
                          />
                          <span className="ml-2">Settings</span>
                        </a>
                      </li>
                      <li>
                        <a href="#/dashboard">
                          <Image
                            src="/svg/icons/logout.svg"
                            alt="dashboard"
                            width="18"
                            height="18"
                          />
                          <span className="ml-2">Logout</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .logo_img {
            height: 40px;
          }
          .sidebar_offset {
            right: -12px;
            bottom: 0px;
          }
          .active {
            background: #ffffff;
            color: #0d028b !important;
          }
          .active .active-icon {
            filter: invert(17%) sepia(93%) saturate(2206%) hue-rotate(237deg)
              brightness(23%) contrast(141%);
          }
        `}
      </style>
    </aside>
  );
}

export const getServerSideProps = () => {
  const user = {
    firstname: "Mercy",
  };
  return {
    props: {
      user,
    },
  };
};
