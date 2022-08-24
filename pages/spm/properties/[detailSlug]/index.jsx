import React from "react";
import { useRouter } from "next/router";
import PropertyDetails from "../../../../components/spm/properties/PropertyDetails";

export default function Index() {
  const router = useRouter();
  const { detailSlug } = router.query;

  console.log(detailSlug);

  return <PropertyDetails />;
}
