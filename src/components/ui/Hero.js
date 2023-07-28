import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";

const HeroSection = () => {
  return (
    <Box
      sx={{
        background:
          'url("https://images.pexels.com/photos/2330137/pexels-photo-2330137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', // Update with the actual image file name
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "calc(100vh - 64px)", // Adjust the height as needed (excluding the header height)
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "#fff",
      }}
    >
      <Typography variant="h2" component="h1" gutterBottom>
        Build Your PC
      </Typography>
      <Typography variant="h5" gutterBottom>
        Customize and create your dream PC!
      </Typography>

      <Link href={"/pc-builder"}>
        <Button variant="contained" color="primary" size="large">
          Get Started
        </Button>
      </Link>
    </Box>
  );
};

export default HeroSection;
