import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MealsBoxes = () => {
  const [arrImgs, setArrImgs] = useState([]);
  const [n, setN] = useState(0);

  useEffect(() => {
    const loadCounter = async () => {
      const storedN = await AsyncStorage.getItem('meal_counter');
      setN(storedN ? parseInt(storedN) : 0);
      getMeals();
      console.log(n);
    };
    loadCounter();
  }, [n]);

  const getMeals = async () => {
    try {
      const newArr = [];
      for (let i = 0; i < n; i++) {
        const key = `meal_${i}`;
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
          newArr.push(value);
        } else {
          console.log(`No value found for ${key}`);
        }
      }
      setArrImgs(newArr);
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  };

  const deleteMeal = async () => {
    try {
      for (let i = 0; i <= n; i++) {
        const key = `meal_${i}`;
        await AsyncStorage.removeItem(key);
        await AsyncStorage.removeItem('meal_counter');
      }
      setArrImgs([]);
      setN(0);
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  return (
    <View style={styles.container}>
      {arrImgs.map((uri, id) => (
        <View key={`meal_${id}`}>
          <View >
            <Text>Meal {id+1}</Text>
          </View>
          <View style={styles.imageWrapper}>
            <Image source={{ uri }} contentFit="cover" style={styles.image} />
          </View>
        </View>
      ))}

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.resetButton} onPress={deleteMeal}>
          <Text style={styles.resetButtonText}>Reset Meals</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.updateButton} onPress={getMeals}>
          <Text style={styles.updateButtonText}>Update Meals</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
  },
  imageWrapper: {
    width: '20%',
    aspectRatio: 1,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  resetButton: {
    backgroundColor: '#14C8EB',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginHorizontal: 10,
    flex: 1,
  },
  resetButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  updateButton: {
    backgroundColor: '#2D2B29',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    flex: 1,
  },
  updateButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default MealsBoxes;
