import React from "react";
import Head from "next/head";
import Login from "../../components/spm/login/Login";

export default function index() {
  return (
    <div>
      <Head>
        <title>Senior Property Manager | Login</title>
      </Head>
      <Login />
    </div>
  );
}
