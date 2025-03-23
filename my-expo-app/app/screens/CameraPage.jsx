import { useCameraPermissions } from "expo-camera";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import RenderPicture from "app/components/RenderPicture";
import RenderCamera from "app/components/RenderCamera";
import PhotoInfo from "./PhotoInfo";
  
const CameraPage = () => {
    const [permission, requestPermission] = useCameraPermissions();
    const [uri, setUri] = useState(null);
  
    if (!permission) {
      return null;
    }
  
    if (!permission.granted) {
      return (
        <View style={styles.container}>
          <Text style={{ textAlign: "center" }}>
            We need your permission to use the camera
          </Text>
          <Button onPress={requestPermission} title="Grant permission" />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        {uri ? <PhotoInfo uri={uri} setUri={setUri}/> 
            : <RenderCamera setUri={setUri}/>}
      </View>
    );
  }
  
const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
}
});

export default CameraPage;
