import { Box, NoSsr } from "@mui/material";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import Sidebar from "./sidebar";

const Layout = (props: any) => {
  const router = useRouter();

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        background: "#caf0f8",
      }}
    >
      <Sidebar />
      <Box
        component="main"
        sx={{ flexGrow: 1, my: 10, mx: 2, background: "#caf0f8" }}
      >
        {props.children}
      </Box>
    </Box>
  );
};

export default Layout;
