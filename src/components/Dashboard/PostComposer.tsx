import "./styles/dashboard.css"

import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import UseForm from "../../utils/useForm";
import FileIcon from "@mui/icons-material/AttachFile"
import { useRef, useState } from "react";

const PostComposer = () => {
  const { onChange, state } = UseForm({
    body: "",
  });
  const [file, setFile] = useState<any>()
  const ref = useRef<HTMLInputElement>(null)
  const formData = new FormData()
  formData.append(
    "images",
    file
  )
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
        <div className="attach_file">
          <input
            onChange={(e) => setFile(e.target.files)} name="images"
            type="file"
            hidden
            ref={ref}
          />
          <Tooltip title="Add Image">
            <IconButton onClick={() => ref.current?.click()}>
              <FileIcon sx={{ color: "blue" }} />
            </IconButton>
          </Tooltip>
        </div>
        <Button
          onClick={() => console.log("files : ", file)}
          disabled={state.body.length <= 5}
          variant="contained"
        >
          Submit
        </Button>
        <Typography>{state.body.length}/400</Typography>
      </div>
    </div>
  );
};

export default PostComposer;
