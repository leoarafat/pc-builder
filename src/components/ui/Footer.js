import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          background: "#000",
          color: "#fff",
          padding: "20px",
          textAlign: "center",
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
        }}
      >
        <Typography variant="body1">
          Build Your PC &copy; {new Date().getFullYear()}
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
