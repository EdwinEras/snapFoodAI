import { Button, View, Pressable, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'expo-image';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RenderPicture = ({ uri, setUri }) => {
  const [n, setN] = useState(0);
  const navigation = useNavigation();

  useEffect(() => {
    const loadCounter = async () => {
      const storedN = await AsyncStorage.getItem('meal_counter');
      setN(storedN ? parseInt(storedN) : 0);
    };
    loadCounter();
  }, []);

  const saveMeal = async (uri) => {
    try {
      console.log('meal_' + n + ': ' + uri);
      await AsyncStorage.setItem('meal_' + n, uri);
      await AsyncStorage.setItem('meal_counter', (n + 1).toString());
      setN((prevN) => prevN + 1);
      console.log('Data saved successfully!');
      setUri(null);
      navigation.navigate('Congratulations');
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imgWrapper}>
        <Image source={{ uri }} style={styles.image} />
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={() => setUri(null)}>
          <Text style={styles.buttonText}>Re-take picture</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => saveMeal(uri)}>
          <Text style={styles.buttonText}>Save meal</Text>
        </Pressable>
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
  },
  button: {
    backgroundColor: '#2D2B29',
    paddingVertical: 20,
    paddingHorizontal: 18,
    borderRadius: 8,
    marginHorizontal: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 500,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});

export default RenderPicture;
