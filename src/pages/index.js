import React from "react";
import RootLayout from "../../components/layouts/RootLayout";

const HomePage = () => {
  return (
    <div>
      <h1>Hello world</h1>
    </div>
  );
};

export default HomePage;
HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
