import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { logoutAPI } from "../../API/user/userApi";
import { useAppDispatch } from "../../store/hooks";
import { unsetUser } from "../../store/User/userSlice";

const LogoutButton = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const handleLogout = async () => {
    await logoutAPI()
    dispatch(unsetUser())
    navigate("/login")
  }

  return (
    <Button onClick={handleLogout} variant="text" sx={{ color: "#fff" }}>
      Logout
    </Button>
  )
}

export default LogoutButton;