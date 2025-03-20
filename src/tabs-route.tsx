import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UserProfile from "./components/pages/UserProfile/user-profile";
import Rank from "./components/pages/Rank/rank";
import { StyleSheet } from "react-native";
import { RankIcon, UserIcon } from "./components/atoms/tab-icons";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tab,
        tabBarLabelStyle: {
          color: "#900059",
        },
      }}
    >
      <Tab.Screen
        name="Rank"
        component={Rank}
        options={{
          tabBarIcon: RankIcon,
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={UserProfile}
        options={{
          tabBarIcon: UserIcon,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tab: {
    backgroundColor: "#E1BFD6",
  },
});

export default Tabs;
