import { useGetCategoryProductQuery } from "@/redux/features/category/categoryApi";
import { useRouter } from "next/router";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  TextField,
  Button,
  Rating,
} from "@mui/material";
import dynamic from "next/dynamic";
import { useState } from "react";
import Loading from "@/components/ui/Loading";
const RootLayout = dynamic(
  () => import("../../components/layouts/RootLayout"),
  {
    ssr: false,
  }
);

const CategoryProductDetails = () => {
  const [userReview, setUserReview] = useState({
    author: "",
    rating: 0,
    comment: "",
  });
  const router = useRouter();
  const id = router.query.id;
  const { data, isLoading } = useGetCategoryProductQuery(id);

  const product = data?.product;

  const handleReviewChange = (event) => {
    const { name, value } = event.target;
    setUserReview((prevReview) => ({ ...prevReview, [name]: value }));
  };

  const handleReviewSubmit = () => {
    const newReview = { ...userReview };
    product?.product?.reviews.push(newReview);
    setUserReview({ author: "", rating: 0, comment: "" });
  };
  if (isLoading) {
    return <Loading />;
  }
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
                <strong>Individual Rating:</strong>{" "}
                <Rating
                  value={product?.individual_rating}
                  precision={0.5}
                  readOnly
                />
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Average Rating:</strong>{" "}
                <Rating
                  value={product?.average_rating}
                  precision={0.5}
                  readOnly
                />
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
      {/* Review Form */}
      <Box mt={4}>
        <Typography variant="h6" component="h2" gutterBottom>
          Add Your Review:
        </Typography>
        <TextField
          label="Author"
          variant="outlined"
          fullWidth
          name="author"
          value={userReview.author}
          onChange={handleReviewChange}
          margin="normal"
        />
        <TextField
          label="Rating"
          variant="outlined"
          fullWidth
          name="rating"
          type="number"
          value={userReview.rating}
          onChange={handleReviewChange}
          margin="normal"
        />
        <TextField
          label="Comment"
          variant="outlined"
          fullWidth
          name="comment"
          value={userReview.comment}
          onChange={handleReviewChange}
          margin="normal"
          multiline
          rows={4}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleReviewSubmit}
        >
          Submit Review
        </Button>
      </Box>
    </Box>
  );
};
export default CategoryProductDetails;
CategoryProductDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
// export async function getStaticPaths() {
//   const res = await fetch(`${process.env.API_URL}/api/categories`);
//   const products = await res.json();

//   const paths = products.map((post) => ({
//     params: { id: post.id.toString() },
//   }));

//   return { paths, fallback: true };
// }

// export const getStaticProps = async (context) => {
//   const id = context.params.id;
//   const res = await fetch(
//     `${process.env.API_URL}/api/category-product-details/${id}`
//   );
//   console.log(res, "Response data");
//   const data = await res.json();
//   return { props: { data } };
// };
