import { View, StyleSheet } from 'react-native';

import FoodInfo from 'app/screens/FoodInfo';

const RenderPicture = ({ uri, setUri }) => {
  return (
    <View >
      <FoodInfo uri={uri} setUri={setUri}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
    marginTop: 50,
  },
  imageContainer: { alignItems: 'center', marginTop: '20'},
  image: { width: '100%', height: 300 },
});

export default RenderPicture;
