import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';
import avatarBg from '../../assets/avatarBg.png';

const UserInfo = () => {
  const navigationHome = useNavigation();
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

  const handleChange = (key, value) => setFormData({ ...formData, [key]: value });

  const handleFinish = () => navigationHome.navigate('Main', { screen: 'Home' });

  const renderSlide = (label, key, placeholder, keyboardType = 'default') => (
    <ImageBackground source={avatarBg} style={styles.avatarBg}>
      <View style={styles.overlay} />
      <View style={styles.slide}>
        <View style={styles.glassContainer}>
          <Text style={styles.label}>{label}</Text>
          <TextInput
            style={styles.input}
            placeholder={placeholder}
            keyboardType={keyboardType}
            value={formData[key]}
            onChangeText={(text) => handleChange(key, text)}
          />
        </View>
      </View>
    </ImageBackground>
  );

  return (
    <Swiper loop={false} showsPagination dotStyle={styles.dot} activeDotStyle={styles.activeDot}>
      {renderSlide('First Name', 'name', 'Enter your first name')}
      {renderSlide('Last Name', 'lastName', 'Enter your last name')}
      {renderSlide('Email', 'email', 'Enter your email', 'email-address')}
      {renderSlide('Height', 'height', 'Enter your height', 'numeric')}
      {renderSlide('Weight', 'weight', 'Enter your weight', 'numeric')}
      {renderSlide('Age', 'age', 'Enter your age', 'numeric')}

      <ImageBackground source={avatarBg} style={styles.avatarBg}>
        <View style={styles.overlay} />
        <View style={styles.slide}>
          <View style={styles.glassContainer}>
            <Text style={styles.title}>What is your gender?</Text>
            <Text style={styles.subtitle}>Gender influences basal metabolic rate.</Text>
            {['Female', 'Male', 'Other'].map((gender) => (
              <TouchableOpacity
                key={gender}
                style={[styles.option, formData.gender === gender && styles.selectedOption]}
                onPress={() => handleChange('gender', gender)}>
                <Text
                  style={[styles.optionText, formData.gender === gender && styles.selectedText]}>
                  {gender}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ImageBackground>

      <ImageBackground source={avatarBg} style={styles.avatarBg}>
        <View style={styles.overlay} />
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
            ].map(({ label, description }) => (
              <TouchableOpacity
                key={label}
                style={[styles.option, formData.activityLevel === label && styles.selectedOption]}
                onPress={() => handleChange('activityLevel', label)}>
                <View>
                  <Text
                    style={[
                      styles.optionText,
                      formData.activityLevel === label && styles.selectedText,
                    ]}>
                    {label}
                  </Text>
                  <Text style={styles.optionDescription}>{description}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ImageBackground>

      <ImageBackground source={avatarBg} style={styles.avatarBg}>
        <View style={styles.overlay} />
        <View style={styles.slide}>
          <TouchableOpacity style={styles.nextButton} onPress={handleFinish}>
            <Text style={styles.nextText}>Submit</Text>
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
    padding: 30,
    borderRadius: 15,
    backgroundColor: 'rgba(245, 245, 245, 0.41)',
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  avatarBg: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(149, 87, 45, 0.3)',
  },
  label: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
    textTransform: 'uppercase',
  },
  subtitle: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    marginBottom: 5,
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
  option: {
    width: 280,
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#F7F5F2',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  selectedOption: {
    backgroundColor: '#FF8C19',
    borderColor: '#FF8C19',
  },
  optionText: {
    fontSize: 16,
    color: '#2D2B29',
    marginBottom: 3,
    fontWeight: 'bold',
  },
  selectedText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  nextButton: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: '#2D2B29',
    borderRadius: 8,
    textTransform: 'uppercase',
    alignItems: 'center',
  },
  nextText: {
    fontSize: 18,
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  dot: {
    backgroundColor: '#DFDCD8',
  },
  activeDot: {
    backgroundColor: '#FF8C19',
  },
});

export default UserInfo;
