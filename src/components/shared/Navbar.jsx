'use client';

import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@/components/shared/Container';
import {navbarRoutes} from '@/constants';
import {FaBars, FaPhoneAlt} from 'react-icons/fa';
import Sidebar from '@/components/shared/Sidebar';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Box className="bg-primary h-16 lg:h-20 w-full flex-center sticky top-0 z-[999]">
        <Container>
          <Box className="flex-between w-full">
            <Typography
              variant="p"
              className="text-white text-[24px] lg:text-[28px] font-bold"
            >
              <span className="text-secondary">H</span>amza{' '}
              <span className="text-secondary">S</span>iddique
            </Typography>
            <Box className="lg:flex-end gap-10 hidden">
              <ul className="flex-end gap-8">
                {navbarRoutes.map((item) => (
                  <li
                    className="text-white hover:text-secondary transition-all cursor-pointer"
                    key={item.name}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
              <span className="text-white">|</span>
              <Box className="flex-start gap-3">
                <FaPhoneAlt color="white" />
                <Typography variant="p" className="text-secondary">
                  +92 311 7110211
                </Typography>
              </Box>
            </Box>
            <FaBars
              onClick={() => setOpen(true)}
              className="text-secondary text-[20px] lg:hidden block"
            />
          </Box>
        </Container>
      </Box>
      <Sidebar open={open} setOpen={setOpen} />
    </>
  );
};

export default Navbar;
