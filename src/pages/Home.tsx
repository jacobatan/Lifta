import React, { useState } from "react";
import { Box } from "@mui/material";
import Excercises from "../components/Excercises";
import HeroBanner from "../components/HeroBanner";
import SearchExcercises from "../components/SearchExcercises";

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExcercises />
      <Excercises />
    </Box>
  );
};

export default Home;
