import { ScrollView, SafeAreaView, View, StyleSheet, Pressable, Text } from 'react-native';
import FoodImage from '../components/FoodImage';
import FoodDetails from '../components/FoodDetails';
import RenderPicture from 'app/components/RenderPicture';
import { useImage } from '../components/ImageContext';

const FoodInfo = () => {
  const {uri, setUri} = useImage();
  
  return (
    <SafeAreaView>
      <ScrollView>
        {uri? <RenderPicture uri={uri} />: <FoodImage />}
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
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  
});

export default FoodInfo;
