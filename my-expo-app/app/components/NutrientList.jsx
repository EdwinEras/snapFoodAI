import { View, Text, StyleSheet, ScrollView } from 'react-native';

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

const NutrientList = () => {
  return (
    <ScrollView style={styles.container}>
    <Text style={styles.sectionTitle}>Nutritional Information:</Text>
    <View style={styles.nutrition}>
      {nutrientData
        .filter(nutrient => !['Calories', 'Proteins', 'Fat', 'Carbs'].includes(nutrient.name))
        .map((nutrient, index) => (
          <View key={index} style={styles.nutrientContainer}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.nutrientName}>{nutrient.name}</Text>
            <Text style={styles.nutrientValue}>
              {nutrient.value} {nutrient.unit}
            </Text>
          </View>
        ))}
    </View>
  </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { width: '100%', marginTop: 40 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginVertical: 5, color: '#007891' },
  nutrition: { marginTop: 15 },
  nutrientContainer: { flexDirection: 'row', alignItems: 'center', marginVertical: 5 },
  bullet: { fontSize: 20, color: '#007891', marginRight: 10 },
  nutrientName: { flex: 1, fontSize: 16, color: '#007891', opacity: 0.6 },
  nutrientValue: { fontSize: 16, color: '#978F86' },
});

export default NutrientList;
