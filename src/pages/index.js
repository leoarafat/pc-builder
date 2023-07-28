import React from "react";

import dynamic from "next/dynamic";
import AllProducts from "@/components/Products/Products";
import Category from "../pages/category/index";
import ProductCategory from "@/components/category/ProductCategory";
import { useGetCategoryQuery } from "@/redux/features/category/categoryApi";
import HeroSection from "@/components/ui/Hero";
import Footer from "@/components/ui/Footer";

const RootLayout = dynamic(() => import("../components/layouts/RootLayout"), {
  ssr: false,
});
const HomePage = ({ products }) => {
  const { data: category } = useGetCategoryQuery(null);

  return (
    <div>
      <HeroSection />
      <AllProducts products={products} />
      <Category category={category} />
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/products");
  const products = await res.json();

  return { props: { products } };
};
