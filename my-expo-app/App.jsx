import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomMenu from 'app/components/BottomMenu';
import UserInfo from 'app/screens/UserInfo';
import './global.css';
import './gesture-handler';
import Congratulations from 'app/screens/Congratulations';
import { ImageProvider } from 'app/components/ImageContext';
import SignInScreen from 'app/screens/SignInScreen';
import SignUpScreen from 'app/screens/SignUpScreen';

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
    <ImageProvider>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false }}>
          <Stack.Screen name="Main" component={BottomMenu} />
          <Stack.Screen name="UserInfo" component={UserInfo} />
          <Stack.Screen name="Congratulations" component={Congratulations} />
          <Stack.Screen name="SignInScreen" component={SignInScreen} />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ImageProvider>
  );
}
