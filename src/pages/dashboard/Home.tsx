import "./dashboard.css";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import MatAppBar from "../../materialComponent/MatAppBar";
import { HomeProfile, Post, PostComposer } from "../../components";
import MatCarousel from "../../materialComponent/MatCarousel";

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ minHeight: "100vh" }}>
        <MatAppBar />
        <div className="home-user">
          <PostComposer />
          <div className="user-profile">
            <HomeProfile />
          </div>
        </div>
        <div className="home-posts">
          <Post />
          <Post />
          <Post />
        </div>
      </Box>
    </Container>
  );
};

export default Home;
