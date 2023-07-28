// import React, { createContext, useContext, useEffect, useState } from "react";
// import { toast } from "react-hot-toast";

// const ProductContext = createContext();

// export const useProductContext = () => useContext(ProductContext);

// export function ProductProvider({ children }) {
//   const [selectedProducts, setSelectedProducts] = useState([]);

//   // Load selected products from local storage on initial render
//   useEffect(() => {
//     const storedProducts = localStorage.getItem("selectedProducts");
//     if (storedProducts) {
//       setSelectedProducts(JSON.parse(storedProducts));
//     }
//   }, []);

//   const addProduct = (product) => {
//     const isProductAlreadyAdded = selectedProducts.some(
//       (p) => p?.name === product?.name
//     );

//     if (!isProductAlreadyAdded) {
//       // Add the product to selected products list
//       setSelectedProducts((prevSelectedProducts) => [
//         ...prevSelectedProducts,
//         product,
//       ]);
//       toast.success("Product Added");
//       localStorage.setItem(
//         "selectedProducts",
//         JSON.stringify([...selectedProducts, product])
//       );
//     } else {
//       toast.error("Already Added");
//     }
//   };

//   return (
//     <ProductContext.Provider value={{ selectedProducts, addProduct }}>
//       {children}
//     </ProductContext.Provider>
//   );
// }
import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const ProductContext = createContext();

export const useProductContext = () => useContext(ProductContext);

export function ProductProvider({ children }) {
  const [selectedProducts, setSelectedProducts] = useState({});

  useEffect(() => {
    const storedProducts = localStorage.getItem("selectedProducts");
    if (storedProducts) {
      setSelectedProducts(JSON.parse(storedProducts));
    }
  }, []);

  const addProduct = (product) => {
    const category = product?.category;
    console.log(category, "ccc");
    setSelectedProducts((prevSelectedProducts) => {
      const updatedSelectedProducts = { ...prevSelectedProducts };

      if (!updatedSelectedProducts[category]) {
        updatedSelectedProducts[category] = [product];
      } else {
        const isProductAlreadyAdded = updatedSelectedProducts[category].some(
          (p) => p?.name === product?.name
        );

        if (!isProductAlreadyAdded) {
          updatedSelectedProducts[category] = [
            ...updatedSelectedProducts[category],
            product,
          ];
        } else {
          toast.error("Already Added");
        }
      }

      localStorage.setItem(
        "selectedProducts",
        JSON.stringify(updatedSelectedProducts)
      );

      return updatedSelectedProducts;
    });

    toast.success("Product Added");
  };

  return (
    <ProductContext.Provider value={{ selectedProducts, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
}
