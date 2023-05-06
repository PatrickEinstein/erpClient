import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useState } from "react";
import { Box, Divider, Stack, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { useTheme } from "@mui/material/styles";
import {
  setCat1,
  setCat2,
  setCat3,
  setCat4,
  setCat5,
  setCat6,
  setCat7,
  setCat8,
  setCat9,
  setCat10,
  setCat11,
  setCat12,
  setCat13,
  setCat14,
  setCat15,
  setChecker,
} from "../../redux/result_reducer";
import { useEffect } from "react";
import { setTotalResult } from "../../redux/result_reducer";
import { useMediaQuery } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

export const averageSum = (sum) => sum / 5;

export const Sections = ({ Q1, Q2, Q3, Q4, Q5, C }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useTheme();
  const [value1, setValue1] = React.useState("");
  const [value2, setValue2] = React.useState("");
  const [value3, setValue3] = React.useState("");
  const [value4, setValue4] = React.useState("");
  const [value5, setValue5] = React.useState("");
  const isNonMediaScreens = useMediaQuery("(min-width:900)");

  const handleChange1 = (event) => {
    setValue1(event.target.value);
  };
  const handleChange2 = (event) => {
    setValue2(event.target.value);
  };
  const handleChange3 = (event) => {
    setValue3(event.target.value);
  };
  const handleChange4 = (event) => {
    setValue4(event.target.value);
  };
  const handleChange5 = (event) => {
    setValue5(event.target.value);
  };

  const result = [+value1, +value2, +value3, +value4, +value5];

  const sum = result.reduce(function (total, amount) {
    return total + amount;
  });

  console.log(`total sum of category ${C} is ${sum}`);

  const averagesum = averageSum(sum);
  dispatch(setChecker(averagesum));
  console.log(`average sum of category ${C} is ${averagesum}`);

  const dispatchers = () => {
    switch (C) {
      case 2:
        return dispatch(setCat1(averagesum));
        break;
      case 3:
        return dispatch(setCat2(averagesum));
        break;
      case 4:
        return dispatch(setCat3(averagesum));
        break;
      case 5:
        return dispatch(setCat4(averagesum));
        break;
      case 6:
        return dispatch(setCat5(averagesum));
        break;
      case 7:
        return dispatch(setCat6(averagesum));
        break;
      case 8:
        return dispatch(setCat7(averagesum));
        break;
      case 9:
        return dispatch(setCat8(averagesum));
        break;
      case 10:
        return dispatch(setCat9(averagesum));
        break;
      case 11:
        return dispatch(setCat10(averagesum));
        break;
      case 12:
        return dispatch(setCat11(averagesum));
        break;
      case 13:
        return dispatch(setCat12(averagesum));
        break;

      case 14:
        return dispatch(setCat13(averagesum));
        break;
      case 15:
        return dispatch(setCat14(averagesum));
        break;
      case 16:
        return dispatch(setCat15(averagesum)), navigate("/success");
        break;
    }
  };

  useEffect(() => {
    dispatchers();

    setValue1("");
    setValue2("");
    setValue3("");
    setValue4("");
    setValue5("");
  }, [C]);

  return (
    <Stack
      spacing={5}
      backgroundColor="white"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        height: "auto",
        opacity: 0.8,
      }}
    >
      <ol>
        <li>
          {" "}
          <Typography
            variant="h4"
            sx={{
              fontSize: "15px",
              fontWeight: "bold",
              color: "blue",
              marginBottom: 3,
            }}
          >
            {Q1}
          </Typography>{" "}
        </li>

        <FormControl
          sx={{
            marginBottom: 10,
          }}
        >
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            value={value1}
            onChange={handleChange1}
          >
            <Stack
              spacing={3}
              alignItems="flex-start"
              justifyContent="flex-start"
            >
              <FormControlLabel
                value={5}
                control={<Radio />}
                label="Very high"
                sx={{
                  fontSize: 5,
                  marginLeft:0
                }}
              />
              <FormControlLabel value={4} control={<Radio />} label="High" />
              <FormControlLabel value={3} control={<Radio />} label="Average" />
              <FormControlLabel value={2} control={<Radio />} label="Low" />
              <FormControlLabel
                value={1}
                control={<Radio />}
                label="Very Low"
              />
            </Stack>
          </RadioGroup>
        </FormControl>
        <Divider />

        <li>
          {" "}
          <Typography
            variant="h4"
            sx={{
              fontSize: "15px",
              fontWeight: "bold",
              color: "blue",
              marginBottom: 3,
            }}
          >
            {Q2}
          </Typography>
        </li>

        <FormControl
          sx={{
            marginBottom: 10,
            alignItems: "center",
          }}
        >
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            value={value2}
            onChange={handleChange2}
          >
            <Stack spacing={3}>
              <FormControlLabel
                value={5}
                control={<Radio />}
                label="Very high"
                sx={{ marginLeft: 0 }}
              />
              <FormControlLabel value={4} control={<Radio />} label="High" />
              <FormControlLabel value={3} control={<Radio />} label="Average" />
              <FormControlLabel value={2} control={<Radio />} label="Low" />
              <FormControlLabel
                value={1}
                control={<Radio />}
                label="Very Low"
              />
            </Stack>
          </RadioGroup>
        </FormControl>
        <Divider />
        <li>
          {" "}
          <Typography
            variant="h4"
            sx={{
              fontSize: "15px",
              fontWeight: "bold",
              color: "blue",
              marginBottom: 3,
            }}
          >
            {Q3}
          </Typography>
        </li>
        <FormControl
          sx={{
            marginBottom: 10,
          }}
        >
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            value={value3}
            onChange={handleChange3}
          >
            <Stack spacing={3}>
              <FormControlLabel
                value={5}
                control={<Radio />}
                label="Very high"
                sx={{ marginLeft: 0 }}
              />
              <FormControlLabel value={4} control={<Radio />} label="High" />
              <FormControlLabel value={3} control={<Radio />} label="Average" />
              <FormControlLabel value={2} control={<Radio />} label="Low" />
              <FormControlLabel
                value={1}
                control={<Radio />}
                label="Very Low"
              />
            </Stack>
          </RadioGroup>
        </FormControl>
        <Divider />
        <li>
          {" "}
          <Typography
            variant="h4"
            sx={{
              fontSize: "15px",
              fontWeight: "bold",
              color: "blue",
              marginBottom: 3,
            }}
          >
            {" "}
            {Q4}
          </Typography>
        </li>
        <FormControl
          sx={{
            marginBottom: 10,
          }}
        >
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            value={value4}
            onChange={handleChange4}
          >
            <Stack spacing={3}>
              <FormControlLabel
                value={5}
                control={<Radio />}
                label="Very high"
                sx={{ marginLeft: 0 }}
              />
              <FormControlLabel value={4} control={<Radio />} label="High" />
              <FormControlLabel value={3} control={<Radio />} label="Average" />
              <FormControlLabel value={2} control={<Radio />} label="Low" />
              <FormControlLabel
                value={1}
                control={<Radio />}
                label="Very Low"
              />
            </Stack>
          </RadioGroup>
        </FormControl>
        <Divider />
        <li>
          {" "}
          <Typography
            variant="h4"
            sx={{
              fontSize: "15px",
              fontWeight: "bold",
              color: "blue",
              marginBottom: 3,
            }}
          >
            {Q5}
          </Typography>
        </li>
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            value={value5}
            onChange={handleChange5}
          >
            <Stack spacing={3}>
              <FormControlLabel
                value={5}
                control={<Radio />}
                label="Very high"
                sx={{ marginLeft: 0 }}
              />
              <FormControlLabel value={4} control={<Radio />} label="High" />
              <FormControlLabel value={3} control={<Radio />} label="Average" />
              <FormControlLabel value={2} control={<Radio />} label="Low" />
              <FormControlLabel
                value={1}
                control={<Radio />}
                label="Very Low"
              />
            </Stack>
          </RadioGroup>
        </FormControl>
        <Divider />
      </ol>
    </Stack>
  );
};
