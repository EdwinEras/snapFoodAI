import AuthForm from '../components/AuthForm';

const SignInScreen = ({ navigation }) => {
  return (
    <AuthForm
      title="Sign In"
      fields={['Email', 'Password']}
      buttonText="Sign In"
      onSubmit={() => console.log('Signing In...')}
      footerText="Don't have an account? Sign Up"
      footerAction={() => navigation.navigate('SignUpScreen')}
    />
  );
};

export default SignInScreen;
