import React from "react";
import { Typography, Box, Stack } from "@mui/material";
import Loader from "./Loader";
interface ExerciseVideosProps {
  exerciseVideos: any[];
  name: string;
}
const ExerciseVideos = ({ exerciseVideos, name }: ExerciseVideosProps) => {
  if (!exerciseVideos.length) return <Loader />;

  return (
    <Box sx={{ marginTop: { lg: "203px", xs: "20px" } }} p="20px">
      <Typography
        sx={{ fontSize: { lg: "44px", xs: "25px" } }}
        fontWeight={700}
        color="#edeced"
        mb="33px"
      >
        Watch{" "}
        <span style={{ color: "#adee96", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack
        sx={{ flexDirection: { lg: "row" }, gap: { lg: "110px", xs: "0px" } }}
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
      >
        {exerciseVideos?.slice(0, 6)?.map(
          (
            item: {
              video: {
                videoId: any;
                thumbnails: { url: string | undefined }[];
                title: string;
                channelName: string;
              };
            },
            index: React.Key | null | undefined
          ) => (
            <a
              key={index}
              className="exercise-video"
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              target="_blank"
              rel="noreferrer"
            >
              <img
                style={{ borderTopLeftRadius: "20px" }}
                src={item.video.thumbnails[0].url}
                alt={item.video.title}
              />
              <Box>
                <Typography
                  sx={{ fontSize: { lg: "28px", xs: "18px" } }}
                  fontWeight={600}
                  color="#edeced"
                >
                  {item.video.title}
                </Typography>
                <Typography fontSize="14px" color="#edeced">
                  {item.video.channelName}
                </Typography>
              </Box>
            </a>
          )
        )}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
