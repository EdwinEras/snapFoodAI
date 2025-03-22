import { Text, View, Button } from 'react-native';
import { Image } from "expo-image";
import { useEffect, useState } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";

const MealsBoxes = () => {
  const [arrImgs, setArrImgs] = useState([]);
  const [n, setN] = useState(0);

    useEffect(() => {
      const loadCounter = async () => {
        const storedN = await AsyncStorage.getItem("meal_counter");
        setN(storedN ? parseInt(storedN) : 0);
    };
    loadCounter();
  }, []);

  const getMeals = async () => {
    try {
      const newArr = [];
      for (let i = 0; i <= n; i++) {
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
      console.error("Error retrieving data:", error);
    }
  };

  const deleteMeal = async () => {
    try {
      for (let i = 0; i <= n; i++) {
        const key = `meal_${i}`;
        await AsyncStorage.removeItem(key);
        await AsyncStorage.removeItem("meal_counter");
      }
      setArrImgs([]);
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!!</Text>
      {arrImgs? <Button onPress={deleteMeal} title="Reset Meals" /> : <></> }
      {arrImgs.map((uri, id) => (
        <Image
          key={id}
          source={{ uri }}  
          contentFit="contain"
          style={{ width: 150, aspectRatio: 1 }}
        />
      ))}
      <Button onPress={getMeals} title="Update Meals" />
    </View>
  );
};

export default MealsBoxes;