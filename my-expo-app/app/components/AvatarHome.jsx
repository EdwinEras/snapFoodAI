import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native';
import avatarSad from '../../assets/avatar_sad.png';
import avatarHappy from '../../assets/avatar_happy.png';
import avatarBackground from '../../assets/avatar_background.jpg';

const AvatarHome = ({ n, setN }) => {
  useEffect(() => {
    const loadCounter = async () => {
      try {
        const storedN = await AsyncStorage.getItem('meal_counter');
        setN(storedN ? parseInt(storedN, 10) : 0);
        console.log('AvatarHome:', storedN);
      } catch (error) {
        console.error('Error loading meal counter:', error);
      }
    };
    loadCounter();
  }, []);

  return (
    <View style={styles.imageContainer}>
      <ImageBackground source={avatarBackground} style={styles.backgroundImage}>
        <Image
          source={n < 1 ? avatarSad : avatarHappy}
          style={styles.overlayImage}
          resizeMode="contain"
        />
        <Text style={styles.overlayText}>
          {n === 0 ? "I'm starving! 🍽️ Please feed me!" : 'Yum! Thanks for the meal! 😊'}
        </Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: { height: 450, width: '100%' },
  backgroundImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayImage: {
    width: 250,
    height: 250,
  },
  overlayText: {
    position: 'absolute',
    bottom: 50,
    color: 'white',
    fontSize: 20,
    letterSpacing: 0.2,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default AvatarHome;
