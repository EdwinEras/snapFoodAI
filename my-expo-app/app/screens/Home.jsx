import { ScrollView, SafeAreaView, View, StyleSheet, Text, ImageBackground } from 'react-native';
import MealsScreen from './MealsPage';

const HeroSection = () => {
  return (
    <View style={styles.imageContainer}>
      <ImageBackground
        source={{
          uri: 'https://img.freepik.com/free-photo/top-view-delicious-meals-arrangement_23-2149178167.jpg?t=st=1742657319~exp=1742660919~hmac=d132f58f0d79e6934423388e1c7443aa3c71f5544af5cd1711c1d547e5c199fb&w=1380',
        }}
        style={styles.image}>
        <View style={styles.overlay} />
        <View style={styles.textContainer}>
          <Text style={styles.heading}>Track your Calories & Nutrition</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <HeroSection />
        <MealsScreen />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imageContainer: { marginTop: 20, height: 450 },
  image: { width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' },
  overlay: {
    backgroundColor: '#FF7E5F',
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
