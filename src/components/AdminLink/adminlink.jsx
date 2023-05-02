import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { useNavigate } from "react-router-dom";
import { Stack } from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const GoToAdmin = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const goToAdmin = () => {
    window.open("https://admin-one-psi.vercel.app/", "_blank");
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Stack justifyContent='center' alignItems= 'center'sx={{
        height:500,
    }}>
      <Button variant="outlined" onClick={handleClickOpen}
      sx={{
        backgroundColor:"blueviolet",
        color:"white",
        width:"auto",
        height:50,
        borderRadius:10,
        fontSize:20,
      }}
      >
        Ready To Go To Admin DashBoard?
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"GO TO ADMIN DASH BOARD"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            You are about to visit the Export Readiness Admin Dashboard,
            Beware that this may contain sensitive information
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={goToAdmin}>GO</Button>
          <Button onClick={handleClose}>BACK</Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
};
