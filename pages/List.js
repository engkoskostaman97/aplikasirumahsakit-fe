import React from "react";
import {
  VStack,
  HStack,
  Button,
  Text,
  Box,
  Avatar,
  Flex,
  Heading,
  FormControl,
  Input,
  Select,
  CheckCircleIcon,
  CircleIcon,
  ScrollView,
} from "native-base";
import { Fontisto } from '@expo/vector-icons';



// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

export default function ListTodo({ navigation }) {
  return (
    <>
      <ScrollView>
        <Box m={5}>
          <HStack
            space={48}
            mb="8"
            w="90%"
            alignItems="center"
            justifyContent="center"
          >
            <VStack ml={5}>
              <Heading>Hi Engkos</Heading>
              <Text color="error.400">100k followers</Text>
            </VStack>
            <Flex Flex direction="row-reverse">
              <Avatar bg="gray.500" source={{
                uri: "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png"
              }}>
                AJ
              </Avatar>
            </Flex>
          </HStack>
          <FormControl bg="#e5e5e5" borderColor="#737373" mb="2">
            <Input
              placeholder="Search List ........."
              size="lg"
              borderColor="#737373"
              borderWidth="1"
              borderRadius="5px"
            />
          </FormControl>
          <HStack mb="8">
            <FormControl
              bg="#e5e5e5"
              w="38%"
              borderColor="#737373"
              borderWidth="1"
              borderRadius="5px"
            >
              <HStack mx="2">
                <Box mt="3">
                  <Fontisto name="date" color="#a3a3a3" size="12" />
                </Box>
                <Input placeholder="Choose Date" size="lg" />
              </HStack>
            </FormControl>
            <FormControl bg="#e5e5e5" w="30%" mx="2" borderRadius="5px">
              <Select
                placeholder="Category"
                size="lg"
                borderColor="#737373"
                borderWidth="1"
              >
                <Select.Item label="Spesialis" value="spesialis" />
                <Select.Item
                  label="non spesialis"
                  value="non spesialis"
                  borderColor="#737373"
                  borderWidth="1"
                />
              </Select>
            </FormControl>
            <FormControl bg="#e5e5e5" w="28%" borderRadius="5px">
              <Select
                placeholder="Status"
                size="lg"
                borderColor="#737373"
                borderWidth="1"
              >
                <Select.Item label="Active" value="Active" />
                <Select.Item
                  label="Non Active"
                  value="NonActive"
                  borderColor="#737373"
                  borderWidth="1"
                />
              </Select>
            </FormControl>
          </HStack>
         
        </Box>

      </ScrollView>
    </>
  );
};


