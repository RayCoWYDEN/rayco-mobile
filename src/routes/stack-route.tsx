import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../components/pages/InitialUserPages/login";
import Tabs from "./tabs-route";
import SingUp from "../components/pages/InitialUserPages/sign-up";

const Stack = createNativeStackNavigator();

const StackNavigation: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SingUp" component={SingUp} />
      <Stack.Screen name="Tabs" component={Tabs} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
