import React from "react";
import Head from "next/head";
import Properties from "../../../components/spm/properties/Properties";

export default function index() {
  return (
    <div>
      <Head>
        <title>Senior Property Manager | Dashboard</title>
      </Head>
      <Properties />
    </div>
  );
}
