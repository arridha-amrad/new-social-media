import "./styles/dashboard.css"

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Collapse from "@mui/material/Collapse";
import { useRef, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "@mui/material/styles/styled";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Comment = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    ref.current?.focus();
    setExpanded(!expanded);
  };

  const ref = useRef<HTMLInputElement>(null);

  return (
    <div className="comment-container">
      <div className="header">
        <Avatar>US</Avatar>
        <div className="info">
          <Typography>Username</Typography>
          <Typography>Date</Typography>
        </div>
      </div>
      <div className="content">
        <Typography>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
          quis ullam ratione minus aut cumque eius eligendi! Harum, delectus
          porro!
        </Typography>
      </div>
      <div className="action">
        <IconButton>
          <FavoriteBorderIcon sx={{ fontSize: 20 }} />
        </IconButton>
        <Button
          disableRipple={true}
          sx={{ textTransform: "capitalize" }}
          variant="text"
          onClick={() => {
            handleExpandClick();
          }}
        >
          Reply
        </Button>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </div>
      <form className="comment-of-comment-form">
        <input ref={ref} placeholder="reply..." />
        <Button type="submit" variant="text">
          Send
        </Button>
      </form>
      <Collapse in={expanded} timeout="auto" unmountOnExit></Collapse>
    </div>
  );
};

export default Comment;
