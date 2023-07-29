import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import dynamic from "next/dynamic";
const RootLayout = dynamic(
  () => import("../../components/layouts/RootLayout"),
  {
    ssr: false,
  }
);
const ProductDetails = ({ product }) => {
  return (
    <Box
      style={{
        marginBottom: "4rem",
        padding: "4rem",
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              style={{ height: "auto", width: "100%" }}
              src={product.product.image}
              alt={product.product.name}
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h4" component="h1" gutterBottom>
                {product.product.name}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Brand:</strong> {product.product.key_features.Brand}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Model:</strong> {product.product.key_features.Model}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Specification:</strong>{" "}
                {product.product.key_features.Specification}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Socket:</strong> {product.product.key_features.Socket}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Clock Speed:</strong>{" "}
                {product.product.key_features["Clock Speed"]}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>TDP:</strong> {product.product.key_features.TDP}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Price:</strong> {product.product.price}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Status:</strong> {product.product.status}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Individual Rating:</strong>{" "}
                {product.product.individual_rating}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Average Rating:</strong>{" "}
                {product.product.average_rating}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Description:</strong> {product.product.description}
              </Typography>
              <Typography variant="h6" component="h2" gutterBottom>
                Reviews:
              </Typography>
              {product.product.reviews.map((review) => (
                <Box key={review._id} mt={1} p={1} border={1}>
                  <Typography variant="body1" gutterBottom>
                    <strong>Author:</strong> {review.author}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    <strong>Rating:</strong> {review.rating}
                  </Typography>
                  <Typography variant="body1">{review.comment}</Typography>
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDetails;

ProductDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export async function getStaticPaths() {
  const res = await fetch(`${process.env.API_URL}/api/products`);
  const products = await res.json();

  const paths = products.product.map((post) => ({
    params: { id: post._id.toString() },
  }));

  return { paths, fallback: false };
}

export const getStaticProps = async (context) => {
  const id = context.params.id;

  const res = await fetch(`${process.env.API_URL}/api/products/${id}`);
  const product = await res.json();
  return { props: { product } };
};
