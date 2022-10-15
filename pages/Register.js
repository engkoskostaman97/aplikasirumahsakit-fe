import { StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import {
    VStack,
    Image,
    Center,
    HStack,
    Button,
    Text,
    Box,
    Heading,
    FormControl,
    Input,
    Link,
} from "native-base";
import login from "../image/user.jpg";


const Register = ({ navigation }) => {
    let [register, setRegister] = useState({
 
    });


    console.log(register);

    const handleRegister = async () => {
        try {
            
            if (value != null) {
                console.log(value);
                navigation.navigate("login");
            }
        } catch (error) {
            console.log(error);
            alert(error.res.data.message);
        }
    };

 

    return (
        <Box w="100%" display="flex" flex={1} alignItems="center">
            <Center w="100%">
                <Box safeArea p="2" py="8" w="100%" maxW="300">
                    <Image source={login} alt="Alternate Text" size="200" width={"500"} />

                    <Heading
                        mt={10}
                        size="lg"
                        fontWeight="600"
                        color="coolGray.800"
                        bold
                        _dark={{
                            color: "warmGray.50",
                        }}
                    >
                        Register
                    </Heading>
                    <VStack space={4} mt="5">
                        <FormControl bg="#e5e5e5" borderColor="#737373">
                            <Input
                                type="email"
                                placeholder="Email"
                                size="lg"
                                borderColor="#737373"
                                borderWidth="1"
                                borderRadius="5px"
                              
                            />
                        </FormControl>
                        <FormControl bg="#e5e5e5">
                            <Input
                                type="name"
                                placeholder="Name"
                                size="lg"
                                borderColor="#737373"
                                borderWidth="1"
                                borderRadius="5px"
                           
                            />
                        </FormControl>
                        <FormControl bg="#e5e5e5">
                            <Input
                                type="password"
                                placeholder="Password"
                                size="lg"
                                borderColor="#737373"
                                borderWidth="1"
                                borderRadius="5px"
                        
                            />
                        </FormControl>
                        <Button
                            mt="8"
                            variant="danger"
                            bg="danger.600"
                            onPress={handleRegister}
                        >
                            <Text bold color="white" fontSize="16px">
                                Register
                            </Text>
                        </Button>
                        <HStack justifyContent="center">
                            <Text
                                fontSize="sm"
                                color="coolGray.600"
                                _dark={{
                                    color: "warmGray.200",
                                }}
                            >
                                Joined us before ?{" "}
                            </Text>
                            <Link
                                _text={{
                                    color: "#ef4444",
                                    fontWeight: "medium",
                                    fontSize: "sm",
                                }}
                                href="#"
                                bold
                            >
                                <Text
                                    bold
                                    color="#ef4444"
                                    onPress={() => navigation.navigate("login")}
                                >
                                    Login
                                </Text>
                            </Link>
                        </HStack>
                    </VStack>
                </Box>
            </Center>
        </Box>
    );
};

export default Register;

const styles = StyleSheet.create({});