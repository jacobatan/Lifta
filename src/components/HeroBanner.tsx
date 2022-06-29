import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/baner.jpg";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#adee96" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
        color="#edeced"
      >
        Sweat, Smile <br /> and Repeat.
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4} color="#edeced">
        Check out the most effective excercises.
      </Typography>
      <Button
        variant="contained"
        color="error"
        href="#excercises"
        sx={{ backgroundColor: "#adee96", padding: "10px", color: "#020600" }}
      >
        Explore Excercises
      </Button>

      <Typography
        fontWeight={600}
        color="#adee96"
        sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
        fontSize="200px"
      >
        Excercise
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
