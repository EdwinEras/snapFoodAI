import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Home from '../screens/Home';
import Rewards from '../screens/Rewards';
import Profile from '../screens/Profile';
import CameraPage from 'app/screens/CameraPage';
import BetterBites from 'app/screens/BetterBites';

const Tab = createBottomTabNavigator();

function BottomMenu() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home';
              break;
            case 'Better Bites':
              iconName = focused ? 'food-apple' : 'food-apple';
              break;
            case 'Camera':
              iconName = focused ? 'camera' : 'camera';
              break;
            case 'Profile':
              iconName = focused ? 'account' : 'account';
              break;
            case 'My Rewards':
              iconName = focused ? 'gift-open' : 'gift';
              break;
            default:
              iconName = 'help-circle-outline';
          }
          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#502810',
        tabBarInactiveTintColor: '#c2b1a7',
        headerShown: false,
        tabBarStyle: {
          paddingTop: 10,
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Better Bites" component={BetterBites} />
      <Tab.Screen name="Camera" component={CameraPage} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="My Rewards" component={Rewards} />
    </Tab.Navigator>
  );
}

export default BottomMenu;
