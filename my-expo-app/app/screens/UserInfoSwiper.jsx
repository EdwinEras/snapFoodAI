import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';
import { ImageBackground } from 'react-native';

const UserInfoSwiper = () => {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    height: '',
    weight: '',
    age: '',
    gender: '',
    activityLevel: '',
  });

  const [selectedActivity, setSelectedActivity] = useState(null);
  const [selectedGender, setSelectedGender] = useState(null);

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleFinish = () => {
    navigation.navigate('Home');
  };

  const backgroundImage = {
    uri: 'https://images.unsplash.com/photo-1478144592103-25e218a04891?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  };

  return (
    <Swiper
      loop={false}
      showsPagination={true}
      dotStyle={{ backgroundColor: '#DFDCD8' }}
      activeDotStyle={{ backgroundColor: '#FF8C19' }}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.slide}>
          <View style={styles.glassContainer}>
            <Text style={styles.label}>First Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your first name"
              value={formData.name}
              onChangeText={(text) => handleChange('name', text)}
            />
          </View>
        </View>
      </ImageBackground>

      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.slide}>
          <View style={styles.glassContainer}>
            <Text style={styles.label}>Last Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your last name"
              value={formData.lastName}
              onChangeText={(text) => handleChange('lastName', text)}
            />
          </View>
        </View>
      </ImageBackground>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.slide}>
          <View style={styles.glassContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              keyboardType="email-address"
              value={formData.email}
              onChangeText={(text) => handleChange('email', text)}
            />
          </View>
        </View>
      </ImageBackground>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.slide}>
          <View style={styles.glassContainer}>
            <Text style={styles.label}>Height</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your height"
              keyboardType="numeric"
              value={formData.height}
              onChangeText={(text) => handleChange('height', text)}
            />
          </View>
        </View>
      </ImageBackground>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.slide}>
          <View style={styles.glassContainer}>
            <Text style={styles.label}>Weight</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your weight"
              keyboardType="numeric"
              value={formData.weight}
              onChangeText={(text) => handleChange('weight', text)}
            />
          </View>
        </View>
      </ImageBackground>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.slide}>
          <View style={styles.glassContainer}>
            <Text style={styles.label}>Age</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your age"
              keyboardType="numeric"
              value={formData.age}
              onChangeText={(text) => handleChange('age', text)}
            />
          </View>
        </View>
      </ImageBackground>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.slide}>
          <View style={styles.glassContainer}>
            <Text style={styles.title}>What is your gender?</Text>
            <Text style={styles.subtitle}>
              Gender influences basal metabolic rate, enabling more accurate calorie calculations.
            </Text>

            {['Female', 'Male', 'Other'].map((gender) => (
              <TouchableOpacity
                key={gender}
                style={[styles.option, selectedGender === gender && styles.selectedOption]}
                onPress={() => {
                  setSelectedGender(gender);
                  handleChange('gender', gender);
                }}>
                <Text style={[styles.optionText, selectedGender === gender && styles.selectedText]}>
                  {gender}
                </Text>
                <View style={[styles.radio, selectedGender === gender && styles.radioSelected]} />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ImageBackground>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.slide}>
          <View style={styles.glassContainer}>
            <Text style={styles.title}>Your activity level</Text>
            <Text style={styles.subtitle}>It helps calculate your daily calorie needs.</Text>

            {[
              { label: 'Not Very Active', description: 'Little to no exercise' },
              { label: 'Lightly Active', description: 'Light exercise 1-3 days/week' },
              { label: 'Moderately Active', description: 'Moderate exercise 3-5 days/week' },
              { label: 'Very Active', description: 'Hard exercise 6-7 days/week' },
              { label: 'Extra Active', description: 'Very hard exercise or training' },
            ].map((item) => (
              <TouchableOpacity
                key={item.label}
                style={[styles.option, selectedActivity === item.label && styles.selectedOption]}
                onPress={() => {
                  setSelectedActivity(item.label);
                  handleChange('activityLevel', item.label);
                }}>
                <View>
                  <Text
                    style={[
                      styles.optionText,
                      selectedActivity === item.label && styles.selectedText,
                    ]}>
                    {item.label}
                  </Text>
                  <Text style={styles.optionDescription}>{item.description}</Text>
                </View>
                <View
                  style={[styles.radio, selectedActivity === item.label && styles.radioSelected]}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ImageBackground>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.slide}>
            <TouchableOpacity style={styles.nextButton} onPress={handleFinish}>
              <Text style={styles.nextText}>Finish</Text>
            </TouchableOpacity>
        </View>
      </ImageBackground>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  glassContainer: {
    width: '90%',
    paddingHorizontal: 35,
    paddingVertical: 50,
    borderRadius: 15,
    backgroundColor: 'rgba(245, 245, 245, 0.41)',
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
    textTransform: 'uppercase',
  },
  input: {
    width: 250,
    padding: 12,
    borderWidth: 1.5,
    borderColor: '#BBB5AE',
    borderRadius: 6,
    backgroundColor: '#F7F6F5',
    fontSize: 18,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
    marginBottom: 30,
  },
  option: {
    width: '90%',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  selectedOption: {
    backgroundColor: '#F8B400',
    borderColor: '#F8B400',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  selectedText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  nextButton: {
    width: '90%',
    paddingVertical: 15,
    backgroundColor: '#F8B400',
    borderRadius: 30,
    alignItems: 'center',
  },
  nextText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default UserInfoSwiper;
