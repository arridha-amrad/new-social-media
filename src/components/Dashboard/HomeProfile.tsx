import "./styles/dashboard.css"

import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { useAppSelector } from "../../store/hooks";
import { selectUserState } from "../../store/User/userSlice";
import EmailIcon from "@mui/icons-material/EmailOutlined";

const HomeProfile = () => {
  const { user } = useAppSelector(selectUserState);
  return (
    <div className="user-profile__container">
      <Avatar
        src={user?.avatarURL}
        alt="avatar"
        sx={{ width: 70, height: 70 }}
      />
      <div className="info">
        <Typography>{user?.username}</Typography>
        <div className="email">
          <EmailIcon fontSize="small" />
          <Typography>{user?.email}</Typography>
        </div>
      </div>
    </div>
  );
};

export default HomeProfile;
