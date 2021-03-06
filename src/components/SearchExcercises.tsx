import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExcercises = ({ setExercises, bodyPart, setBodyPart }: any) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState<any[]>([]);

  useEffect(() => {
    const fetchExcercisesData = async () => {
      const bodyPartsData: string[] = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );

      setBodyParts(["all", ...bodyPartsData]);
    };
    fetchExcercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const excercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );

      const searchedExcercises = excercisesData.filter(
        (exercise: any) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );
      setSearch("");
      setExercises(searchedExcercises);
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
        color="#edeced"
      >
        Awesome Excercises You <br />
        Should Know
      </Typography>

      <Box position="relative" mb="72px">
        <TextField
          sx={{
            height: "100%",
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px",
              color: "white",
            },
            width: {
              lg: "800px",
              xs: "350px",
            },
            backgroundColor: "#24282e",
            borderRadius: "42px",
          }}
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
          placeholder="Search Excercises / Equipment / Target / Body Part"
          type="text"
        />

        <Button
          className="search-btn"
          sx={{
            bgcolor: "#adee96",
            color: "#FFF",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollbar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          isBodyParts={true}
        />
      </Box>
    </Stack>
  );
};

export default SearchExcercises;
