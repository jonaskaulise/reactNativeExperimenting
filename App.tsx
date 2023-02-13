/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Info from "./src/components/Info";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackExample from "./src/components/stackNavigation/StackExample";
import CameraExample from "./src/components/CameraExample";
import Ionicons from "react-native-vector-icons/Ionicons";
import NestedTab from "./src/components/nestedTabNavigation/NestedTab";
import { QueryClient, QueryClientProvider } from "react-query";
import ReactQuery from "./src/components/ReactQuery";

const Tab = createBottomTabNavigator();
const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Info") {
                iconName = focused
                  ? "ios-information-circle"
                  : "ios-information-circle-outline";
              } else if (route.name === "ReactQuery") {
                iconName = focused ? "server" : "server-outline";
              } else if (route.name === "Nested Tab") {
                iconName = focused ? "albums" : "albums-outline";
              } else if (route.name === "Stack") {
                iconName = focused
                  ? "file-tray-stacked"
                  : "file-tray-stacked-outline";
              } else if (route.name === "Camera") {
                iconName = focused ? "camera" : "camera-outline";
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            header: () => {
              if (route.name === "Stack") {
                return <></>;
              }
            }
          })}>
          <Tab.Screen name="Info" component={Info} />
          <Tab.Screen name="ReactQuery" component={ReactQuery} />
          <Tab.Screen name="Nested Tab" component={NestedTab} />
          <Tab.Screen name="Stack" component={StackExample} />
          <Tab.Screen name="Camera" component={CameraExample} />
        </Tab.Navigator>
      </QueryClientProvider>

    </NavigationContainer>
  );
}

export default App;
