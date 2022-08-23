import React from "react";
import { MdEmail as EmailIcon } from "react-icons/md";
import { IoIosLock as LockIcon } from "react-icons/io";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  return (
    <div className="login w-full h-screen bg-root-bg bg-no-repeat bg-cover bg-center relative ">
      <div className="w-[30%] rounded-[10px] bg-white p-[36px] z-auto relative left-[111px] top-1/2 -translate-y-1/2">
        <div className="">
          <h3 className="text-[35px] text-[#626FDB] mb-[8px] font-bold">
            Welcome Back
          </h3>
          <p className="text-[18px] pl-2 mb-[20px]">Sign In</p>
          <div className="">
            <div className="flex items-center mb-[15px]">
              <EmailIcon className="" size={"30px"} />
              <input
                className="w-[90%] text-[20px] outline-none bg-transparent ml-[8px] py-[20px] border-b-2 border-[rgba(98,_111,_219,_0.6)]"
                type="text"
                placeholder="E-mail Address"
              />
            </div>
            <div className="flex items-center mb-[23px]">
              <LockIcon className="" size={"30px"} />
              <input
                className="w-[90%] text-[20px] outline-none bg-transparent ml-[8px] py-[20px] border-b-2 border-[rgba(98,_111,_219,_0.6)]"
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="flex items-center justify-between pl-4 mb-[43px]">
              <label className="text-[18px]">
                <input type="checkbox" id="rememberMe" /> Remember Me
              </label>
              <a href="#" className="text-blue-700">
                Forgot Password?{" "}
              </a>
            </div>
            <div className="flex justify-center mb-[20px]">
              <button
                className="w-[80%] font-bold text-[25px] mx-auto py-[13px] text-center bg-gradient-to-r from-purple-500 to-indigo-500 rounded-[30px]"
                type="submit"
                onClick={() => router.push("/spm/dashboard")}
              >
                Login
              </button>
            </div>
            <div className="text-center ">
              <p className="text-[18px]">
                {"Don't have an account?"}{" "}
                <a href="/spm" className="text-blue-700">
                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
