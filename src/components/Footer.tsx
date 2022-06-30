import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/LiftaLogo.png";

const Footer = () => (
  <Box mt="80px" bgcolor="#1d2025">
    <Stack
      gap="40px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="40px"
      py="40px"
    >
      {/* <img src={Logo} alt="logo" style={{ width: "200px", height: "41px" }} /> */}
      <Typography variant="h3" sx={{ color: "white" }}>
        Lifta
      </Typography>
    </Stack>
  </Box>
);

export default Footer;
