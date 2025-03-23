import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomMenu from 'app/components/BottomMenu';
import UserInfo from 'app/screens/UserInfo';
import './global.css';
import './gesture-handler';
import Congratulations from 'app/screens/Congratulations';
import Home from 'app/screens/Home';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#F7F5F2',
  },
};

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={BottomMenu} />
        <Stack.Screen name="UserInfo" component={UserInfo} />
        <Stack.Screen name="Congratulations" component={Congratulations} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
