import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';


const MealSection = ({ title, meals }) => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.mealContainer}>
        {meals.map((item) => (
          <View key={item.id} style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.mealName}>{item.name}</Text>
              <Text style={styles.date}>{item.date}</Text>
              <Ionicons name="flame" size={24} color="orange" style={styles.icon} />
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

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
  
  const mealsData = {
    breakfast: [
      {
        id: '1',
        name: 'Oatmeal & Berries',
        date: 'March 25, 2025',
        image:
          'https://images.unsplash.com/photo-1735316159929-4cd6782faa83?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fG9hdG1lYWwlMjBhbmQlMjBiZXJyaWVzfGVufDB8fDB8fHww',
      },
      {
        id: '2',
        name: 'Avocado Toast',
        date: 'March 25, 2025',
        image:
          'https://images.unsplash.com/photo-1603046891726-36bfd957e0bf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    ],
    lunch: [
      {
        id: '3',
        name: 'Grilled Chicken Salad',
        date: 'March 25, 2025',
        image:
          'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=2026&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: '4',
        name: 'Pasta Primavera',
        date: 'March 25, 2025',
        image:
          'https://images.unsplash.com/photo-1473093226795-af9932fe5856?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    ],
    dinner: [
      {
        id: '5',
        name: 'Salmon & Veggies',
        date: 'March 25, 2025',
        image:
          'https://plus.unsplash.com/premium_photo-1675676628504-6593cc3b36e1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: '6',
        name: 'Beef Stir Fry',
        date: 'March 25, 2025',
        image:
          'https://images.unsplash.com/photo-1720701247887-cab418baa6d6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    ],
  };

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

  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>My Meals</Text>
      {arrImgs.map((img, index) => (
        <MealSection title="Breakfast" meals={mealsData.breakfast} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  mainTitle: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  section: { marginBottom: 20 },
  sectionTitle: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  mealContainer: {
    flexDirection: 'row',
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
  image: { width: '100%', height: 120, borderTopLeftRadius : 8, borderTopRightRadius: 8},
  mealName: { fontSize: 16, fontWeight: 'bold', marginTop: 5, textAlign: 'center', marginBottom: 6},
  date: { fontSize: 12, color: 'gray', marginBottom: 5, textAlign: 'center' },
  icon: { marginTop: 5, textAlign: 'center' },
});

export default MealsScreen;
