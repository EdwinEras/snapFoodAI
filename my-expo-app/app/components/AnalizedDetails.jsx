import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const nutrientData = [
  { name: 'Calories', value: '52', unit: 'kcal' },
  { name: 'Proteins', value: '0.3', unit: 'g' },
  { name: 'Fat', value: '0.2', unit: 'g' },
  { name: 'Saturated fatty acids', value: '0', unit: 'g' },
  { name: 'Sugars', value: '20', unit: 'g' },
  { name: 'Vitamin A', value: '6', unit: 'mg' },
  { name: 'Vitamin B6', value: '0', unit: '%' },
  { name: 'Vitamin C', value: '7', unit: '%' },
  { name: 'Vitamin D', value: '0', unit: '%' },
  { name: 'Calcium', value: '0', unit: '%' },
  { name: 'Iron', value: '0', unit: 'mg' },
  { name: 'Magnesium', value: '1', unit: '%' },
  { name: 'Potassium', value: '107', unit: 'mg' },
];

const AnalizedDetails = () => {
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
      <Text style={styles.recipeTitle}>Apple</Text>

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
    backgroundColor: '#FF7E5F',
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
  circleText: { fontSize: 14, color: '#FF7E5F', fontWeight: 'bold' },
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
    backgroundColor: '#FF7E5F',
    borderRadius: 5,
  },
  buttonText: { fontSize: 16, fontWeight: '500', color: '#fff', opacity: 0.8 },
});

export default AnalizedDetails;
