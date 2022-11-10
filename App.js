import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import home from "./screens/home.js";
import item from "./screens/item.js";
import cart from "./screens/cart.js";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="item" component={item} /> */}
        {/* <Stack.Screen name="home" component={home} /> */}
        <Stack.Screen name="cart" component={cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
