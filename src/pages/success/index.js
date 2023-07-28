import React from "react";
import dynamic from "next/dynamic";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Image from "next/image";
const RootLayout = dynamic(
  () => import("../../components/layouts/RootLayout"),
  {
    ssr: false,
  }
);

const styles = {
  root: {
    display: "flex",
    alignItems: "center",
    padding: "16px",
    backgroundColor: "#4caf50",
    color: "#fff",
    borderRadius: "4px",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
  },
  icon: {
    marginRight: "16px",
    fontSize: "2rem",
  },
  message: {
    fontSize: "1rem",
  },
  image: {
    height: "50px",
    marginLeft: "16px",
  },
};

const SuccessMessage = ({ message }) => {
  return (
    <Paper style={styles.root}>
      <CheckCircleIcon style={styles.icon} />
      <Typography variant="body1" style={styles.message}>
        Yee!! Your Order is Successful
      </Typography>

      <Image
        width={50}
        height={50}
        src="https://www.pngmart.com/files/20/Success-PNG-Transparent-Picture.png"
        alt="Success"
        style={styles.image}
      />
    </Paper>
  );
};

export default SuccessMessage;
SuccessMessage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
