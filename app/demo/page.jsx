import { Avatar, Box, Grid, Typography } from "@mui/material";
import React from "react";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const DemoPage = () => {
  const data = [
    {
      name: "Customer 1",
    },
    {
      name: "Customer 2",
    },
    {
      name: "Customer 3",
    },
    {
      name: "Customer 4",
    },
  ];
  return (
    <>
      <Typography variant="h3">Lorem Lpsum</Typography>
      <Grid container>
        {data.map((item, idx) => (
          <Grid
            item
            xs={12}
            md={3}
            sm={12}
            key={idx}
            // sx={{
            //   margin: "1rem",
            // }}
            p={2}
            // border={"2px solid black"}
            // borderRadius={"10px"}
          >
            <Box className=" flex justify-between border p-5 rounded">
              <Box>
                <Typography variant="h5">
                  {item.name} <br />{" "}
                  <span className=" text-2xl">
                    <b>40</b>
                  </span>
                </Typography>
              </Box>
              <Box>
                <Avatar className=" bg-orange-300">
                  <AttachMoneyIcon className=" bg-orange-600 rounded" />
                </Avatar>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default DemoPage;
