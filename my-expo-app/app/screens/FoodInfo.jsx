import { ScrollView, SafeAreaView, View, StyleSheet } from 'react-native';
import FoodDetails from '../components/FoodDetails';
import FoodImage from 'app/components/FoodImage';
import imgRecognition from 'app/routes/google_vision';
import { useEffect, useState } from 'react';
import getNutrionalFacts from '../routes/nutitionalFacts'
import Loading from './Loading';

const FoodInfo = ({uri, setUri}) => {
  const [meal, setMeal] = useState([]);
  const [nutFact, setNutFact] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchLabels = async (uri) => {
      try{
      setLoading(true);
      const data = await imgRecognition(uri)
      console.log(data);
      setMeal(data.labels);
    } catch (err) {
      console.error("Error in imgRecognition:", err);
    }
    setLoading(false);
      // setMeal(['APPLE']);
      // const nutri = await getNutrionalFacts(meal[0])
      // .then(res => res)
      // .catch(err => err);
      // console.log(nutri);
      // setNutFact(nutri);
      // setLoading(false);
    }
    fetchLabels(uri);
  }, []);

  useEffect(() => {
    if (!meal || meal.length === 0) return; // Prevent running with undefined meal
    const fetchNutrition = async (meal) => {
      setLoading(true);
      try {
        const nutri = await getNutrionalFacts(meal[0]);
        console.log(nutri);
        setNutFact(nutri);
      } catch (err) {
        console.error("Error in getNutritionalFacts:", err);
      }
  
      setLoading(false);
    };
    fetchNutrition(meal);
  }, [meal]);

  return (
    <SafeAreaView>
      {loading? <Loading />: 
      <ScrollView>
        <View>
          <FoodImage uri={uri} />
        </View>
        <View style={styles.container}>
          <FoodDetails uri={uri} setUri={setUri} meal={meal} nutri={nutFact}/>
        </View>
      </ScrollView>}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'start',
    marginHorizontal: 15,
    backgroundColor: '#F7F5F2',
    marginTop:-30,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  imageContainer: { alignItems: 'center', marginTop: '20'},
  image: { width: '100%', height: 300 },
});

export default FoodInfo;
