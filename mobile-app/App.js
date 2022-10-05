import { StyleSheet, Text, TouchableOpacity, View, Button, Component} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/core'
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import MenuScreen from './screens/MenuScreen';
import PaymentScreen from './screens/PaymentScreen';
import { auth } from './firebase'

import colors from './global/styles';
import Header from './components/Header';

const Stack = createStackNavigator();

/*function logOut() {
  const navigation = useNavigation()
    const handleSignOut = () => {
      auth
        .signOut()
        .then(() => {
          navigation.navigate("Login")
        })
        .catch(error => alert(error.message))
    }
}
*/
export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator>
      <Stack.Group 
       screenOptions={{ headerStyle: { backgroundColor:'#f3a712' , height:120,} }}
      >
              
        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />
        {/*<Stack.Screen
          name="Home"
          component={HomeScreen}
  />*/}
        <Stack.Screen
          name="Restaurants"
          component={RestaurantScreen}
        />
        <Stack.Screen
          name="Menu"
          component={MenuScreen}
        />
        <Stack.Screen
          name="Payment"
          component={PaymentScreen}
        />
      </Stack.Group>
      </Stack.Navigator> 
    </NavigationContainer>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
});

