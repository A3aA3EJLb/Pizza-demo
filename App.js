import * as React from 'react'
import { Image, Button, StyleSheet, Text, View } from 'react-native';
import pizza from './assets/pizza.png';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider, Box as NBBox, Input, } from 'native-base'

const Box = (props) => {
  return <NBBox    {...props} />
}
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1 , alignItems: 'center', justifyContent: 'center' }}>
      <Box>
          <Image source={pizza} style={{ width: 305, height: 159 }} />
              </Box>
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Box px="110" bg="primary.600" width="90%" height="110">
       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>    
        <Text style={{ fontFamily: 'Inter_900Black', fontSize: 20 }}>Pizza Palace</Text>
        <Text style={{ fontFamily: 'Inter_900Black', fontSize: 10 }}>Best Russian pizza in town :P</Text>
        </View>
          </Box>
            </View>
                    
  <View style={{ alignItems: 'center', justifyContent: 'center' }}>
    <Box px="5" bg="#ED1B24"  height="100">
      <View Styles={{  flex:1 }}>
      <Input size="lg" placeholder="e.g. tom.howard@bethesda.com" />
         </View>
            <Button 
            style={ styles.button } 
            size="lg"
            title="Receive Updates from Pizza Palace"
            onPress={() => navigation.navigate('Details',
             {Input:}
             )}/>
          </Box>                    
      </View>
   </View>    
  );
}

function DetailsScreen({ route, navigation }) {
  const { Input } = route.params;
  return (
       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         <Box px="5" bg="#800080"  height="400">
            <Text>your email {Input}</Text>
            <Text style={{ fontFamily: 'Inter_900Black', fontSize: 20 }}>Welcome to Pizza Palace</Text>
            <Text style={{ fontFamily: 'Inter_900Black', fontSize: 20 }}>We will send updates to</Text>
        </Box>
      </View>
  );
}
const Stack = createNativeStackNavigator();

function App() {
    return (
   <NativeBaseProvider>
        <NavigationContainer>
           <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Home"
                component={HomeScreen}
                options={{ title: 'Home' }} />
             <Stack.Screen name="Details" 
               component={DetailsScreen} />
            </Stack.Navigator>
         </NavigationContainer>
       </NativeBaseProvider>
    );
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
    },
  button: {
    backgroundColor: "#0000FF",
    padding: 10,
    borderRadius: 15,
  },
})
export default App;