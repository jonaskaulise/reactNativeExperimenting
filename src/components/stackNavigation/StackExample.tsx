/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Second from "./Second";
import First from "./First";

const Stack = createNativeStackNavigator();

function StackExample(): JSX.Element {
  return (
    <Stack.Navigator>
      <Stack.Screen name="First" component={First} />
      <Stack.Screen name="Second" component={Second} />
    </Stack.Navigator>
  );
}

export default StackExample;
