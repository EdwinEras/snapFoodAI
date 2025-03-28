import axios from "axios";

const route = "http://localhost:3000";

const handleSignUp = async (formData, navigation, onError, onSuccess) => {
    try {
        const response = await axios.post(`${route}/user`, formData, {
            headers: { 'Content-Type': 'application/json' },
        });

        const data = response.data;

        if (data.error) {
            if (data.error.includes('email already in use')) {
                onError('This email is already in use');
            } else {
                onError(data.error); 
            }
            return;
        }

        console.log('User created:', data);
        onSuccess?.(data); 
        navigation?.navigate('UserInfo', { userId: data.userId });
    } catch (error) {
        console.error('Signup Error:', error);
        onError('An error occurred. Please try again.');
    }
};

export default handleSignUp;
