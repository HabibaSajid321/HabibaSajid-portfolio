
import Box from '@mui/material/Box';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contacts';
import Achievements from '@/components/Achievement';
export default function Home() {
  return (
    <Box>
      
      <Header/>
      <Hero/>
      <Achievements/>
      <About/>
      <Education/>
      <Experience/>
      <Projects/>
      <Skills/>
      <Contact/>
   

     

    </Box>
  );
}
