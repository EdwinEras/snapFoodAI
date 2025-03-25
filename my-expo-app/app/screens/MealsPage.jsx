import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MealsScreen = ({ n, setN }) => {
  const [arrImgs, setArrImgs] = useState([]);

  useEffect(() => {
    const loadCounter = async () => {
      const storedN = await AsyncStorage.getItem('meal_counter');
      setN(storedN ? parseInt(storedN) : 0);
      getMeals();
    };
    loadCounter();
  }, [n]);

  const titles = [{ name: 'Breakfast' }, { name: 'Lunch' }, { name: 'Dinner' }];

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
      {n === 0 && (
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>
            <Ionicons name="leaf" size={18} color="#502810" />
            {'  '}Make Every Meal Count! Scan Food, Earn Rewards, and Keep Your Pine Marten Smiling!
          </Text>
          <Text style={styles.infoText}>
            <Ionicons name="star" size={18} color="#502810" />
            {'  '}Once you upload meals, I’ll be happy, and you’ll earn points and rewards for
            staying on track with your nutrition.
          </Text>
          <Text style={styles.infoText}>
            <Ionicons name="checkmark-circle" size={18} color="#502810" />
            {'  '}Your meals will appear right here once uploaded.
          </Text>
        </View>
      )}

      {arrImgs.length > 0 && <Text style={styles.mainTitle}>My Meals</Text>}

      {arrImgs.map((img, index) => (
        <View key={index} style={styles.mealContainer}>
          {index < 3 ? <Text style={styles.sectionTitle}>{titles[index].name}</Text> : null}
          <View style={styles.card}>
            <Image source={{ uri: img }} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.mealName}>Meal #{index + 1}</Text>
              <Text style={styles.date}>March 25, 2025</Text>
              <View style={styles.pointsContainer}>
                <Ionicons name="star-outline" size={20} color="#fe9b3d" />
                <Text style={styles.pointsText}>10 Points</Text>
              </View>
            </View>
          </View>
        </View>
      ))}

      {arrImgs.length > 0 && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.resetButton} onPress={deleteMeal}>
            <Text style={styles.resetButtonText}>Reset Meals</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  mainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 30,
    textTransform: 'uppercase',
  },
  sectionTitle: { fontSize: 18, fontWeight: 700, marginBottom: 14, textTransform: 'uppercase' },
  mealContainer: { marginBottom: 60 },
  card: {
    flexDirection: 'row',
    overflow: 'hidden',
    alignItems: 'center',
  },
  image: { width: '40%', height: 150, borderRadius: 8 },
  textContainer: { flex: 1, padding: 12 },
  mealName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
    textTransform: 'uppercase',
    color: '#502810',
  },
  date: { fontSize: 14, color: '#502810', marginBottom: 4 },
  pointsContainer: { flexDirection: 'row', alignItems: 'center', marginTop: 5 },
  pointsText: { fontSize: 16, color: '#502810', marginLeft: 5 },
  buttonContainer: { marginTop: 20 },
  resetButton: {
    backgroundColor: '#145163',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  resetButtonText: { fontSize: 16, color: '#fff', fontWeight: 'bold', textTransform: 'uppercase' },
  infoContainer: {
    padding: 15,
    borderRadius: 8,
    width: '100%',
    marginBottom: 20,
    marginTop: 40,
    alignItems: 'center',
  },
  infoText: {
    color: '#502810',
    fontSize: 16,
    marginBottom: 8,
    textAlign: 'center',
  },
});

export default MealsScreen;
