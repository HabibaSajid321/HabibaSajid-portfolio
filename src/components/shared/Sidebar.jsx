import React from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import {navbarRoutes} from '@/constants';
import Typography from '@mui/material/Typography';
import {FaTimes} from 'react-icons/fa';

const Sidebar = ({open, setOpen}) => {
  return (
    <Drawer
      className="lg:hidden"
      open={open}
      anchor="right"
      onClose={() => setOpen(false)}
    >
      <Box className="bg-primary p-4 min-h-screen w-[300px] relative">
        <FaTimes
          className="text-white absolute top-3 text-sm right-3"
          onClick={() => setOpen(false)}
        />
        <Box>
          <Typography variant="p" className="text-white text-[20px] font-bold">
            <span className="text-secondary">H</span>amza{' '}
            <span className="text-secondary">S</span>iddique
          </Typography>
        </Box>
        <ul className="flex flex-col gap-5 mt-8">
          {navbarRoutes.map((item) => (
            <li
              className="text-white hover:text-secondary transition-all cursor-pointer"
              key={item.name}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
