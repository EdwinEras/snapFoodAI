import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';

const UserInfoSwiper = ({ navigation }) => {
  const redirect = useNavigation();
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    height: '',
    weight: '',
    age: '',
    gender: '',
  });

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleFinish = () => {
    redirect.navigate('Home');
  };

  return (
    <Swiper loop={false} showsPagination={true}>
      <View style={styles.slide}>
        <Text style={styles.label}>First Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your first name"
          value={formData.name}
          onChangeText={(text) => handleChange('name', text)}
        />
      </View>

      <View style={styles.slide}>
        <Text style={styles.label}>Last Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your last name"
          value={formData.lastName}
          onChangeText={(text) => handleChange('lastName', text)}
        />
      </View>

      <View style={styles.slide}>
        <Text style={styles.label}>Height</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your height"
          keyboardType="numeric"
          value={formData.height}
          onChangeText={(text) => handleChange('height', text)}
        />
      </View>

      <View style={styles.slide}>
        <Text style={styles.label}>Weight</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your weight"
          keyboardType="numeric"
          value={formData.weight}
          onChangeText={(text) => handleChange('weight', text)}
        />
      </View>

      <View style={styles.slide}>
        <Text style={styles.label}>Age</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your age"
          keyboardType="numeric"
          value={formData.age}
          onChangeText={(text) => handleChange('age', text)}
        />
      </View>

      <View style={styles.slide}>
        <Text style={styles.label}>Gender</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your gender"
          value={formData.gender}
          onChangeText={(text) => handleChange('gender', text)}
        />
      </View>

      <View style={styles.slide}>
        <Button title="Finish" onPress={handleFinish} />
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  label: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
    fontSize: 18,
  },
});

export default UserInfoSwiper;
