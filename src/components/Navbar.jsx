// TODO: answer here
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Flex, Box, Heading, Text, Link } from "@chakra-ui/react";
import "../styles/navbar.css";

const NavBar = () => {
  return (
    <Box as="nav">
      <Heading as="h1" data-testid="home-page">
        <Link
          as={RouterLink}
          to="/"
          data-testid="student-btn"
          fontSize="28px"
          color="#333"
          margin="0"
          display="flex"
          _hover={{ textDecoration: "none" }}
        >
          Student Portal
        </Link>
      </Heading>
      <Flex as="ul" listStyleType="none">
        <Text as="li">
          <Link
            as={RouterLink}
            to="/student"
            data-testid="student-page"
            _hover={{ textDecoration: "none" }}
            margin="0"
            display="flex"
          >
            All Student
          </Link>
        </Text>
        <Text as="li">
          <Link
            as={RouterLink}
            to="/add"
            data-testid="add-page"
            _hover={{ textDecoration: "none" }}
            margin="0"
            display="flex"
          >
            Add Student
          </Link>
        </Text>
      </Flex>
    </Box>
  );
};

export default NavBar;
