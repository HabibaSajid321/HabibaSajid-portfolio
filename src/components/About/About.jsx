"use client";
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Image from "next/image";
import { personalInfo } from "@/constants";
import ThemeButton from "@/components/shared/ThemeButton";
import { workingStacks } from "@/constants";
import { ReactTyped } from "react-typed";

const About = () => {
  return (
    <Box className=" text-white pt-24 flex-center w-full">
      <Container>
        <Box className="relative  text-yellow-400">
          <Box
            component="div"
            className="absolute inset-0 flex items-center justify-center text-center text-gray-800 opacity-25 text-5xl lg:text-7xl font-bold"
          >
            ABOUT ME
          </Box>

          <Box
            component="div"
            className="relative z-10 flex flex-center text-center flex-col pb-4"
          >
            <h2 className="text-2xl ">About Me</h2>
            <Box className="pt-1 flex content-center justify-center">
              <hr className="w-28 bg-yellow-400 border-0 lg-h-[2px] h-[1px]" />
            </Box>
          </Box>
        </Box>
        <Box>
          <Box className="flex flex-col lg:flex-row items-center">
            <Box className=" lg:w-1/2 w-full  flex-center relative">
              <Image
                src="/assets/images/hamzabg.png"
                width={400}
                height={400}
                className="w-[700px] h-auto"
              />
            </Box>

            <Box className="lg:w-1/2 w-full p-4 m-5">
              <Typography variant="h4" className="text-white mb-4">
                Hi There! I'm Hamza Siddique
              </Typography>

              <Box className="flex flex-col">
                <Typography
                  variant="p"
                  className=" text-secondary text-[18px] lg:text-[24px] mb-5 font-[300]"
                >
                  <ReactTyped strings={workingStacks} typeSpeed={40} loop />{" "}
                  <span className="text-[#a9adb8]"> Developer </span>
                </Typography>

                <Typography
                  variant="p"
                  className="mb-4 text-sm  text-gray-400 "
                >
                  I'm Hamza Siddique, a Full Stack Developer specializing in
                  MERN Stack. Since 2018, I've honed my skills in technology and
                  problem-solving. I collaborate with talented teams to create
                  innovative solutions, driven by a passion for excellence and
                  staying ahead in the tech landscape.
                </Typography>
              </Box>

              <Box className="flex flex-col space-y-4 text-gray-400 text-sm">
                {Object.entries(personalInfo).map(([key, info]) => (
                  <Box key={key} className="flex">
                    <Typography variant="body1" className="w-32">
                      {info.label}
                    </Typography>
                    <Typography variant="body1" className="pl-4">
                      {Array.isArray(info.value)
                        ? info.value.join(", ")
                        : info.value}
                    </Typography>
                  </Box>
                ))}
              </Box>
              <Box className="pt-4">
                <ThemeButton text="Download CV" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
