import React from "react";
import styled from "../About.module.css";
import style from "../Home.module.css";
import { Typography } from "@mui/material";
const Home = () => {
  // return <div className={` container mx-auto ${style.con}`}>Home page...</div>;
  return (
    <div className="container">
      <Typography variant="h4">Home page...</Typography>

      <hr />
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, delectus
        eaque rem deserunt accusantium molestiae, labore reprehenderit nihil
        ratione, iure ex magni cum! Quas delectus voluptatibus excepturi maxime
        perspiciatis, voluptatum veniam quis dolorem officiis eveniet saepe
        mollitia corrupti voluptate quam ad id doloribus. Quo et cupiditate rem
        vero error corrupti doloribus, laudantium distinctio, cum laboriosam
        dolores quisquam. Commodi, quia nisi aperiam iure eaque asperiores,
        accusantium ut eius delectus libero minima dignissimos itaque doloremque
        beatae numquam perferendis sint repellendus quisquam laborum. Impedit
        eaque tempore nesciunt ut repellat non doloremque veritatis quibusdam
        tempora architecto! Inventore, possimus voluptates amet eveniet corporis
        magnam eaque.
      </p>
    </div>
  );
};

export default Home;
