import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import NutrientList from './NutrientList';
import { useNavigation } from '@react-navigation/native';

const FoodDetails = ({ nutrientList }) => {
  const navigation = useNavigation();

  const handleSaveMeal = () => {
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.recipeTitle}>Toast with butter and honey</Text>
      <View style={styles.nutrition}>
        <View style={styles.nutrientContainer}>
          <View style={styles.outerCircle}>
            <View style={styles.innerCircle}>
              <Text style={styles.circleText}>299</Text>
            </View>
            <Text style={styles.nutrientText}>Calories</Text>
            <Text style={styles.unitText}>kcal</Text>
          </View>
        </View>

        <View style={styles.nutrientContainer}>
          <View style={styles.outerCircle}>
            <View style={styles.innerCircle}>
              <Text style={styles.circleText}>46</Text>
            </View>
            <Text style={styles.nutrientText}>Carbs</Text>
            <Text style={styles.unitText}>g</Text>
          </View>
        </View>

        <View style={styles.nutrientContainer}>
          <View style={styles.outerCircle}>
            <View style={styles.innerCircle}>
              <Text style={styles.circleText}>20</Text>
            </View>
            <Text style={styles.nutrientText}>Protein</Text>
            <Text style={styles.unitText}>g</Text>
          </View>
        </View>

        <View style={styles.nutrientContainer}>
          <View style={styles.outerCircle}>
            <View style={styles.innerCircle}>
              <Text style={styles.circleText}>1</Text>
            </View>
            <Text style={styles.nutrientText}>Fat</Text>
            <Text style={styles.unitText}>g</Text>
          </View>
        </View>
      </View>
      <NutrientList />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSaveMeal}>
          <Text style={styles.buttonText}>Save This Meal</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, width: '100%' },
  recipeTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10, textTransform: 'uppercase' },
  nutrition: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  nutrientContainer: {
    alignItems: 'center',
    marginVertical: 5,
  },
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
  circleText: {
    fontSize: 14,
    color: '#FF8C19',
    fontWeight: 'bold',
  },
  nutrientText: {
    fontSize: 12,
    marginBottom: 3,
    color: 'white',
    fontWeight: 'bold',
  },
  unitText: {
    fontSize: 10,
    color: 'white',
    opacity: 0.8,
    fontWeight: 'bold',
  },
});

export default FoodDetails;
