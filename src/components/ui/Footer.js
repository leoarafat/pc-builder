import React from "react";
import { Typography, Grid, Link, IconButton } from "@mui/material"; // Updated import path for v5
import FacebookIcon from "@mui/icons-material/Facebook"; // Updated import path for v5
import TwitterIcon from "@mui/icons-material/Twitter"; // Updated import path for v5
import InstagramIcon from "@mui/icons-material/Instagram"; // Updated import path for v5
import Image from "next/image";

const footerStyle = {
  backgroundColor: "#3f51b5", // Replace with your desired color
  color: "#fff", // Replace with your desired color
  padding: "24px", // Replace with your desired padding value
};

const iconStyle = {
  marginRight: "8px", // Replace with your desired margin value
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <Grid container alignItems="center" justify="center" spacing={2}>
        <Grid item xs={12} sm={4} md={3}>
          <Typography variant="h6" style={{ marginBottom: "16px" }}>
            Build Your PC
          </Typography>
          <Typography variant="body2">
            Design and customize your dream PC configuration with us.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Typography variant="subtitle1">Follow us:</Typography>
          <IconButton
            component={Link}
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener"
            color="inherit"
            style={iconStyle}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            component={Link}
            href="https://www.twitter.com/"
            target="_blank"
            rel="noopener"
            color="inherit"
            style={iconStyle}
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            component={Link}
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener"
            color="inherit"
            style={iconStyle}
          >
            <InstagramIcon />
          </IconButton>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
