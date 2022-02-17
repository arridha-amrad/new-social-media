import "./dashboard.css";

import { useAppSelector } from "../../store/hooks";
import { selectUserState } from "../../store/User/userSlice";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import MatAppBar from "../../materialComponent/MatAppBar";
import UseForm from "../../utils/useForm";
import { HomeProfile, Post, PostComposer } from "../../components";

const Home = () => {
  const { user } = useAppSelector(selectUserState);
  const { onChange, state } = UseForm({
    body: "",
  });
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
