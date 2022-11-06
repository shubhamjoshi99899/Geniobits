import {
  Box,
  Dialog,
  Theme,
  Typography,
  Button,
  Stack,
  Divider,
  Paper,
} from "@mui/material";
import { useContext, useState } from "react";
import CustomizedInputField from "./input-field";

interface Props {
  openConfigurationDialog: boolean;
  closeConfigurationDialog: any;
  anchors: any;
  investorUUID: any;
  callback?: any;
  editState?: any;
  editData?: any;
  handleClose?: any;
}

const DialogBox: React.FC<Props> = ({
  openConfigurationDialog,
  closeConfigurationDialog,
  anchors,
  investorUUID,
  editData,
  editState,
  callback,
  handleClose,
}) => {
  const [loading, setLoading] = useState<any>(false);

  return (
    <Dialog
      open={openConfigurationDialog}
      onClose={handleClose}
      sx={{
        borderRadius: "12px ",
        width: "1500px",
        position: "absolute",
      }}
    >
      <Stack
        sx={{
          borderBottom: "1px solid #e1e1e1",
          width: "100%",
        }}
        direction={"row"}
      >
        <Typography
          sx={{
            marginBottom: "20px",
            fontWeight: 600,
            fontSize: "1.375rem",
            lineHeight: "1.8125rem",
            letterSpacing: "-0.02rem",
            p: 2,
            mb: 2,
          }}
        >
          Add Tasks
        </Typography>
        <Divider sx={{ color: "#efefef" }} />
      </Stack>

      <form>
        <Stack direction="row" alignItems="baseline">
          <Box sx={{ borderRight: "1px solid #e1e1e1", padding: 3 }}>
            <CustomizedInputField
              sx={{ marginBottom: "20px", width: "180px" }}
              label="Task name"
              placeholder="Enter Task name"
            />
            <CustomizedInputField
              sx={{ marginBottom: "20px" }}
              label="Description*"
              placeholder="Enter Description"
              multiline={true}
              rows={5}
            />
          </Box>
          <Box sx={{ borderRight: "1px solid #e1e1e1", padding: 3 }}>
            <CustomizedInputField
              sx={{ marginBottom: "20px", width: "180px" }}
              label="Assign to*"
              placeholder="Enter name "
            />
          </Box>
          <Divider orientation="vertical" sx={{ m: 2 }} />
          <Box sx={{ m: 2 }}>
            <CustomizedInputField
              sx={{ marginBottom: "20px", width: "180px" }}
              label="Priority*"
              placeholder=""
            />
          </Box>
        </Stack>
        <Paper
          sx={{ position: "absolute", bottom: 0, left: 0, right: 0, p: 2 }}
          elevation={3}
        >
          <Button
            variant="contained"
            disabled={loading}
            type="submit"
            sx={{ width: "50%", height: "48px", borderRadius: "5px" }}
          >
            Add
          </Button>
          <Button
            variant="outlined"
            disabled={loading}
            type="submit"
            sx={{ width: "50%", height: "48px", borderRadius: "5px" }}
          >
            Cancel
          </Button>
        </Paper>
      </form>
    </Dialog>
  );
};

export default DialogBox;
