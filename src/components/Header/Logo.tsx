import { Text, VStack } from "@chakra-ui/react";

export function Logo() {
  return (
    <Text 
      fontSize={["2xl", "3xl"]}
      fontWeight="bold"
      letterSpacing="tight"
      w="64"
      >
          {/* <Text as="span" marginRight="1" color="pink.500"> &lt;/&gt;  </Text> */}
          dashgo
          <Text as="span" marginLeft="1" color="pink.500">.</Text>
    </Text>
  );
}