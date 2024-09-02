import { Button, InputAdornment, TextField } from "@mui/material";
import React from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Image } from "@mui/icons-material";

const LoginPage = () => {
  return (
    <div>
     
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://img.freepik.com/premium-vector/young-businesswoman-working-laptop-cartoon-illustration_56104-525.jpg"
            />
            <div className="bg-white relative flex flex-wrap py-6 rounded">
              <div className="lg:w-full px-6 text-center">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-lg">
                  Connect with every application.
                </h2>
                <p className="mt-1">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
                  nostrum nisi nesciunt!
                </p>
              </div>
            </div>
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-start text-start">
            <div className=" flex justify-center items-center w-full mb-20">
              <img src="./unikwork.png" height={30} width={200} alt="" />
            </div>

            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Sing in
            </h1>
            <p className="mb-8 leading-relaxed">
              Please enter you login Details below
            </p>
            <div className="flex w-full md:justify-start justify-center items-end">
              <div className="relative mr-4 lg:w-full xl:w-full w-full">
                <label
                  htmlFor="hero-field"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email Address
                </label>
                <TextField
                  fullWidth
                  placeholder="Your email"
                  type="text"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MailOutlineIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <label
                  htmlFor="hero-field"
                  className="leading-7 text-sm text-gray-600"
                >
                  Password
                </label>
                <TextField
                  fullWidth
                  type="password"
                  placeholder="Enter password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <Button
                  variant="contained"
                  className=" mt-10"
                  type="submit"
                  fullWidth
                >
                  Continue
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
