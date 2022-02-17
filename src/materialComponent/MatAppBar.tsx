import React, { FC } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
interface Props {
  children: React.ReactElement;
}

const HideOnScroll: FC<Props> = ({ children }) => {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const MatAppBar = () => {
  return (
    <React.Fragment>
      <HideOnScroll>
        <AppBar>
          <Container maxWidth="lg">
            <Toolbar>
              <Typography sx={{ flex: 1 }} variant="h6" component="div">
                Scroll to Hide App Bar
              </Typography>
              <Box sx={{ display: "flex", gap: "1rem" }}>
                <IconButton>
                  <Badge badgeContent={4} color="error">
                    <NotificationsIcon sx={{ color: "#fff", fontSize: 30 }} />
                  </Badge>
                </IconButton>
                <Button variant="text" sx={{ color: "#fff" }}>
                  Logout
                </Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
};

export default MatAppBar;
