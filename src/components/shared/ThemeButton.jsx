import Button from '@mui/material/Button';
import React from 'react';

const ThemeButton = ({text, style}) => {
  return (
    <Button
      className={` w-[130px] h-9 lg:w-[170px] lg:h-12 text-primary font-[300] ${style} bg-secondary rounded-[50px] hover:bg-secondary capitalize hover:shadow-md hover:shadow-secondary`}
    >
      {text}
    </Button>
  );
};

export default ThemeButton;
