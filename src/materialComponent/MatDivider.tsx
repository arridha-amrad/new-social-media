import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";

const MatDivider = () => {
  return (
    <div>
      <Divider>
        <Chip
          sx={{
            fontWeight: "bold",
            fontSize: ".8rem",
          }}
          label="Or"
        />
      </Divider>
    </div>
  );
};

export default MatDivider;
