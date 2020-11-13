import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, Image, TouchableOpacity, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput } from 'react-native-gesture-handler';



function HomeScreen({ navigation }) {
  const [a, setA] = useState(0);
  const [nombre, setNombre] = useState("Juanito")
  const [color, setColor] = useState("green")
  const colores = ['red','blue','yellow']
  const [index, setIndex] = useState(0)
  const cambiar_color = () => {
    if (index > 2){
      setIndex(0)
      setColor(colores[index])
    } 
    else{
      setIndex(index + 1)
      setColor(colores[index])
    }
    console.log(index)
    console.log(color)

  }
  const entradaDeTexto = () =>{
    const [valor, onChangeText] = React.useState('place holder owo');
  }
  return (
    <SafeAreaView style={styles.container}>
      <Button title="Boton" color = {color} onPress={() => cambiar_color()}>
      </Button>

      <Text>{nombre}</Text>
      <TextInput style={{height:40, borderColor:'black'}}/> 
        
    </SafeAreaView >
  );
}
const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{
          headerShown: false
        }}
          name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(236,241,248)',
    alignItems: 'center',
    justifyContent: 'center'

  },
  image: {
    width: "90%",
    height: "90%",
    resizeMode: "contain",
    alignSelf: "center",

  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 400 / 2,
    margin: 20,
    borderWidth: 2,
    borderColor: "#CACACA"
  },
  textTitulo: {
    color: "rgb(64,65,79)",
    fontSize: 30
  }
})



