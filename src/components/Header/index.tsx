import { Flex, useBreakpointValue } from '@chakra-ui/react';

import { Logo } from './Logo';
import { NotificationsNav } from './NotificationsNav';
import { Profile } from './Profile';
import { SearchBox } from './SearchBox';

export function Header(): JSX.Element{

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Flex as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto" // margin horizontal
      mt="4" // margin top
      px="6" // padding horizontal
      align="center"
    >
      <Logo />
      {isWideVersion && <SearchBox />}
    
      <Flex align="center" ml="auto">
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}