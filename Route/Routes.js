import * as React from 'react';

import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import List from "../pages/List";
import Notification from '../pages/Notification';
import DetailList from '../pages/DetailList'
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddCategory from '../pages/Chat';
import Setting from '../pages/Setting';
import Chat from '../pages/Chat';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Layardepan() {
  return (

    <Stack.Navigator alignItems="center">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="register" component={Register} options={{
        headerShown: false,
      }} />
      <Stack.Screen name="detaillist" component={DetailList} />
      <Stack.Screen name="login" component={Login} options={{
        headerShown: false,
      }} />
      <Stack.Screen name="home" component={Tab1} options={{
        headerShown: false,
      }}
      />
    </Stack.Navigator>

  );
}
export default Layardepan;

export function Tab1() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerMode: "screen",
        headerTintColor: "white",
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let iconColor;

          if (route.name === "home") {
            iconName = "home"
            iconColor = focused ? "red" : "gray"
          } else if (route.name === "notification") {
            iconName = "bell"
            iconColor = focused ? "red" : "gray"
          } else if (route.name === "setting") {
            iconName = "bars"
            iconColor = focused ? "red" : "gray"
          } else if (route.name === "chat") {
            iconName = "rocketchat"
            iconColor = focused ? "red" : "gray"
          }

          return <FontAwesome5 name={iconName} size={24} color={iconColor} />
        },
        tabBarInactiveTintColor: "gray",
      })}
    >

      <Tab.Screen name="home" component={List} options={{
        headerShown: false,
      }} />
      {/* <FontAwesome name="calendar" size={24} color="black" /> */}
      <Tab.Screen name="notification" component={Notification} options={{
        headerShown: false,
      }} />
      <Tab.Screen name="chat" component={Chat} options={{
        headerShown: false,
      }} />
      <Tab.Screen name="setting" component={Setting} options={{
        headerShown: false,
      }} />
    </Tab.Navigator>

  );
}