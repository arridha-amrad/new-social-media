import "./style.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const CommentForm = () => {
  return (
    <form className="form-comment">
      <TextField label="comment" variant="standard" fullWidth />
      <div>
        <Button size="small" variant="contained">
          Send
        </Button>
      </div>
    </form>
  );
};

export default CommentForm;
