import Box from '@mui/material/Box';
import React from 'react';

const Container = ({children}) => {
  return (
    <Box className="w-full px-5 lg:px-10 2xl:px-0 2xl:w-[1500px]">
      {children}
    </Box>
  );
};

export default Container;
