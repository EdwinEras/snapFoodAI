import { NavigationContainer } from '@react-navigation/native';
import BottomMenu from 'app/components/BottomMenu';
import "./global.css"

export default function App() {
  return (
    <NavigationContainer>
      <BottomMenu />
    </NavigationContainer>
  );
}
