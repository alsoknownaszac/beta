import dynamic from "next/dynamic";
import Head from "next/head";
import DefaultLayout from "@/components/layouts/DefaultLayout";

// const DynamicComponentWithNoSSR = dynamic(
//   () => import("@/components/Messages/Index"),
//   { ssr: false }
// );

export default function Index() {
  return (
    <>
      <DefaultLayout>
        <Head>
          <title>Dashboard | Messages</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="page_content">
          <div className="py-2 px-3 flex justify-between">
            <h4 className="font-medium text-lg">Messages</h4>
            <button
              className="py-2 px-5 bg-primary text-white  rounded-md"
              // onClick={() => showComposeMessage()}
            >
              Compose Message
            </button>
          </div>
          {/* <DynamicComponentWithNoSSR /> */}
        </div>
      </DefaultLayout>
    </>
  );
}
