import { ScrollView, SafeAreaView, View, StyleSheet } from 'react-native';
import RenderPicture from 'app/components/RenderPicture';
import AnalizedDetails from 'app/components/AnalizedDetails';

const PhotoInfo = ({uri, setUri}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <RenderPicture uri={uri} setUri={setUri}/>
        <View style={styles.container}>
          <AnalizedDetails />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'start',
    // marginTop: -30,
    marginHorizontal: 15,
    backgroundColor: '#F7F5F2',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  image: { width: '100%', height: 300 },
});

export default PhotoInfo;
