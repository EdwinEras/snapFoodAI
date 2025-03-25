import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const nutrientData = [
  { name: 'Calories', value: '364', unit: 'kcal' },
  { name: 'Proteins', value: '4', unit: 'g' },
  { name: 'Fat', value: '8', unit: 'g' },
  { name: 'Saturated fatty acids', value: '2', unit: 'g' },
  { name: 'Monounsaturated fatty acid', value: '3.3', unit: 'g' },
  { name: 'Polyunsaturated fatty acid', value: '1', unit: 'g' },
  { name: 'Omega 6', value: '0.7', unit: 'g' },
  { name: 'Omega 3', value: '0.1', unit: 'g' },
  { name: 'Carbs', value: '63', unit: 'g' },
  { name: 'Sugars', value: '45.8', unit: 'g' },
  { name: 'Polyols', value: '-', unit: '' },
  { name: 'Fibers', value: '10', unit: 'g' },
  { name: 'Salt', value: '-', unit: '' },
  { name: 'Water', value: '-', unit: '' },
  { name: 'Alcohol', value: '-', unit: '' },
  { name: 'Vitamin A - Beta-K', value: '-', unit: '' },
  { name: 'Vitamin A - Retinol', value: '-', unit: '' },
  { name: 'Vitamin B1 - Thiamin', value: '-', unit: '' },
  { name: 'Vitamin B2 - Riboflavin', value: '-', unit: '' },
  { name: 'Vitamin B3 - Niacin', value: '-', unit: '' },
  { name: 'Vitamin B5 - Pantothenic acid', value: '-', unit: '' },
  { name: 'Vitamin B6', value: '-', unit: '' },
  { name: 'Vitamin B9 - Folate', value: '0', unit: 'µg' },
  { name: 'Vitamin B12', value: '-', unit: '' },
  { name: 'Vitamin C', value: '0', unit: 'mg' },
  { name: 'Vitamin D', value: '-', unit: '' },
  { name: 'Vitamin E', value: '-', unit: '' },
  { name: 'Vitamin K1', value: '-', unit: '' },
  { name: 'Calcium', value: '0.1', unit: 'mg' },
  { name: 'Chloride', value: '-', unit: '' },
  { name: 'Copper', value: '-', unit: '' },
  { name: 'Iron', value: '0', unit: 'mg' },
  { name: 'Iodine', value: '-', unit: '' },
  { name: 'Magnesium', value: '0.1', unit: 'mg' },
  { name: 'Manganese', value: '-', unit: '' },
  { name: 'Phosphorus', value: '0.1', unit: 'mg' },
  { name: 'Potassium', value: '0.8', unit: 'mg' },
  { name: 'Selenium', value: '-', unit: '' },
  { name: 'Sodium', value: '0.4', unit: 'mg' },
  { name: 'Zinc', value: '-', unit: '' },
];

const FoodDetails = ({ uri, setUri }) => {
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
      setUri(null);
      navigation.navigate('Congratulations');
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  const redoMeal = () => {
    setUri(null);
    navigation.navigate('Main', { screen: 'CameraPage' });
  };

  const topRowNutrients = nutrientData.filter((nutrient) =>
    ['Calories', 'Proteins', 'Fat', 'Carbs'].includes(nutrient.name)
  );

  const otherNutrients = nutrientData.filter(
    (nutrient) => !['Calories', 'Proteins', 'Fat', 'Carbs'].includes(nutrient.name)
  );

  return (
    <View style={styles.container}>
      <Text style={styles.recipeTitle}>Fruits</Text>

      <View style={styles.topRow}>
        {topRowNutrients.map((nutrient, index) => (
          <View key={index} style={styles.nutrientContainer}>
            <View style={styles.outerCircle}>
              <View style={styles.innerCircle}>
                <Text style={styles.circleText}>{nutrient.value}</Text>
              </View>
              <Text style={styles.nutrientText}>{nutrient.name}</Text>
              <Text style={styles.unitText}>{nutrient.unit}</Text>
            </View>
          </View>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Nutritional Information:</Text>
      <View style={styles.nutrition}>
        {otherNutrients.map((nutrient, index) => (
          <View key={index} style={styles.nutrientRow}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.nutrientName}>{nutrient.name}</Text>
            <Text style={styles.nutrientValue}>
              {nutrient.value} {nutrient.unit}
            </Text>
          </View>
        ))}
      </View>

      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={redoMeal}>
          <Text style={styles.buttonText}>Retake picture</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => saveMeal(uri)}>
          <Text style={styles.buttonText}>Save meal</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, width: '100%' },
  recipeTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textTransform: 'uppercase',
    color: '#502810',
  },
  topRow: {
    marginTop: 15,
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  nutrientContainer: { alignItems: 'center', marginVertical: 5 },
  outerCircle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff6f3a',
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  innerCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  circleText: { fontSize: 14, color: '#ff6f3a', fontWeight: 'bold' },
  nutrientText: { fontSize: 12, marginBottom: 3, color: 'white', fontWeight: 'bold' },
  unitText: { fontSize: 10, color: 'white', opacity: 0.8, fontWeight: 'bold' },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginVertical: 5, color: '#502810' },
  nutrientRow: { flexDirection: 'row', alignItems: 'center', marginVertical: 5 },
  bullet: { fontSize: 20, color: '#502810', marginRight: 10 },
  nutrientName: { flex: 1, fontSize: 16, color: '#502810', opacity: 0.6 },
  nutrientValue: { fontSize: 16, color: '#978F86' },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    width: '100%',
  },
  button: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: '#ff6f3a',
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 600,
    color: '#fff',
    opacity: 0.8,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

export default FoodDetails;
