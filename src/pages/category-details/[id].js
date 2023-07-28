import { useGetCategoryProductQuery } from "@/redux/features/category/categoryApi";
import { useRouter } from "next/router";
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

const CategoryProductDetails = () => {
  const router = useRouter();
  const id = router.query.id;
  const { data } = useGetCategoryProductQuery(id);
  const product = data?.product;
  console.log(product?.image);
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
              src={product?.image}
              alt={product?.name}
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h4" component="h1" gutterBottom>
                {product?.name}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Brand:</strong> {product?.key_features.Brand}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Model:</strong> {product?.key_features.Model}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Specification:</strong>{" "}
                {product?.key_features.Specification}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Socket:</strong> {product?.key_features.Socket}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Clock Speed:</strong>{" "}
                {product?.key_features["Clock Speed"]}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>TDP:</strong> {product?.key_features.TDP}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Price:</strong> {product?.price}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Status:</strong> {product?.status}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Individual Rating:</strong> {product?.individual_rating}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Average Rating:</strong> {product?.average_rating}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Description:</strong> {product?.description}
              </Typography>
              <Typography variant="h6" component="h2" gutterBottom>
                Reviews:
              </Typography>
              {product?.reviews?.map((review) => (
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
export default CategoryProductDetails;
CategoryProductDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
