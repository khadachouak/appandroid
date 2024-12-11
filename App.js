// import React, { useState } from 'react';
// import { View, Alert } from 'react-native';
// import LoginScreen from './Login';
// import SignupScreen from './Signup';
// import HomeScreen from './Home';

// export default function App() {
//   const [currentScreen, setCurrentScreen] = useState('Login'); // Control which screen to display
//   const [users, setUsers] = useState([]); // Stores registered users
//   const [loggedInUser, setLoggedInUser] = useState(null); // Stores logged in user

//   const handleLoginSuccess = (user) => {
//     setLoggedInUser(user); // Set the logged-in user
//     setCurrentScreen('Home'); // Navigate to Home screen
//   };

//   const handleLogout = () => {
//     Alert.alert('Logging out...', 'You have been logged out successfully.', [
//       {
//         text: 'OK',
//         onPress: () => {
//           setLoggedInUser(null); // Clear the logged-in user
//           setCurrentScreen('Login'); // Navigate back to Login screen
//         },
//       },
//     ]);
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       {loggedInUser ? (
//         <HomeScreen user={loggedInUser} onLogout={handleLogout} />
//       ) : currentScreen === 'Login' ? (
//         <LoginScreen
//           switchToSignup={() => setCurrentScreen('Signup')}
//           users={users}
//           onLoginSuccess={handleLoginSuccess}
//         />
//       ) : (
//         <SignupScreen switchToLogin={() => setCurrentScreen('Login')} users={users} setUsers={setUsers} />
//       )}
//     </View>
//   );
// }

















import React, { useState } from 'react';
import { View } from 'react-native';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

  const switchToSignup = () => setShowLogin(false);
  const switchToLogin = () => setShowLogin(true);

  // Handle login success by setting the user as logged in
  const onLoginSuccess = () => setIsLoggedIn(true);

  // Handle logout by setting the user as logged out
  const onLogout = () => setIsLoggedIn(false);

  return (
    <View style={{ flex: 1 }}>
      {isLoggedIn ? (
        <Home onLogout={onLogout} />
      ) : (
        showLogin ? (
          <Login switchToSignup={switchToSignup} onLoginSuccess={onLoginSuccess} />
        ) : (
          <Signup switchToLogin={switchToLogin} />
        )
      )}
    </View>
  );
};

export default App;

