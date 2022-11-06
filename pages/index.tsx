import { Box, Divider } from "@mui/material";
import axios from "axios";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import PersistentDrawerLeft from "../components/layout/sidebar";
import DialogBox from "../components/modal";
import ListingTable from "../components/table";
import TopBox from "../components/top-box";

const Home: NextPage = () => {
  const [users, setUsers] = useState<any | {}>([]);
  const [tasks, setTasks] = useState<any | {}>([]);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const openModal = () => {
    setOpen(true);
  };

  const getTableData = () => {
    axios
      .get("https://gorest.co.in/public/v2/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getData = () => {
    axios
      .get("https://gorest.co.in/public/v2/todos")
      .then((res) => {
        setTasks(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getTableData();
    getData();
  }, []);
  console.log(tasks);
  const headerRows = [
    {
      align: "left",
      name: "Tasks",
    },

    {
      align: "left",
      name: "Time",
    },
    {
      align: "left",
      name: "Date",
    },
    {
      align: "left",
      name: "Assigned by",
    },
    {
      align: "left",
      name: "Assigned to",
    },
    {
      align: "left",
      name: "Deadline",
    },
    {
      align: "left",
      name: "Status",
    },
    {
      align: "left",
      name: "Priority",
    },
  ];

  return (
    <>
      <Box>
        <TopBox onClick={openModal} />
        <ListingTable
          rows={users}
          headerRows={headerRows}
          tableHeading="Users Table"
          task={tasks}
        />
        <DialogBox openConfigurationDialog={open} handleClose={handleClose} />
      </Box>
    </>
  );
};

export default Home;
