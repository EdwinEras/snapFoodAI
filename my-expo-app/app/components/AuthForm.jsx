import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import overlayImage from '../../assets/avatarBg.png';
import BackgroundImage from '../../assets/avatar_background.jpg';

const AuthForm = ({ title, fields, buttonText, onSubmit, footerText, footerAction }) => {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  const handlePress = async () => {
    if (!validateEmail(formData.Email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    await onSubmit(
      formData,
      () => {
        setErrorMessage('');
        setEmailError('');
        setIsSubmitting(false);
      },
      (error) => {
        setErrorMessage(error);
        setIsSubmitting(false);
      }
    );
  };

  return (
    <ImageBackground source={BackgroundImage} style={styles.background} resizeMode="cover">
      <View style={styles.container}>
        <View style={styles.overlayContainer}>
          <Image source={overlayImage} style={styles.overlayImage} resizeMode="contain" />
        </View>

        <View style={styles.glassContainer}>
          <Text style={styles.title}>{title}</Text>
          {fields.map((field, index) => (
            <TextInput
              key={index}
              style={[styles.input, { color: '#fff' }]}
              placeholder={field}
              placeholderTextColor="#ccc"
              secureTextEntry={field.includes('Password')}
              underlineColorAndroid="transparent"
              textContentType="none"
              autoComplete="off"
              inputMode="text"
              value={String(formData[field] || '')}
              onChangeText={(value) => handleInputChange(field, value)}
            />
          ))}

          {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
          {emailError && <Text style={styles.errorText}>{emailError}</Text>}

          <TouchableOpacity style={styles.button} onPress={handlePress} disabled={isSubmitting}>
            <Text style={styles.buttonText}>{buttonText}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={footerAction}>
            <Text style={styles.linkText}>{String(footerText)}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: '100%',
  },
  overlayContainer: {
    position: 'absolute',
    top: 60,
    alignItems: 'center',
    width: '100%',
  },
  overlayImage: {
    width: 150,
    height: 150,
  },
  glassContainer: {
    width: '90%',
    padding: 35,
    borderRadius: 15,
    backgroundColor: 'rgba(245, 245, 245, 0.21)',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  input: {
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    color: '#fff',
  },
  button: {
    backgroundColor: '#145163',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    width: '100%',
    shadowColor: 'rgba(255, 255, 255, 0.8)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 6,
    elevation: 6,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  linkText: {
    marginTop: 12,
    color: '#fff',
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
  errorText: {
    color: '#bb2518',
    fontWeight: 600,
    marginTop: 8,
    fontSize: 14,
    marginBottom: 10,
  },
});

export default AuthForm;
