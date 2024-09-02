import { Box, Container } from "@mui/material";
import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Link from "next/link";
const BlogPost = () => {
  return (
    <Container>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <Link href={`/blogpost/1`}>
          <ListItem alignItems="flex-start" className=" cursor-pointer">
            <ListItemAvatar>
              <Avatar>
                <CheckCircleIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="   Blog - 1 "
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Blog 1 infomation
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </Link>

        <Divider variant="inset" component="li" />
        <Link href={`/blogpost/10`}>
          <ListItem alignItems="flex-start" className=" cursor-pointer">
            <ListItemAvatar>
              <Avatar>
                <CheckCircleIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="   Blog - 2"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Blog 2 infomation
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </Link>

        <Divider variant="inset" component="li" />
        <Link href={`/blogpost/20`}>
          <ListItem alignItems="flex-start" className=" cursor-pointer">
            <ListItemAvatar>
              <Avatar>
                <CheckCircleIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="   Blog - 3"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Blog 3 infomation
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </Link>
      </List>
    </Container>
  );
};

export default BlogPost;
