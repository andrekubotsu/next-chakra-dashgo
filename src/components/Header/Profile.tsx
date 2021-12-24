import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Andre Kubotsu</Text>
          <Text color="gray.300">contato201@gmail.com</Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Andre Kubotsu"
        src="https://github.com/andrekubotsu.png"
      />
    </Flex>
  );
}
