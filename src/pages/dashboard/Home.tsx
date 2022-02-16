import { useAppSelector } from "../../store/hooks";
import { selectUserState } from "../../store/User/userSlice";

const Home = () => {
  const { user } = useAppSelector(selectUserState);
  return <h1>{user?.username}</h1>;
};

export default Home;
