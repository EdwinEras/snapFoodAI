import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import avatarBg from '../../assets/avatarBg.png';

const UserInfo = () => {
  const navigationHome = useNavigation();
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    height: '',
    weight: '',
    age: '',
    gender: '',
    activityLevel: '',
  });

  const handleChange = (key, value) => setFormData({ ...formData, [key]: value });

  const handleNext = () => setCurrentPage((prev) => prev + 1);
  const handleBack = () => setCurrentPage((prev) => prev - 1);
  const handleFinish = () => navigationHome.navigate('Main', { screen: 'Home' });

  return (
    <ImageBackground source={avatarBg} style={styles.avatarBg}>
      <View style={styles.overlay} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.slide}>
          <Text style={styles.entryText}>
            Make Every Meal Count! Scan Food, Earn Rewards, and Keep Your Pine Marten Smiling!
          </Text>
          <View style={styles.glassContainer}>
            {currentPage === 1 && (
              <>
                <Text style={styles.title}>Enter Your Details</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Full Name"
                  value={formData.name}
                  onChangeText={(text) => handleChange('fullName', text)}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  keyboardType="email-address"
                  value={formData.email}
                  onChangeText={(text) => handleChange('email', text)}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Height"
                  keyboardType="numeric"
                  value={formData.height}
                  onChangeText={(text) => handleChange('height', text)}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Weight"
                  keyboardType="numeric"
                  value={formData.weight}
                  onChangeText={(text) => handleChange('weight', text)}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Age"
                  keyboardType="numeric"
                  value={formData.age}
                  onChangeText={(text) => handleChange('age', text)}
                />
              </>
            )}

            {currentPage === 2 && (
              <>
                <Text style={styles.title}>What is your gender?</Text>
                <Text style={styles.subtitle}>Gender influences basal metabolic rate.</Text>
                {['Female', 'Male', 'Other'].map((gender) => (
                  <TouchableOpacity
                    key={gender}
                    style={[styles.option, formData.gender === gender && styles.selectedOption]}
                    onPress={() => handleChange('gender', gender)}>
                    <Text
                      style={[
                        styles.optionText,
                        formData.gender === gender && styles.selectedText,
                      ]}>
                      {gender}
                    </Text>
                  </TouchableOpacity>
                ))}
              </>
            )}

            {currentPage === 3 && (
              <>
                <Text style={styles.title}>Your activity level</Text>
                <Text style={styles.subtitle}>It helps calculate your daily calorie needs.</Text>
                {[
                  { label: 'Not Very Active', description: 'Little to no exercise' },
                  { label: 'Lightly Active', description: 'Light exercise 1-3 days/week' },
                  { label: 'Moderately Active', description: 'Moderate exercise 3-5 days/week' },
                  { label: 'Very Active', description: 'Hard exercise 6-7 days/week' },
                ].map(({ label, description }) => (
                  <TouchableOpacity
                    key={label}
                    style={[
                      styles.option,
                      formData.activityLevel === label && styles.selectedOption,
                    ]}
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
              </>
            )}
          </View>

          <View style={styles.buttonContainer}>
            {currentPage > 1 && (
              <TouchableOpacity style={styles.backButton} onPress={handleBack}>
                <Text style={styles.backText}>Back</Text>
              </TouchableOpacity>
            )}
            {currentPage < 3 ? (
              <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
                <Text style={styles.nextText}>Next</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={styles.nextButton} onPress={handleFinish}>
                <Text style={styles.nextText}>Submit</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 100,
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
  entryText: {
    fontSize: 22,
    fontWeight: 800,
    color: '#FF7E5F',
    textAlign: 'center',
  },
  avatarBg: { flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center' },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(149, 87, 45, 0.3)',
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    color: '#2D2B29',
    textAlign: 'center',
    marginBottom: 18,
    textTransform: 'uppercase',
  },
  subtitle: { fontSize: 16, color: '#2D2B29', textAlign: 'center', marginBottom: 18 },
  input: {
    width: 300,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderWidth: 1.5,
    borderColor: '#8C8279',
    borderRadius: 6,
    backgroundColor: '#F7F5F2',
    fontSize: 18,
    marginBottom: 14,
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
  selectedOption: { backgroundColor: '#FF7E5F', borderColor: '#FF7E5F' },
  optionText: { fontSize: 16, color: '#2D2B29', fontWeight: 'bold' },
  selectedText: { color: '#fff' },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginTop: 40,
  },
  nextButton: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: '#2D2B29',
    borderRadius: 8,
    width: '48%',
    alignItems: 'center',
  },
  nextText: { fontSize: 18, color: '#fff', textTransform: 'uppercase', fontWeight: 'bold' },
  backButton: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: '#FF7E5F',
    borderRadius: 8,
    alignItems: 'center',
    width: '48%',
  },
  backText: { fontSize: 18, color: '#fff', textTransform: 'uppercase', fontWeight: 'bold' },
});

export default UserInfo;
