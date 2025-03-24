import { ScrollView, SafeAreaView, View, StyleSheet, Pressable, Text } from 'react-native';
import { Image } from 'expo-image';
import FoodDetails from '../components/FoodDetails';
import FoodImage from 'app/components/FoodImage';

const FoodInfo = ({uri, setUri}) => {
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
