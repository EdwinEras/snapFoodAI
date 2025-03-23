import { View, StyleSheet, ImageBackground } from 'react-native';
import { Image } from "expo-image";
import { useEffect, useState } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import avatarSad from "../../assets/avatar_sad.png";
import avatarHappy from "../../assets/avatar_happy.png";
import avatarBackground from "../../assets/avatar_background.avif";

const AvatarHome = () => {
  return (
    <View style={styles.imageContainer}>
      <ImageBackground
        source={avatarBackground}
        style={styles.image}>
        <View style={styles.overlay}>
          <Image source={{ avatarSad }} />
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  // imageContainer: { marginTop: 20, height: 450 },
  // image: { width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'},
  // overlay: {
  //   position: 'absolute',
  //   width: '100',
  //   height: '100',
  // },
  // textContainer: {
  //   paddingHorizontal: 15,
  // },
  // heading: {
  //   color: 'white',
  //   fontSize: 30,
  //   lineHeight: 42,
  //   letterSpacing: 0.4,
  //   fontWeight: 800,
  //   textTransform: 'uppercase',
  //   textAlign: 'center',
  // },
});

export default AvatarHome;