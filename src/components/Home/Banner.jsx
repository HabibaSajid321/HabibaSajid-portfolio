"use client";

import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Container from "@/components/shared/Container";
import { ReactTyped } from "react-typed";
import { workingStacks } from "@/constants";
import ThemeButton from "@/components/shared/ThemeButton";
import SocialLinks from "@/components/Home/SocialLinks";
const Banner = () => {
  return (
    <Box className="flex-center w-full">
      <Container>
        <Box className="flex-between w-full">
          <Box className="w-full lg:w-1/2 flex flex-col pt-10 lg:pt-0">
            <Typography
              variant="p"
              className="text-secondary text-[18px] lg:text-[30px] font-[300] "
            >
              Hello, I{"'"}m
            </Typography>
            <Typography
              variant="p"
              className="text-[36px] lg:text-[120px] leading-[45px] lg:leading-[107px] text-white font-bold"
            >
              Hamza Siddique
            </Typography>
            <Typography
              variant="p"
              className=" mt-3 text-secondary text-[24px] lg:text-[36px] mb-5 font-[300]"
            >
              <ReactTyped strings={workingStacks} typeSpeed={40} loop />{" "}
              <span className="text-[#a9adb8]"> Developer </span>
            </Typography>
            <ThemeButton text="Hire Me" />
            <SocialLinks />
          </Box>
          <Box className="w-1/2 hidden lg:flex-center relative">
            <Image
              src="/assets/images/main-image.png"
              width={400}
              height={400}
              className="w-[700px] h-auto"
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;
