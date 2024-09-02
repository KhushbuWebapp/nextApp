"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import NavPage from "./components/NavPage";
import Sidebar from "./components/Sidebar";
import { Box } from "@mui/material";
import { useState } from "react";
import { metadata } from "./metadata";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [toggleval, settoggleval] = useState(false);
  return (
    <html lang="en">
      {/* <body className={inter.className}> */}
      <body className={inter.className}>
        <Box display={"flex"}>
          <Sidebar toggleval={toggleval} />

          <Box flexGrow={1}>
            <NavPage toggleval={toggleval} settoggleval={settoggleval} />
            {/* <Navbar /> */}
            {children}
          </Box>
        </Box>
        {/* <Navbar />
        {children} */}
      </body>
    </html>
  );
}
