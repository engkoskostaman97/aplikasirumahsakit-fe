import { View, Text } from 'react-native'
import React from 'react'
import Hospital from '../image/hospital.png'
import {
  Image,
  Center

} from 'native-base';

export default function Todo() {
  return <Center>
    <Image source={Hospital} alt="Alternate Text" size="250" />
  </Center>;
}