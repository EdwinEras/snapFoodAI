import { View, Image, StyleSheet } from 'react-native';

const FoodImage = ({ uri }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { width: '100%' },
  image: { width: '100%', height: 300 },
});

export default FoodImage;
