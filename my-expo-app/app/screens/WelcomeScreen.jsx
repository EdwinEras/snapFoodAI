import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image, StyleSheet } from 'react-native';
import BackgroundImage from '../../assets/avatar_background.jpg';
import overlayImage from '../../assets/avatarBg.png';

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground source={BackgroundImage} style={styles.background}>
      <View style={styles.overlayContainer}>
        <Image source={overlayImage} style={styles.overlayImage} resizeMode="contain" />
      </View>

      <View style={styles.centerContainer}>
        <Text style={styles.title}>
          Welcome to SnapFoodAI {'\n'} Make Every Meal Count! Scan Food, Earn Rewards, and Keep Your
          Pine Marten Smiling!
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignInScreen')}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignUpScreen')}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayContainer: {
    position: 'absolute',
    top: 40,
    alignItems: 'center',
    width: '100%',
  },
  overlayImage: {
    width: 200,
    height: 200,
  },
  centerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 26,
    letterSpacing: 0.2,
    lineHeight: 36,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#145163',
    padding: 15,
    paddingHorizontal: 45,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    width: '80%',
    shadowColor: 'rgba(255, 255, 255, 0.8)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 6,
    elevation: 6,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 28,
    letterSpacing: 0.5,
  },
});

export default WelcomeScreen;
