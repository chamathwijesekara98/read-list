import React from "react";
import { Box, Text } from "@chakra-ui/react";

const DetailFooter = () => {
  return (
    <Box
      as="footer"
      py={4}
      px={8}
      mt="auto"
      bg="#66785F"
      color="white"
      textAlign="center"
    >
      <Text>© 2023 ReadList. All rights reserved.</Text>
    </Box>
  );
};

export default DetailFooter;
