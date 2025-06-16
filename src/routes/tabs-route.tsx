import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UserProfile from "../components/pages/UserProfile/user-profile";
import Rank from "../components/pages/Rank/rank";
import { StyleSheet } from "react-native";
import { HeartIcon, RankIcon, UserIcon } from "../components/atoms/tab-icons";
import FavoritesUniversities from "../components/pages/FavoritesUniversities/favorites-universities";

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
        tabBarHideOnKeyboard: true
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
        name="Favoritas"
        component={FavoritesUniversities}
        options={{
          tabBarIcon: HeartIcon,
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
