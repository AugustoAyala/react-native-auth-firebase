import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/login/Login";
import Main from "./screens/main/Main";
import SingUp from "./screens/singUp/SingUp";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          options={{
            headerTransparent: true,
            headerShown: false,
          }}
          name="Login"
          component={Login}
        />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="SingUp" component={SingUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
