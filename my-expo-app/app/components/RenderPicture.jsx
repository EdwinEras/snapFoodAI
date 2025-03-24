import { Button, View, Pressable, Text, StyleSheet } from 'react-native';
import { Image } from 'expo-image';


const RenderPicture = ({ uri }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgWrapper}>
        <Image source={{ uri }} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '90%',
    marginTop: 50,
  },
  imgWrapper: {
    width: '100%',
    height: 300,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    borderRadius: 10,
    height: '100%',
    objectFit: 'cover',
  }
});

export default RenderPicture;
