import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Andre Kubotsu</Text>
        <Text color="gray.300">contato201@gmail.com</Text>
      </Box>
      <Avatar
        size="md"
        name="Andre Kubotsu"
        src="https://github.com/andrekubotsu.png"
      />
    </Flex>
  );
}
