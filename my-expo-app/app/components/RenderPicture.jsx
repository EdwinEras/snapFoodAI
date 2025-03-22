import { Button, View, Pressable, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Image } from "expo-image";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";


const RenderPicture = ({ uri, setUri }) => {
    const [n, setN] = useState(0);
    const navigation = useNavigation();

    useEffect(() => {
        const loadCounter = async () => {
            const storedN = await AsyncStorage.getItem("meal_counter");
            setN(storedN ? parseInt(storedN) : 0);
        };
        loadCounter();
    }, []);
    
    const saveMeal = async (uri) => {
        try {
            console.log("meal_"+n+": "+uri);
            await AsyncStorage.setItem("meal_"+n, uri);
            await AsyncStorage.setItem("meal_counter", (n+1).toString());
            setN((prevN) => prevN + 1);
            console.log("Data saved successfully!");
            setUri(null);
            navigation.navigate('Profile');
        } catch (error) {
            console.error("Error saving data:", error);
        }
    };

    return (
    <View>
        <Image
        source={{ uri }}
        contentFit="contain"
        style={{ width: 500, aspectRatio: 1 }}
        />
        <Button onPress={() => setUri(null)} title="Re-take picture" />
        <Button onPress={() => saveMeal(uri)} title="Save meal" />
    </View>
    );
};

export default RenderPicture;