import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { Image,Button, Platform, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import pizza from './assets/pizza.png';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
       <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home"
                component={HomeScreen}
                 options={{ title: 'Home' }}/>
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
      <Image source={pizza} style={{ width: 305, height: 159 }} />
       <Text style={{ fontFamily: 'Inter_900Black', fontSize: 40 }}>Pizza Palace</Text>
        <Text style={{ fontFamily: 'Inter_900Black', fontSize: 10 }}>Best Russian pizza in town :P</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Receive latest news from us</Text>
        </TouchableOpacity>
        </NavigationContainer>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
   pizza: {
    width: 305,
    height: 159,
    marginBottom: 30,
  },
button: {
    backgroundColor: "grey",
    padding: 10,
    borderRadius: 5,
  }
 })   