import DefaultLayout from "@/components/layouts/DefaultLayout";
import PropertyList from "@/components/Properties/PropertyList";
import { PropertyContext } from "context/PropertyContext";
import Head from "next/head";

const Index = () => {
  return (
    <>
      <DefaultLayout>
        <Head>
          <title>Dashboard | Properties</title>
        </Head>
        <PropertyContext>
          <PropertyList />
        </PropertyContext>
      </DefaultLayout>
    </>
  );
};

export default Index;
