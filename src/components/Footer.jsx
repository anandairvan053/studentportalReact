// TODO: answer here
import React from "react";
import { Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      className="test-box footer"
      backgroundColor="#5bd1d7"
      fontFamily="Poppins, sans-serif"
      textAlign="center"
      p={25}
    >
      <p
        className="studentName"
        style={{ fontWeight: "bold", fontSize: "20px" }}
      >
        Ananda Irvan Tri Kurniawan
      </p>
      <p className="studentId" style={{ fontWeight: "bold", fontSize: "20px" }}>
        FE4239922
      </p>
    </Box> // TODO: answer here
  );
};

export default Footer;
