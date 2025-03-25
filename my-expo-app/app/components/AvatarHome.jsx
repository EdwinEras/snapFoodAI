import { useEffect } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import avatarSad from "../../assets/avatar_sad.png";
import avatarHappy from "../../assets/avatar_happy.png";
import avatarBackground from "../../assets/avatar_background.avif";
import { View, Image, ImageBackground, StyleSheet } from 'react-native';

const AvatarHome = ({n, setN}) => {

  useEffect(()=>{
    const loadCounter = async () => {
      const storedN = await AsyncStorage.getItem('meal_counter');
      setN(storedN ? parseInt(storedN) : 0);
      console.log("AvatarHome: "+n);
    }
    loadCounter();
  }, [n]);

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
