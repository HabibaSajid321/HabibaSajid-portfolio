import React from 'react';
import Box from '@mui/material/Box';
import Link from 'next/link';
import {FaFacebookF, FaInstagram, FaLinkedinIn} from 'react-icons/fa';
import {socialLinks} from '@/constants';

const socialList = Object.values(socialLinks);

const DisplayIcon = ({item}) => {
  if (item.value === socialLinks.linkedIn.value)
    return (
      <FaLinkedinIn className="text-[#a9adb8] text-[18px] lg:text-[28px] hover:text-secondary transition-all" />
    );
  else if (item.value === socialLinks.facebook.value)
    return (
      <FaFacebookF className="text-[#a9adb8] text-[18px] lg:text-[28px] hover:text-secondary transition-all" />
    );
  else
    return (
      <FaInstagram className="text-[#a9adb8] text-[18px] lg:text-[28px] hover:text-secondary transition-all" />
    );
};

const SocialLinks = () => {
  return (
    <Box className="flex flex-start mt-10 gap-8 bg-primary border-[1px] border-[#232935] w-fit px-3 py-3 rounded-full">
      {socialList.map((item) => {
        return (
          <Link key={item.value} href={item.url} target="_blank">
            <DisplayIcon item={item} />
          </Link>
        );
      })}
    </Box>
  );
};

export default SocialLinks;
