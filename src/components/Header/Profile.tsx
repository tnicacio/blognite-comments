import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps ) {
  return(
    <Flex align="center">

      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Tiago Nicácio</Text>
          <Text color="gray.300" fontSize="small" fontWeight="small">
            nicacio.t92@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Tiago Nicácio" src="https://github.com/tnicacio.png" />
    </Flex>
  );
}