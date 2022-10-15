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
              <Text color="error.400">100k</Text>
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
                <Select.Item label="Frontend" value="Frontrend" />
                <Select.Item
                  label="Backend"
                  value="Backend"
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
          <Box>


            <VStack bg="amber.100" py="2" px="4" mb="4">
              <Flex direction="row" >
                <Flex direction="column" width="70%">
                  <HStack space={32}>
                    <Text
                      bold
                      fontSize="12pt"
                      strikeThrough
                      onPress={() => navigation.navigate("detaillist")}
                    >
                      Dokter Umum
                    </Text>
                  </HStack>
                  <HStack space={16}>
                    <VStack color="e63946" pr="8">
                      <Text mb="6" color="#a3a3a3" strikeThrough>
                        Dr.ehsan
                      </Text>
                      <HStack>
                        <Fontisto name="date" color="#a3a3a3" size="12" mt="3" />
                        <Text color="#a3a3a3" fontSize="8pt">
                          {" "}
                          10 Oktober 2022
                        </Text>
                      </HStack>

                    </VStack>
                  </HStack>
                </Flex>
                <Flex direction="column" width="30%">
                  <Button bg="amber.400" px="2" py="0" h="22px">
                    Dokter
                  </Button>
                  <CheckCircleIcon style={{ marginTop: 4, flex: "justify-content-center",marginLeft:"30px" }}
                    color="red.500"
                    size="30"
                  ></CheckCircleIcon>
                </Flex>

              </Flex>

            </VStack>



          </Box>
        </Box>

      </ScrollView>
    </>
  );
};


