// TODO: answer here
import React from "react";
import { Button, Box, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import "../styles/notFound.css";

const NotFound = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Box className="group">
      <Heading as="h1">404 | Not Found</Heading>
      <Button onClick={handleBack} data-testid="back">
        Take me Back
      </Button>
    </Box>
  );
};

export default NotFound;
