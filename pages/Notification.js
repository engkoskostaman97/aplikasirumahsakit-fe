import React from "react";
import {
  Text,
  HStack,
  Box,
  Flex,
  VStack,
  CheckCircleIcon,
  CircleIcon,
  Button

} from "native-base";
import { Fontisto } from '@expo/vector-icons';


export default function AddList({navigation}) {
  return (
    <>
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
<Box>


<VStack bg="green.100" py="2" px="4" mb="4">
  <Flex direction="row" >
    <Flex direction="column" width="70%">
      <HStack space={32}>
        <Text
          bold
          fontSize="12pt"

          onPress={() => navigation.navigate("detaillist")}
        >
          Dokter Mata
        </Text>
      </HStack>
      <HStack space={16}>
        <VStack color="e63946" pr="8">
          <Text mb="6" color="#a3a3a3" strikeThrough>
            Dr.aji
          </Text>
          <HStack>
            <Fontisto name="date" color="#a3a3a3" size="12" mt="3" />
            <Text color="#a3a3a3" fontSize="8pt">
              {" "}
              14 Oktober 2022
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
    </>
  );
}
