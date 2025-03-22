import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import BottomMenu from 'app/components/BottomMenu';
import "./global.css"
import './gesture-handler';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#F7F5F2',
  },
};

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <BottomMenu />
    </NavigationContainer>
  );
}
