import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AuthForm from '../components/AuthForm';
import handleSignUp from '../routes/handleSignUp';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [emailError, setEmailError] = useState('');

  return (
    <AuthForm
      title="Sign Up"
      fields={['Email', 'Password', 'Confirm Password']}
      buttonText="Sign Up"
      onSubmit={(formData) => handleSignUp(formData, navigation, setEmailError)}
      footerText="Already have an account? Sign In"
      footerAction={() => navigation.navigate('SignInScreen')}
      errorMessage={emailError}
    />
  );
};

export default SignUpScreen;
