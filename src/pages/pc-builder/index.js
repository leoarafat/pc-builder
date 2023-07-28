import React from "react";
import dynamic from "next/dynamic";
const RootLayout = dynamic(
  () => import("../../../components/layouts/RootLayout"),
  {
    ssr: false,
  }
);
const PcBuilderPage = () => {
  return (
    <div>
      <h1>PC Builder</h1>
    </div>
  );
};

export default PcBuilderPage;
PcBuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
