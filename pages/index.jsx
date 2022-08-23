import React from "react";
import Head from "next/head";
import Login from "../components/guest/Login";

export default function Home() {
  return (
    <>
      <Head>
        <title>Genious PMS | Welcome</title>
      </Head>
      <Login />
    </>
  );
}
