import { useRouter } from "next/router";
import React from "react";
import {
  Box,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Button,
} from "@mui/material";

import Link from "next/link";
import dynamic from "next/dynamic";
const RootLayout = dynamic(
  () => import("../../components/layouts/RootLayout"),
  {
    ssr: false,
  }
);
const CategoryProducts = ({ data }) => {
  const products = data?.category?.products;

  const cardHeight = 500;
  return (
    <Box
      style={{
        marginBottom: "4rem",
        padding: "4rem",
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom></Typography>
      <Grid container spacing={3} mt={4}>
        {products?.map((product) => (
          <Grid item key={product._id} xs={12} sm={6} md={4} lg={3}>
            <Card
              className="Card-root"
              style={{
                width: "100%",
                height: cardHeight,
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  style={{
                    height: "200px",
                    width: "100%",
                    objectFit: "contain",
                  }}
                  src={product.image}
                  alt={product.name}
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    component="h2"
                    style={{
                      marginBottom: "1rem",
                      fontWeight: 600,
                    }}
                  >
                    Category: {product.category}
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{
                      marginBottom: "1rem",
                      fontWeight: 600,
                    }}
                  >
                    Name: {product.name}
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Price: ${product.price}
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Status: {product.status}
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Average Rating: {product.average_rating}
                  </Typography>

                  <Link href={`/category-details/${product.id}`} passHref>
                    <Button
                      variant="contained"
                      color="primary"
                      style={{ textDecoration: "none" }}
                    >
                      Details
                    </Button>
                  </Link>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CategoryProducts;
CategoryProducts.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
export async function getStaticPaths() {
  const res = await fetch(`${process.env.API_URL}/api/categories`);
  const category = await res.json();

  const paths = category.category.map((post) => ({
    params: { id: post._id },
  }));

  return { paths, fallback: false };
}

export const getStaticProps = async (context) => {
  const id = context.params.id;

  const res = await fetch(`${process.env.API_URL}/api/categories/${id}`);
  const data = await res.json();
  return { props: { data } };
};
