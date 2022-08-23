import React from "react";
import Head from "next/head";
import Dashboard from "../../../components/spm/dashboard/Dashboard";

export default function index() {
  return (
    <div>
      <Head>
        <title>Senior Property Manager | Dashboard</title>
      </Head>
      <Dashboard />
    </div>
  );
}
