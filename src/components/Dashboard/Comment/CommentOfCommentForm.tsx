import Button from "@mui/material/Button";
import { FC, MutableRefObject } from "react";
import "./style.css";

interface Props {
  ref: MutableRefObject<HTMLInputElement | null>;
}

const CommentOfCommentForm: FC<Props> = ({ ref }) => {
  return (
    <form className="comment-of-comment-form">
      <input type="text" placeholder="reply..." ref={ref} />
      <Button type="submit" variant="text">
        Send
      </Button>
    </form>
  );
};

export default CommentOfCommentForm;
