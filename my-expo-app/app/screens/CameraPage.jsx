import { useCameraPermissions } from "expo-camera";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import RenderCamera from "app/components/RenderCamera";
  
const CameraPage = () => {
    const [permission, requestPermission] = useCameraPermissions();
    // const [uri, setUri] = useState(null);
  
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
        {/* {uri ? <FoodInfo uri={uri} setUri={setUri}/> : <RenderCamera setUri={setUri}/> */}
        <RenderCamera />
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
