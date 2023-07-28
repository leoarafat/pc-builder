// import * as React from "react";
// import dynamic from "next/dynamic";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import Button from "@mui/joy/Button";
// import Add from "@mui/icons-material/Add";
// import { useGetCategoryQuery } from "@/redux/features/category/categoryApi";
// import Link from "next/link";
// import { useProductContext } from "@/context/ProductContext";
// const RootLayout = dynamic(
//   () => import("../../components/layouts/RootLayout"),
//   {
//     ssr: false,
//   }
// );

// export default function PcBuilderPage() {
//   const { data } = useGetCategoryQuery(null);
//   const { selectedProducts } = useProductContext();
//   console.log(selectedProducts, "selected product");
//   const rows = data?.category;

//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Devices</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows?.map((row) => (
//             <TableRow
//               key={row?.categories_name}
//               sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//                 {row.categories_name}
//                 {Array.isArray(selectedProducts) ? (
//                   selectedProducts.map((p) => (
//                     <React.Fragment key={p?.name}>
//                       <p>{p?.name}</p>
//                       <p>{p?.price}</p>
//                     </React.Fragment>
//                   ))
//                 ) : (
//                   <p>No products selected in this category</p>
//                 )}
//               </TableCell>
//               <TableCell align="right">
//                 <Link href={`/category-list/${row._id}`}>
//                   {" "}
//                   <Button startDecorator={<Add />}>Choose</Button>
//                 </Link>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }

// PcBuilderPage.getLayout = function getLayout(page) {
//   return <RootLayout>{page}</RootLayout>;
// };

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
const RootLayout = dynamic(
  () => import("../../components/layouts/RootLayout"),
  {
    ssr: false,
  }
);

export default function PcBuilderPage() {
  const { data } = useGetCategoryQuery(null);
  const { selectedProducts } = useProductContext();
  console.log(selectedProducts, "selected product");
  const rows = data?.category;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Devices</TableCell>
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
                {Array.isArray(selectedProducts[row?.categories_name]) && (
                  <Table>
                    <TableBody>
                      {selectedProducts[row?.categories_name].map((product) => (
                        <TableRow key={product?.name}>
                          <TableCell>{product?.name}</TableCell>
                          <TableCell align="right">{product?.price}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
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
  );
}

PcBuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
