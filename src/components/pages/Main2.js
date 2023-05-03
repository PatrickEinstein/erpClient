import { Box, Stack, Typography } from "@mui/material";
import React from "react";

import { useTheme } from "@mui/material";

import { useMediaQuery } from "@mui/material";
import { Forms } from "../objects/form";

export const Main2 = () => {
  const {
    palette: { neutral },
  } = useTheme();
  const isNonMobileScreen = useMediaQuery("(min-width:1000px)");

  return (
    <Stack
      sx={{
        height: 1000,
      }}
      p={isNonMobileScreen ? 0 : "5"}
      height={isNonMobileScreen ? 1000 : "auto"}
      direction="row"
      alignItem={isNonMobileScreen ? "" : "center"}
      justifyContent={isNonMobileScreen ? "space-around" : "space-around"}
    >
      <Box
        sx={{
          height: "100%",
          width: "50%",
        }}
        display={isNonMobileScreen ? "block" : "none"}
      >
        <img
          src={process.env.PUBLIC_URL + "/shipexp.jpeg"}
          alt="shipexp"
          border="0"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            // objectPosition: "center",
          }}
        />
      </Box>
      <Box
        sx={{
          height: "100%",
        }}
        margin={isNonMobileScreen ? "auto" : "auto"}
        width={isNonMobileScreen ? "40%" : "auto"}
      >
        <Stack
          sx={
            isNonMobileScreen
              ? {}
              : {
                  backgroundImage: `url(${process.env.PUBLIC_URL}/shipexp.jpeg)`,
                  filter: "brightness(100%)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  minHeight: "100vh",
                  height: "110%",
                  p: 5,

                  // ml: "5%",
                }
          }
          // backgroundImage={isNonMobileScreen ? "url(https://i.ibb.co/2dy1dGW/cargo.jpg)" : "none"}
        >
          <Typography
            color={isNonMobileScreen ? "blue" : "white"}
            variant="h3"
            align={isNonMobileScreen ? "center " : "left"}
            sx={{
              fontWeight: "bold",
              marginBottom: 5,
            }}
            pr={isNonMobileScreen ? 4 : "auto"}
            pl={isNonMobileScreen ? 4 : "auto"}
            fontSize={isNonMobileScreen ? "30px" : "40px"}
            marginTop={isNonMobileScreen ? "40px" : "0"}
          >
            Welcome To Export Readiness Assessment Test
          </Typography>
          <Typography
            fontWeight={isNonMobileScreen ? "" : "bold"}
            color={isNonMobileScreen ? "blue" : "maroon"}
            align={isNonMobileScreen ? "center " : "left"}
            sx={{
              marginBottom: 10,
            }}
          >
            This 15 sections in this assessment will show you the 15 ALARMING
            REASONS WHY YOUR EXPORT BUSINESS MIGHT FAIL.
          </Typography>
          <Typography
            fontWeight={isNonMobileScreen ? "" : "bold"}
            color={isNonMobileScreen ? "blue" : "maroon"}
            align={isNonMobileScreen ? "center " : "left"}
            sx={{
              marginBottom: 10,
            }}
          >
            Upon completion, you will get a report that will show you the areas
            of improvement you need to work on in your business before you start
            a sustainable and successful export business
          </Typography>
          <Forms />
        </Stack>
      </Box>
    </Stack>
  );
};
