import React from "react";
// import { useForm } from "react-hook-form";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { Auth } from "@libs/api";
// import { setCookies } from "@libs/auth";
import { useRouter } from "next/router";

export default function Login() {
  // const schema = yup.object().shape({
  //   email: yup.string().email().required("The Email field is mandatory"),
  //   password: yup.string().required("The Password field is mandatory"),
  // });
  // const router = useRouter();

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({ resolver: yupResolver(schema) });

  // const onSubmit = async (data) => {
  //   const user = await Auth.login(data);
  //   if (user) {
  //     setCookies(user);
  //     router.push("/dashboard");
  //   }
  // };

  return (
    <div className="login w-full h-screen relative top-0 left-0">
      <div className="md:container md:mx-auto mt-28">
        <div className="w-3/12 rounded-sm bg-white p-4 z-auto relative">
          <div>
            <h3 className="text-xl text-black font-medium pl-2 font-poppins">
              Login
            </h3>
            <p className="pl-2 text-sm pt-3 font-poppins">Welcome back!</p>
          </div>
          <div className="loginForm pl-2 pt-4 mt-4">
            <form>
              <div className="form-group mb-3">
                <label className="block mb-2">Email</label>
                <input
                  type="email"
                  // {...register("email")}
                  className="w-full py-2 px-3 border-b-1 outline-none"
                  placeholder="johndoe@example.com"
                />
              </div>
              <div className="form-group mb-3">
                <label className="block mb-2">Password</label>
                <input
                  type="password"
                  // {...register("password")}
                  className="w-full py-2 px-3 border-b-1 outline-none"
                  placeholder="***********"
                />
              </div>
              <div className="py-4 flex justify-between mb-3">
                <label>
                  <input type="checkbox" id="rememberMe" /> Remember Me
                </label>
                <a href="#" className="text-blue-700">
                  Forgot Password?{" "}
                </a>
              </div>
              <button
                className="py-1 px-4 bg-primary-light w-full text-white rounded-sm"
                type="submit"
                // onClick={handleSubmit(onSubmit)}
                // onClick={() => router.push("/dashboard")}
                onClick={() => console.log("yes")}
              >
                Login
              </button>

              <div className="text-center py-4 mt-4">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                {
                  <p className="text-sm">
                    {"Don't have an account? "}
                    <a href="#" className="text-blue-700">
                      Sign Up
                    </a>
                  </p>
                }
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
