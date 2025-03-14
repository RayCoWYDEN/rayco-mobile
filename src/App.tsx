import React, { useCallback, useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";

import {
  useFonts,
  OpenSans_400Regular as OpenSans,
  OpenSans_700Bold as OpenSansBold,
} from "@expo-google-fonts/open-sans";
import { JollyLodger_400Regular as JollyLodger } from "@expo-google-fonts/jolly-lodger";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Keyboard, TouchableWithoutFeedback, View } from "react-native";
import UserProfile from "./components/pages/UserProfile/user-profile";
import Rank from "./components/pages/Rank/rank";


SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    OpenSans,
    OpenSansBold,
    JollyLodger,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>

          <Stack.Screen name="Rank" component={Rank} />
          {/* <Stack.Screen name="UserProfile" component={UserProfile} /> */}
          {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
          {/* <Stack.Screen name="SingUp" component={SingUp}  />  */}
        </Stack.Navigator>
      </NavigationContainer>
    </View>
    </TouchableWithoutFeedback>
  );
}
