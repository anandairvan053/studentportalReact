// TODO: answer here
import React from "react";
import { Link } from "react-router-dom";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import "../styles/home.css";

const Home = () => {
  return (
    <Box className="home-container">
      <Box className="home-content-a">
        <Heading as="h1" lineHeight="1.33em">
          Studi Independen Kampus Merdeka
        </Heading>
        <Text as="h5">By Ruang Guru</Text>
      </Box>
      <Box className="home-content-b">
        <Heading as="h3">Welcome to Student Portal</Heading>
        <Link to="/student">
          <Button data-testid="student-btn">All Student</Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Home;
