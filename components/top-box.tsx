import { Box, Divider, Typography, Stack, IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import React from "react";
import AddIcon from "@mui/icons-material/Add";

interface Props {
  onClick?: any;
}

const TopBox: React.FC<Props> = ({ onClick }) => {
  return (
    <Stack
      direction="row"
      justifyContent={"space-between"}
      spacing={2}
      sx={{ mb: 5 }}
    >
      <Box
        flexGrow={1}
        sx={{ background: "#fff", borderRadius: "12px", p: 2, px: 4 }}
      >
        <Stack
          flexGrow={1}
          direction="row"
          spacing={3}
          justifyContent="space-between"
        >
          <Typography fontWeight={700} mb={2}>
            Tasks
          </Typography>
          <Stack direction="row">
            <IconButton>
              <ChevronLeftIcon />
            </IconButton>
            <Stack direction="row" spacing={1} alignItems="center">
              <CalendarMonthIcon />
              <Typography sx={{ color: "#111" }} fontWeight={700} mb={2}>
                9 December, 2022
              </Typography>
              <IconButton>
                <ChevronRightIcon />
              </IconButton>
            </Stack>
          </Stack>
        </Stack>
        <Divider sx={{ mb: 3 }} />

        <Stack direction="row" spacing={3}>
          <Box
            sx={{
              background: "#fca510",
              maxWidth: "200px",
              width: "100%",
              p: 2,
              borderRadius: "12px",
              color: "#fff",
            }}
          >
            <Typography variant="body1" fontWeight={700}>
              66 <br /> Ongoing
            </Typography>
          </Box>
          <Box
            sx={{
              background: "#ff8ba0",
              maxWidth: "200px",
              width: "100%",
              p: 2,
              borderRadius: "12px",
              color: "#fff",
            }}
          >
            <Typography variant="body1" fontWeight={700}>
              24 <br /> Delayed
            </Typography>
          </Box>
          <Box
            sx={{
              background: "lightGreen",
              maxWidth: "200px",
              width: "100%",
              p: 2,
              borderRadius: "12px",
              color: "#fff",
            }}
          >
            <Typography variant="body1" fontWeight={700}>
              10 <br /> Completed
            </Typography>
          </Box>
          <Box
            sx={{
              background: "blue",
              maxWidth: "200px",
              width: "100%",
              p: 2,
              borderRadius: "12px",
              color: "#fff",
            }}
          >
            <Typography variant="body1" fontWeight={700}>
              100
              <br /> Total Assigned
            </Typography>
          </Box>
        </Stack>
      </Box>
      <Stack
        direction="row"
        sx={{
          backgroundColor: "#fc6a03",
          p: 2,
          maxHeight: "50px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
        onClick={onClick}
      >
        <AddIcon sx={{ color: "#fff" }} />
        <Typography fontWeight={700} sx={{ color: "#fff" }}>
          Add new Task
        </Typography>
      </Stack>
    </Stack>
  );
};

export default TopBox;
