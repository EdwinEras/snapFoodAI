import { ScrollView, SafeAreaView, View, StyleSheet } from 'react-native';
import FoodDetails from '../components/FoodDetails';
import FoodImage from 'app/components/FoodImage';
import analyzeImage from 'app/routes/google_vision';
import { useEffect } from 'react';
// import ImageResizer from 'react-native-image-resizer';

const FoodInfo = ({uri, setUri}) => {
  useEffect(() => {
    const labelImage = async (uri) => {
      // const resized = await ImageResizer.createResizedImage(uri, 640, 480, 'JPEG', 80);
      const data = await analyzeImage(uri)
      .then(res => res)
      .catch(err => err);
      console.log(data);
    }
    labelImage(uri);
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <FoodImage uri={uri} />
        </View>
        <View style={styles.container}>
          <FoodDetails uri={uri} setUri={setUri}/>
        </View>
      </ScrollView>
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
