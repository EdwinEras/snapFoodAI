import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Image } from "expo-image";
import { useNavigation } from '@react-navigation/native';
import avatarEating from "../../assets/avatar_eating.png";

const Congratulations = () => {
    const navigation = useNavigation();

    const nextPage = () => navigation.navigate('Main', { screen: 'Home' })

    return (
      <View style={styles.container}>
          <Text>Yummy!! Thank you for feeding me</Text>
          <Text>Remember to drink wather</Text>
          <View style={styles.imgWrapper}>
              <Image source={avatarEating} contentFit="cover" style={styles.image}/>
          </View>
          <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={nextPage}>
                  <Text style={styles.buttonText}>continue</Text>
              </TouchableOpacity>
          </View>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Centers vertically
    alignItems: 'center', // Centers horizontally
    paddingVertical: 20,
  },
  imgWrapper: {
    width: '80%',
    height: 400,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    borderRadius: 10,
    height: '100%',
    objectFit: 'cover',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#14C8EB',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginHorizontal: 10,
    flex: 1,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Congratulations;