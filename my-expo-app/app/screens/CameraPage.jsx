import { useCameraPermissions } from 'expo-camera';
import { Button, StyleSheet, Text, View } from 'react-native';
import RenderCamera from 'app/components/RenderCamera';
import RenderPicture from 'app/components/RenderPicture';
import { useImage } from '../components/ImageContext';

const CameraPage = () => {
  const [permission, requestPermission] = useCameraPermissions();
  const { uri, setUri } = useImage();

  if (!permission) {
    return null;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to use the camera</Text>
        <Button onPress={requestPermission} title="Grant permission" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, width: '100%' }}>
      {uri ? <RenderPicture uri={uri} setUri={setUri} /> : <RenderCamera setUri={setUri} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});

export default CameraPage;
