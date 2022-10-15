import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Stack,
  Box,
  Image,
  Button
} from "native-base";
import { NavigationContainer } from '@react-navigation/native'
import Hospital from "../components/Hospital"

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

export default function Home({ navigation }) {
  return (
    <NativeBaseProvider>

     <Center>
        <VStack space={2} alignItems="center">
          <Hospital />
          <HStack alignItems="center" mt="5">
            <Text>Aplikasi Rumah Sakit</Text>
          </HStack>
          <Button mt="1/5" variant="primary" bg="primary.600" w="80%" onPress={() => navigation.navigate('login')}>
            <Text bold color="white">Login</Text>
          </Button>
          <Button my="1" mx="10" variant="danger" bg="danger.500" w="80%" onPress={() => navigation.navigate('register')}>
            <Text bold color="white">Register</Text>
          </Button>
        </VStack>

      </Center>

    </NativeBaseProvider>

  );
}

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}
