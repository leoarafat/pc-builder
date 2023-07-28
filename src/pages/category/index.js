import React from "react";
import {
  Box,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  Grid,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";

const ProductCategory = ({ category }) => {
  // const cardWidth = 450;
  const cardHeight = 350;
  return (
    <Box
      style={{
        marginBottom: "4rem",
        padding: "4rem",
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Our Product Categories
      </Typography>
      <Grid container spacing={3} mt={4}>
        {category?.category?.map((c) => (
          <Grid item key={c.id} xs={12} sm={6} md={4} lg={3}>
            <Link
              href={`/category/${c._id}`}
              style={{ textDecoration: "none" }}
            >
              <Card
                className="Card-root"
                style={{
                  // maxWidth: cardWidth,
                  width: "100%",
                  height: cardHeight,
                }}
              >
                <CardActionArea>
                  <Image
                    width={300}
                    height={280}
                    src={c.image}
                    alt={c.categories_name}
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
                      {c.categories_name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductCategory;
