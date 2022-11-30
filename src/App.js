import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import One from "./screen/One";
import Two from "./screen/Two";
import Icon from "react-native-ionicons";

const Tab = createBottomTabNavigator();

function TabScreens() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="one" component={One} />
      <Tab.Screen name="tow" component={Two} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <TabScreens />
    </NavigationContainer>
  );
}
