import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MealsScreen = ({n, setN}) => {
  const [arrImgs, setArrImgs] = useState([]);

  useEffect(() => {
    const loadCounter = async () => {
      const storedN = await AsyncStorage.getItem('meal_counter');
      setN(storedN ? parseInt(storedN) : 0);
      getMeals();
    };
    loadCounter();
  }, [n]);
  
  const titles = [
    { name: 'Breakfast' },
    { name: 'Lunch' },
    { name: 'Dinner' }
  ];

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
      console.log('Error retrieving data:', error);
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
      console.log('Error deleting data:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>My Meals</Text>
      {arrImgs.map((img, index) => (
        <View key={index} style={styles.section}>
        {index<3? <Text style={styles.sectionTitle}>{titles[index].name}</Text>: <></>}
          <View style={styles.mealContainer}>
            <View style={styles.card}>
              <Image source={{uri:img}} style={styles.image} />
              <View style={styles.textContainer}>
                <Text style={styles.mealName}>Meal #{index+1}</Text>
                <Text style={styles.date}>March 25, 2025</Text>
                <Ionicons name="flame" size={24} color="orange" style={styles.icon} />
              </View>
            </View>
          </View>
        </View>
      ))}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.resetButton} onPress={deleteMeal}>
          <Text style={styles.resetButtonText}>Reset Meals</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  mainTitle: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  section: { marginBottom: 20 },
  sectionTitle: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  mealContainer: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 15,
    width: '48%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  textContainer: {
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  image: { width: '100%', height: 100, borderTopLeftRadius : 8, borderTopRightRadius: 8},
  mealName: { fontSize: 16, fontWeight: 'bold', marginTop: 5, textAlign: 'center', marginBottom: 6},
  date: { fontSize: 12, color: 'gray', marginBottom: 5, textAlign: 'center' },
  icon: { marginTop: 5, textAlign: 'center' },
  buttonContainer: {
    flexDirection: 'column',
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
});

export default MealsScreen;
