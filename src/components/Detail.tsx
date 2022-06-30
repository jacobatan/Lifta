import React from "react";
import { Typography, Stack, Button } from "@mui/material";

import BodyPartImage from "../assets/icons/humanoid(1).png";
import TargetImage from "../assets/icons/target(1).png";
import EquipmentImage from "../assets/icons/pilates(1).png";

const Detail = ({ exerciseDetail }: any) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    { icon: BodyPartImage, name: bodyPart, text: "Targets" },
    { icon: TargetImage, name: target, text: "Targets" },
    { icon: EquipmentImage, name: equipment, text: "Equipment" },
  ];

  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography
          variant="h3"
          sx={{ textTransform: "capitalize", color: "#edeced" }}
        >
          {name}
        </Typography>
        <Typography
          variant="h6"
          sx={{ textTransform: "capitalize", color: "#edeced" }}
        >
          {name} is a great way to target your {target}! Try it out!
        </Typography>
        {extraDetail.map((item) => (
          <Stack key={item.name} gap="24px" sx={{ alignItems: "center" }}>
            <Button
              sx={{
                background: "#102a43",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
                color: "#edeced",
              }}
            >
              <img
                src={item.icon}
                alt={item.name}
                loading="lazy"
                style={{ width: "50px", height: "50px" }}
              />
            </Button>
            <Typography
              variant="h6"
              sx={{ textTransform: "capitalize", color: "#edeced" }}
            >
              {item.text}: {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
