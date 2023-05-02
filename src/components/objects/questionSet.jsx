import React, { useState } from "react";
import { allQuestions } from "./questions";
import { Sections } from "../pages/section";
import { Heading } from "./questionsHeading";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setCat15 } from "../../redux/result_reducer";
import { useNavigate } from "react-router-dom";
import Pagination from "react-mui-pagination";
import { useMediaQuery } from "@material-ui/core";
import { shades } from "../../theme";
import { useEffect } from "react";
import { useTheme } from "@mui/material";
import { Opacity } from "@material-ui/icons";
export const Categories = () => {
  const isChecked = useSelector((state) => state.result.buttonChecker);
  const [disable, setDisable] = useState();

  const Checker = () => {
    try {
      if (isChecked < 1) {
        setDisable(true);
      } else setDisable(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    Checker();
  });

  const {
    palette: { neutral },
  } = useTheme();
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isNonMediaScreens = useMediaQuery("(min-width:900)");
  const [count, setCount] = React.useState(0);

  const question = allQuestions[count];
  const { Q1, Q2, Q3, Q4, Q5 } = question;
  const header = Heading[count];
  const { H } = header;
  const C = count + 1;

  const handleSubmit = () => (dispatch(setCat15(5)), navigate("/success"));

  const handleChange = (event, value) => {
    setCount(value - 1);
  };

  const onPrevious = () => {
    setCount((count) => count - 1);
  };

  const onNext = () => {
    setCount((count) => count + 1);
  };

  return (
    <Stack
      spacing={3}
      backgroundColor="aqua"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/cargo.jpeg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        height: "auto",
        p: 3,
      }}
    >
      <Stack
        justifyContent="space-between"
        alignItems="center"
        sx={{
          backgroundColor: "white",
          height: "auto",
          opacity: 0.8,
          margin: "auto",
        }}
      >
        {" "}
        {isChecked > 1 ? (
          <Pagination
            page={count + 1}
            setPage={handleChange}
            total={150}
            numOfLinks={isNonMediaScreens ? 10 : 2}
            hideFirstLast
          />
        ) : null}
        <Button
          variant="contained"
          color="info"
          style={{
            backgroundColor: "white",
            marginBottom: "20px",
            ml: "40%",
            height: 30,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontSize: "25px",
            }}
            color={shades.neutral[900]}
          >
            {`category ${C}`}
          </Typography>
        </Button>
        <Box
          sx={{
            width: "70%",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              marginBottom: "20px",
              fontweight: "bold",
            }}
            color="maroon"
            fontWeight={"bold"}
            align="center"
            fontSize={isNonMediaScreens ? "30px" : "20px"}
          >
            {H}
          </Typography>
        </Box>
        <Sections Q1={Q1} Q2={Q2} Q3={Q3} Q4={Q4} Q5={Q5} C={C} />
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={10}
        >
          {count < 1 ? (
            <Button
              variant="contained"
              color="info"
              style={{
                backgroundColor: "white",
                height: 25,
                ml: "40%",
              }}
            >
              <Typography
                variant="subtitle2"
                sx={{
                  fontSize: "10px",
                }}
                color={theme.palette.primary.main}
              >
                Previous
              </Typography>
            </Button>
          ) : (
            <IconButton onClick={onPrevious}>
              <Button
                variant="contained"
                color="info"
                style={{
                  backgroundColor: "white",
                  height: 25,
                  ml: "40%",
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontSize: "10px",
                  }}
                  color={theme.palette.primary.main}
                >
                  Previous
                </Typography>
              </Button>
            </IconButton>
          )}

          {count < 15 ? (
            <IconButton onClick={onNext} disabled={disable}>
              <Button
                variant="contained"
                color="info"
                style={
                  disable
                    ? {
                        backgroundColor: "red",
                        height: 25,
                        ml: "40%",
                      }
                    : { backgroundColor: "blue", height: 25, ml: "40%" }
                }
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontSize: "10px",
                    color: "white",
                  }}
                  // color={theme.palette.primary.main}
                >
                  {disable ? " " : "Next"}
                </Typography>
              </Button>
            </IconButton>
          ) : (
            <IconButton onClick={handleSubmit} disabled={disable}>
              <Button
                variant="contained"
                color="info"
                style={{
                  backgroundColor: "red",
                  height: 25,
                  ml: "40%",
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontSize: "10px",
                    color: "white",
                  }}
                >
                  Submit
                </Typography>
              </Button>
            </IconButton>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

// (() => {
//     switch (count) {
//         case 0 < count <= 13:
//             return (
//                 <IconButton onClick={() =>setCount((count) => count + 1)} >
//                     <Button>Next</Button>
//                 </IconButton>
//             )
//             break;
//         case 14:
//             return (
//                 <IconButton >
//                     <Button>Submit</Button>
//                 </IconButton>
//             )
//             break;

//     }
// })()
