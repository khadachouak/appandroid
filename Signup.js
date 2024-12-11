// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, Alert } from 'react-native';

// const Signup = ({ switchToLogin, users, setUsers }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   // Email format validation (basic regex)
//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const handleSignup = () => {
//     if (!email || !password || !confirmPassword) {
//       Alert.alert('Error', 'Please fill in all fields.');
//       return;
//     }

//     if (!validateEmail(email)) {
//       Alert.alert('Error', 'Invalid email format.');
//       return;
//     }

//     // Check if the email is already used
//     if (users.find((user) => user.email === email)) {
//       Alert.alert('Error', 'This email is already registered.');
//       return;
//     }

//     if (password !== confirmPassword) {
//       Alert.alert('Error', 'Passwords do not match.');
//       return;
//     }

//     if (password.length < 6) {
//       Alert.alert('Error', 'Password should be at least 6 characters long.');
//       return;
//     }

//     // If validation passes, register the user
//     setUsers([...users, { email, password }]);
//     Alert.alert('Success', 'Account created successfully!');
//     switchToLogin(); // Switch to Login page after signup
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
//       <Text>Confirm Password:</Text>
//       <TextInput
//         style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
//         value={confirmPassword}
//         onChangeText={setConfirmPassword}
//         placeholder="Confirm your password"
//         secureTextEntry
//       />
//       <View style={{ marginBottom: 10 }}>
//         <Button title="Sign Up" onPress={handleSignup} />
//       </View>
//       <Button title="Already have an account? Login" onPress={switchToLogin} />
//     </View>
//   );
// };

// export default Signup;































// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, Alert } from 'react-native';
// import axios from 'axios';

// const Signup = ({ switchToLogin }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   // Email format validation (basic regex)
//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const handleSignup = async () => {
//     try {
//         const response = await axios.post('http://192.168.100.121:3000/signup', { email, password });

//       if (response.data.success) {
//         Alert.alert('Success', response.data.message);
//         switchToLogin();
//       } else {
//         Alert.alert('Error', response.data.message);
//       }
//     } catch (error) {
//       if (error.response) {
//         // Server responded with a status other than 200
//         Alert.alert('Error', error.response.data.message || 'Server error.');
//       } else {
//         // No response from server or network error
//         Alert.alert('Error', 'Network error. Please check your connection.');
//       }
//     }
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
//       <Text>Confirm Password:</Text>
//       <TextInput
//         style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
//         value={confirmPassword}
//         onChangeText={setConfirmPassword}
//         placeholder="Confirm your password"
//         secureTextEntry
//       />
//       <View style={{ marginBottom: 10 }}>
//         <Button title="Sign Up" onPress={handleSignup} />
//       </View>
//       <Button title="Already have an account? Login" onPress={switchToLogin} />
//     </View>
//   );
// };

// export default Signup;


































import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import axios from 'axios';

const Signup = ({ switchToLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSignup = async () => {
    if (!validateEmail(email)) {
      Alert.alert('Error', 'Please enter a valid email address.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    try {
      const response = await axios.post('http://172.20.10.4:3000/signup', { email, password });
      if (response.data.success) {
        Alert.alert('Success', response.data.message);
        switchToLogin();
      } else {
        Alert.alert('Error', response.data.message);
      }
    } catch (error) {
      Alert.alert('Error', error.response?.data?.message || 'Network error. Please check your connection.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Join LuxeLook!</Text>
      <Text style={styles.subtitle}>Create an account to enjoy exclusive offers</Text>
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
      <TextInput
        style={styles.input}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        placeholder="Confirm Password"
        placeholderTextColor="#bfbfbf"
        secureTextEntry
      />
      <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.switchButton} onPress={switchToLogin}>
        <Text style={styles.switchText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Signup;
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
    letterSpacing: 1.5, // Added spacing to make the title more prominent
  },
  subtitle: {
    fontSize: 18,
    color: '#F48FB1', // Soft pink for a professional look
    textAlign: 'center',
    marginBottom: 40,
  },
  input: {
    height: 55,
    borderColor: '#F06292', // Muted pink for input borders
    borderWidth: 1.5,
    borderRadius: 15,
    paddingHorizontal: 15,
    marginBottom: 25,
    color: '#ffffff', // White text for easy readability
    backgroundColor: '#F8BBD0', // Light pink background for inputs
    fontSize: 16,
    shadowColor: '#000', // Subtle shadow for inputs
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  signupButton: {
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
    color: '#FF4081', // Bright pink for the switch link text
    fontSize: 16,
    fontWeight: '600',
  },
});
