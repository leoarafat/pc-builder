import * as React from "react";
import dynamic from "next/dynamic";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/joy/Button";
import Add from "@mui/icons-material/Add";
import { useGetCategoryQuery } from "@/redux/features/category/categoryApi";
import Link from "next/link";
import { useProductContext } from "@/context/ProductContext";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { usePostProductsMutation } from "@/redux/features/order/orderSlice";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import Loading from "@/components/ui/Loading";

const RootLayout = dynamic(
  () => import("../../components/layouts/RootLayout"),
  {
    ssr: false,
  }
);

export default function PcBuilderPage() {
  // console.log(data);
  const { data } = useGetCategoryQuery(null);
  console.log(data);
  const [postSelectedProducts, { isLoading, isSuccess, isError, error }] =
    usePostProductsMutation();
  const router = useRouter();
  const { selectedProducts, removeProduct } = useProductContext();

  const rows = data?.category;
  console.log(rows);
  const selectedCategories = Object.keys(selectedProducts);
  const allCategoriesSelected =
    rows?.every((row) => selectedCategories.includes(row.categories_name)) &&
    rows?.every(
      (row) =>
        Array.isArray(selectedProducts[row?.categories_name]) &&
        selectedProducts[row?.categories_name].length > 0
    );

  const handleAddToCart = async () => {
    const orderData = {
      orderProducts: selectedProducts,
    };
    await postSelectedProducts(orderData);
  };

  const handleRemove = (category, productName) => {
    removeProduct(category, productName);
  };

  const getTotalPrice = () => {
    const totalPrice = rows?.reduce((total, row) => {
      if (Array.isArray(selectedProducts[row?.categories_name])) {
        selectedProducts[row?.categories_name].forEach((product) => {
          total += parseFloat(product?.price) || 0;
        });
      }
      return total;
    }, 0);

    return totalPrice;
  };
  if (isSuccess) {
    toast.success("Selected products data saved successfully!");
    router.push("/success");
  }
  if (isError) {
    toast.error(`${error.data.error}`);
  }
  if (isLoading) {
    <Loading />;
  }
  return (
    <>
      <Button
        disabled={!allCategoriesSelected}
        onClick={() => handleAddToCart(selectedProducts)}
        variant="outlined"
        color="primary"
      >
        Complete Build
      </Button>
      <Button variant="outlined" color="primary">
        Total Price: ${getTotalPrice()}
      </Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Devices</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.map((row) => (
              <TableRow
                key={row?.categories_name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.categories_name}
                </TableCell>
                <TableCell>
                  {Array.isArray(selectedProducts[row?.categories_name]) &&
                    selectedProducts[row?.categories_name].map((p) => (
                      <React.Fragment key={p?.name}>
                        <p>{p?.name}</p>
                        <p>$ {p?.price}</p>
                        <IconButton
                          onClick={() => handleRemove(p?.category, p?.name)}
                          align="right"
                          aria-label="delete"
                          size="large"
                        >
                          <DeleteIcon fontSize="inherit" />
                        </IconButton>
                      </React.Fragment>
                    ))}
                </TableCell>
                <TableCell align="right">
                  <Link href={`/category-list/${row._id}`}>
                    {" "}
                    <Button startDecorator={<Add />}>Choose</Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

// ...

PcBuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
