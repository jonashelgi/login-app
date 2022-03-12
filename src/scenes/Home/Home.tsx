import { Box } from "@chakra-ui/react";
import React from "react";

import { Waves, Header } from "../../components";
import { color } from "../../utils";
import { Greeting, Projects, Courses, Work } from "./components";

const Home = () => {
  return (
    <Box bg={color.second}>
      <Header />
      <Box bg={color.second}>
        <Greeting />
      </Box>
      <Waves Type="top" />
      <Box bg={color.main} id="Projects">
        <Projects />
      </Box>
      <Waves Type="bottom" />
      <Box bg={color.second} id="Courses">
        <Courses />
      </Box>
      <Waves Type="top" />
      <Box bg={color.main} id="Work">
        <Work />
      </Box>
    </Box>
  );
};

export default Home;
