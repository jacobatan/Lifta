import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

import Logo from "../assets/images/LiftaLogo.png";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "122px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
      px="20px"
    >
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          style={{
            width: "48px",
            height: "48px",
            margin: "0 20px",
          }}
        />
      </Link>
      {/* <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <a
          href="#excercises"
          style={{
            textDecoration: "none",
            color: "#edeced",
            borderBottom: "3px solid #adee96",
          }}
        >
          Home
        </a>
        <a
          href="#excercises"
          style={{ textDecoration: "none", color: "#3A1212" }}
        >
          Excercses
        </a>
      </Stack> */}
    </Stack>
  );
};

export default Navbar;
