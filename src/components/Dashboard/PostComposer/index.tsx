import "./style.css";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import UseForm from "../../../utils/useForm";

const PostComposer = () => {
  const { onChange, state } = UseForm({
    body: "",
  });
  return (
    <div className="form-post">
      <textarea
        rows={5}
        maxLength={400}
        name="body"
        value={state.body}
        onChange={onChange}
        placeholder="create new post..."
      />
      <div className="action">
        <Button disabled={state.body.length <= 5} variant="contained">
          Submit
        </Button>
        <Typography>{state.body.length}/400</Typography>
      </div>
    </div>
  );
};

export default PostComposer;
