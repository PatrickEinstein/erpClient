import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Document } from "react-pdf";
import { useState } from "react";
import { faker } from "@faker-js/faker";
import { Box, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ProfileCard({
  file,
  firstName,
  lastName,
  email,
  companyName,
  Products,
  phone,
}) {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            Ex
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        Company
        Name={companyName}
        subheader="September 14, 2016"
      />

      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            fontWeight: "bold",
            fontsize: 20,
          }}
        >
          {firstName} {lastName}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton> */}
        {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Stack spacing={"3"}>
          <Typography
            sx={{
              fontWeight: "bold",
              paddingLeft: 2,
              fontsize: 14,
            }}
          >
            {firstName} {lastName}
          </Typography>
          <Typography
            sx={{
              fontWeight: "bold",
              paddingLeft: 2,
              fontsize: 14,
            }}
          >
            {companyName}
          </Typography>
          <Typography
            sx={{
              fontWeight: "bold",
              paddingLeft: 2,
              fontsize: 14,
            }}
          >
            {phone}
          </Typography>
          <Typography
            sx={{
              fontWeight: "bold",
              paddingLeft: 2,
              fontsize: 14,
            }}
          >
            {Products}
          </Typography>
          <Typography
            sx={{
              fontWeight: "bold",
              paddingLeft: 2,
              fontsize: 14,
            }}
          >
            {email}
          </Typography>
          <Box
            sx={{
              backgroundColor: "aqua",
              height: 300,
              width: "100%",
            }}
          >
            {/* <PdfViewer2 pdfData={file}/> */}
          </Box>
          <Button
            variant="outlined"
            sx={{
              backgroundColor: "blue",
            }}
            onClick={() => navigate("/admin/profile")}
          >
            <Typography
              sx={{
                color: "white",
              }}
            >
              View Full Doc
            </Typography>
          </Button>
        </Stack>
      </Collapse>
    </Card>
  );
}
