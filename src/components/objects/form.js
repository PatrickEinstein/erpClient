import { faker } from "@faker-js/faker";
import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { shades } from "../../theme";
import { setUser } from "../../redux/result_reducer";
import { useDispatch } from "react-redux";
import { UserCircle, Users, UsersThree } from "phosphor-react";
import {
  SupervisedUserCircleRounded,
  VerifiedUserRounded,
} from "@material-ui/icons";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const Forms = () => {
  const theme = useTheme();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [Products, setProducts] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handleSubmit = () => {
    if (
      !firstName ||
      !lastName ||
      !lastName ||
      !phone ||
      !Products ||
      !companyName
    ) {
      alert(" Kindly Tell me about you");
    } else {
      dispatch(
        setUser({ firstName, lastName, email, phone, companyName, Products })
      );
      navigate("/quiz");
    }

    return;
  };

  const {
    palette: { neutral },
  } = useTheme();
  return (
 
       
        <Stack spacing={3} position="relative"
        sx={{
         
        }}
        >
         
            <Box display="grid" gridTemplateColumns="repeat(10, 1fr)" gap={5} sx={{
              
            }}>
              <Box gridColumn="span 10">
                <TextField
                  label="First name"
                  id="outlined-size-small"
                  size="small"
                  type="text"
                  fullWidth
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  sx={{
                    backgroundColor: "white",
                  }}
                  required
                />
              </Box>
              <Box gridColumn="span 10">
                <TextField
                  required
                  label="Last name"
                  type="text"
                  id="outlined-size-small"
                  size="small"
                  fullWidth
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  sx={{
                    backgroundColor: "white",
                  }}
                />
              </Box>
              <Box gridColumn="span 10">
                <TextField
                  required
                  label="Phone"
                  type="number"
                  id="outlined-size-small"
                  size="small"
                  fullWidth
                  value={phone}
                  maxLength={15}
                  sx={{
                    backgroundColor: "white",
                  }}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value.length <= 15) {
                      setPhone(value);
                    }
                  }}
                />
              </Box>
              <Box gridColumn="span 10">
                <TextField
                  label="E-mail"
                  type="email"
                  id="outlined-size-small"
                  size="small"
                  fullWidth
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  sx={{
                    backgroundColor: "white",
                  }}
                />
              </Box>
              <Box gridColumn="span 10">
                <TextField
                  label="Company name"
                  type="text"
                  id="outlined-size-small"
                  multiline
                  maxRows={6}
                  size="small"
                  fullWidth
                  sx={{
                    backgroundColor: "white",
                  }}
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  required
                />
              </Box>
              <Box gridColumn="span 10">
                <TextField
                  label="Products"
                  type="text"
                  id="outlined-size-small"
                  multiline
                  maxRows={6}
                  size="small"
                  fullWidth
                  sx={{
                    backgroundColor: "white",
                  }}
                  value={Products}
                  onChange={(e) => setProducts(e.target.value)}
                  required
                />
              </Box>
            </Box>
     
          <Button
            variant="contained"
            color="info"
            style={{
              backgroundColor: "white",
              width: "50%",
              height: 40,
              position: "absolute",
              bottom: -60,
              right: "30%",
            }}
            onClick={handleSubmit}
          >
            <Typography
              // color={shades.primary[900]}
              color="InfoText"
              variant="h5"
              sx={{
                fontSize: "10px",
              }}
            >
              Start Test
            </Typography>
          </Button>
        </Stack>
   
  );
};
