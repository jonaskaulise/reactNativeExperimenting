/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Flex from "./Flex";
import ImageExample from "./ImageExample";
import React from "react";
import StorageInput from "./StorageInput";

const Tab = createBottomTabNavigator();

function NestedTab(): JSX.Element {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: { height: 50, padding: 0},
        tabBarIcon: ({focused}) => null,
      })}>
      <Tab.Screen name="Flex" component={Flex} />
      <Tab.Screen name="Image" component={ImageExample} />
      <Tab.Screen name="StorageInput" component={StorageInput} />
    </Tab.Navigator>
  );
}

export default NestedTab;
