import { useEffect, useState } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import avatarSad from "../../assets/avatar_sad.png";
import avatarHappy from "../../assets/avatar_happy.png";
import avatarBackground from "../../assets/avatar_background.avif";
import { View, Image, ImageBackground, StyleSheet } from 'react-native';

const AvatarHome = () => {
  const [n, setN] = useState(0);

  useEffect(()=>{
    const loadCounter = async () => {
      getCount();
    }
    loadCounter();
  }, [n]);

  const getCount = async () => {
    try {
      const key = `meal_counter`;
      const value = await AsyncStorage.getItem(key);
      if (value == null ) {
        setN(0);
        console.log(`No value found for ${key}`);
      } else {
        setN(parseInt(value));
        console.log(value);
      }
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  };

  return (
    <View style={styles.imageContainer}>
      <ImageBackground source={avatarBackground} style={styles.backgroundImage}
      >
        {n<1? <Image source={avatarSad} style={styles.overlayImage} />
        :<Image source={avatarHappy} style={styles.overlayImage} />}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: { marginTop: 20, height: 450 },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgreen',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayImage: {
    width: 300,
    height: 300,
    position: 'absolute',
  },
});

export default AvatarHome;
