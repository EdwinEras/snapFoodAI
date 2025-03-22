import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import Home from '../screens/Home';
import Settings from '../screens/Settings';
import Profile from '../screens/Profile';
import CameraPage from 'app/screens/CameraPage';
import FoodInfo from 'app/screens/FoodInfo';

const Tab = createBottomTabNavigator();

function BottomMenu() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'FoodInfo':
              iconName = focused ? 'fast-food' : 'fast-food-outline';
              break;
            case 'Camera':
              iconName = focused ? 'camera' : 'camera-outline';
              break;
            case 'Profile':
              iconName = focused ? 'person' : 'person-outline';
              break;
            case 'Settings':
              iconName = focused ? 'settings' : 'settings-outline';
              break;
            default:
              iconName = 'help-circle-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#FF8C19',
        tabBarInactiveTintColor: '#C7C1BB',
        headerShown: false,
      })}>

      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="FoodInfo" component={FoodInfo} />
      <Tab.Screen name="Camera" component={CameraPage} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

export default BottomMenu;