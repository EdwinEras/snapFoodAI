import { ScrollView, SafeAreaView, View, StyleSheet, Text, ImageBackground } from 'react-native';
import MealsScreen from './MealsPage';
import AvatarHome from 'app/components/AvatarHome';
import MealsBoxes from 'app/components/MealsBoxes';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <AvatarHome />
        <MealsBoxes />
        <MealsScreen />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imageContainer: { marginTop: 20, height: 450 },
  image: { width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' },
  overlay: {
    backgroundColor: '#502810',
    opacity: 0.4,
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
  },
  textContainer: {
    paddingHorizontal: 15,
  },
  heading: {
    color: 'white',
    fontSize: 30,
    lineHeight: 42,
    letterSpacing: 0.4,
    fontWeight: 800,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});

export default HomeScreen;
