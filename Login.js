// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, Alert } from 'react-native';

// const Login = ({ switchToSignup, users, onLoginSuccess }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   // Email format validation (basic regex)
//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const handleLogin = () => {
//     if (!email || !password) {
//       Alert.alert('Error', 'Please fill in all fields.');
//       return;
//     }

//     if (!validateEmail(email)) {
//       Alert.alert('Error', 'Invalid email format.');
//       return;
//     }

//     // Check if the email exists and the password matches
//     const user = users.find((user) => user.email === email);

//     if (!user) {
//       Alert.alert('Error', 'Email not found. Please sign up.');
//       return;
//     }

//     if (user.password !== password) {
//       Alert.alert('Error', 'Incorrect password.');
//       return;
//     }

//     Alert.alert('Success', `Logged in as ${email}`);
//     onLoginSuccess(user); // Notify App.js about successful login
//   };

//   return (
//     <View style={{ padding: 20, justifyContent: 'center', flex: 1 }}>
//       <Text>Email:</Text>
//       <TextInput
//         style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
//         value={email}
//         onChangeText={setEmail}
//         placeholder="Enter your email"
//         keyboardType="email-address"
//       />
//       <Text>Password:</Text>
//       <TextInput
//         style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
//         value={password}
//         onChangeText={setPassword}
//         placeholder="Enter your password"
//         secureTextEntry
//       />
//       <View style={{ marginBottom: 10 }}>
//         <Button title="Login" onPress={handleLogin} />
//       </View>
//       <Button title="Don't have an account? Sign Up" onPress={switchToSignup} />
//     </View>
//   );
// };

// export default Login;















































import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import axios from 'axios';

const Login = ({ switchToSignup, onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://172.20.10.4:3000/login', { email, password });
      if (response.status === 200) {
        Alert.alert('Success', 'Logged in successfully!');
        onLoginSuccess();
      } else {
        Alert.alert('Error', 'Incorrect email or password');
      }
    } catch (error) {
      Alert.alert('Error', 'An error occurred. Please try again later.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to LuxeLook!</Text>
      <Text style={styles.subtitle}>Log in to continue</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email Address"
        placeholderTextColor="#bfbfbf"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        placeholderTextColor="#bfbfbf"
        secureTextEntry
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.switchButton} onPress={switchToSignup}>
        <Text style={styles.switchText}>New here? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
    backgroundColor: '#F5E0E8', // Soft pink background for a warm, inviting feel
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FF4081', // Bright pink for a bold and energetic title
    textAlign: 'center',
    marginBottom: 20,
    letterSpacing: 1.5, // Added spacing to make the title stand out
  },
  subtitle: {
    fontSize: 18,
    color: '#F48FB1', // Light pink for a soft, calming subtitle
    textAlign: 'center',
    marginBottom: 40,
  },
  input: {
    height: 55,
    borderColor: '#F06292', // Muted pink for the input border
    borderWidth: 1.5,
    borderRadius: 15,
    paddingHorizontal: 15,
    marginBottom: 25,
    color: '#ffffff', // White text for easy readability
    backgroundColor: '#F8BBD0', // Light pink background for the inputs
    fontSize: 16,
    shadowColor: '#000', // Subtle shadow for depth
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  loginButton: {
    backgroundColor: '#FF4081', // Bright pink button
    paddingVertical: 16,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 18,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 5 },
    elevation: 8,
  },
  buttonText: {
    color: '#ffffff', // White text for contrast on the button
    fontSize: 18,
    fontWeight: 'bold',
  },
  switchButton: {
    alignItems: 'center',
    marginTop: 25,
  },
  switchText: {
    color: '#FF4081', // Bright pink for the link text
    fontSize: 16,
    fontWeight: '600',
  },
});
