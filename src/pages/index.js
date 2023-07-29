import React from "react";

import dynamic from "next/dynamic";
import AllProducts from "@/components/Products/Products";
import Category from "../pages/category/index";
import HeroSection from "@/components/ui/Hero";
import Footer from "@/components/ui/Footer";

const RootLayout = dynamic(() => import("../components/layouts/RootLayout"), {
  ssr: false,
});
const HomePage = ({ products, category }) => {
  // const { data: category } = useGetCategoryQuery(null);

  return (
    <div>
      <HeroSection />
      <AllProducts products={products} />
      <Category category={category} />
      <Footer />
    </div>
  );
};

export default HomePage;
HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
export const getStaticProps = async () => {
  const res = await fetch(`${process.env.API_URL}/api/products`);
  const products = await res.json();
  const catRes = await fetch(`${process.env.API_URL}/api/categories`);
  const category = await catRes.json();

  return { props: { products, category } };
};
