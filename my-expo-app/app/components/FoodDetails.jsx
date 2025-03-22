import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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

const FoodDetails = () => {
  const navigation = useNavigation();

  const handleSaveMeal = () => {
    navigation.navigate('Home');
  };

  const topRowNutrients = nutrientData.filter((nutrient) =>
    ['Calories', 'Proteins', 'Fat', 'Carbs'].includes(nutrient.name)
  );

  const otherNutrients = nutrientData.filter(
    (nutrient) => !['Calories', 'Proteins', 'Fat', 'Carbs'].includes(nutrient.name)
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.recipeTitle}>Toast with butter and honey</Text>

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

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSaveMeal}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, width: '100%' },
  recipeTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10, textTransform: 'uppercase' },
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
    backgroundColor: '#FF8C19',
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
  circleText: { fontSize: 14, color: '#FF8C19', fontWeight: 'bold' },
  nutrientText: { fontSize: 12, marginBottom: 3, color: 'white', fontWeight: 'bold' },
  unitText: { fontSize: 10, color: 'white', opacity: 0.8, fontWeight: 'bold' },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginVertical: 5, color: '#007891' },
  nutrientRow: { flexDirection: 'row', alignItems: 'center', marginVertical: 5 },
  bullet: { fontSize: 20, color: '#007891', marginRight: 10 },
  nutrientName: { flex: 1, fontSize: 16, color: '#007891', opacity: 0.6 },
  nutrientValue: { fontSize: 16, color: '#978F86' },
  buttonsContainer: { marginTop: 30, alignItems: 'flex-end' },
  button: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#FF8C19',
    borderRadius: 5,
  },
  buttonText: { fontSize: 16, fontWeight: '500', color: '#fff', opacity: 0.8 },
});

export default FoodDetails;
