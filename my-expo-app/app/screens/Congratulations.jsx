import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { useNavigation } from '@react-navigation/native';
import avatarEating from '../../assets/avatar_eating.png';

const Congratulations = () => {
  const navigation = useNavigation();

  const nextPage = () => navigation.navigate('Main', { screen: 'Home' });

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Yummy!! Thank you for feeding me</Text>
      <Text style={styles.subText}>Remember to drink water</Text>

      <View style={styles.suggestionContainer}>
        <Text style={styles.suggestionText}>
          We noticed you were lacking some nutrients in your last meal. Consider adding foods rich
          in Vitamin E and Vitamin K to your next meal!
        </Text>
      </View>

      <View style={styles.imgWrapper}>
        <Image source={avatarEating} contentFit="cover" style={styles.image} />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={nextPage}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  mainText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#502810',
  },
  subText: {
    fontSize: 16,
    color: '#502810',
    textAlign: 'center',
    marginBottom: 20,
  },
  suggestionContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff7e0',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#fdc83a',
    marginBottom: 30,
  },
  suggestionText: {
    fontSize: 16,
    color: '#502810',
    textAlign: 'center',
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
    justifyContent: 'center',
    width: '100%',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#145163',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginHorizontal: 10,
    flex: 1,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: 600,
    textAlign: 'center',
  },
});

export default Congratulations;
